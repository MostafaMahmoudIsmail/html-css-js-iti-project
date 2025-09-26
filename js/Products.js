const params = new URLSearchParams(window.location.search);
let Gcategory = params.get("category");

window.addEventListener("load", () => {
  async function initProducts() {
    let res = await fetch("https://dummyjson.com/c/d505-cb62-41ec-9f77");
    let data = await res.json();
    let products = data.products;

    loadFav();
    loadCart();

    let productContainer = document.getElementsByClassName(
      "ourProducts-content"
    )[0];

    products.forEach((product) => {
      product.quantity = 1;

      let card = document.createElement("div");
      card.classList.add("product-card");

      let favIcon = document.createElement("i");
      favIcon.classList.add("fa-regular", "fa-heart");

      if (fav && fav.some((p) => p.id === product.id)) {
        favIcon.classList.add("active-heart");
      }

      let cardImage = document.createElement("div");
      cardImage.classList.add("card-image");
      let img = document.createElement("img");
      img.src = product.image;
      cardImage.appendChild(img);

      let cardContent = document.createElement("div");
      cardContent.classList.add("card-content");

      let title = document.createElement("p");
      title.classList.add("card-title");
      title.textContent = product.title;

      let price = document.createElement("p");
      price.classList.add("salary");
      price.textContent = product.price;

      let starsDiv = document.createElement("div");
      starsDiv.classList.add("stars");

      for (let i = 0; i < 5; i++) {
        let star = document.createElement("i");
        star.classList.add("fa-solid", "fa-star");

        if (i < product.rating) {
          star.style.color = "#ffd43b";
        } else {
          star.style.color = "#ccc";
        }
        starsDiv.appendChild(star);
      }

      cardContent.appendChild(title);
      cardContent.appendChild(price);
      cardContent.appendChild(starsDiv);

      card.appendChild(favIcon);
      card.appendChild(cardImage);
      card.appendChild(cardContent);

      productContainer.appendChild(card);

      favIcon.addEventListener("click", () => {
        favIcon.classList.toggle("active-heart");

        if (favIcon.classList.contains("active-heart")) {
          fav.push(product);
        } else {
          fav = cart.filter((p) => p.id !== product.id);
        }
        saveFav();
      });

      cardImage.addEventListener("click", () => {
        let existing = cart.find((p) => p.id === product.id);

        if (existing) {
          cart = cart.filter((p) => p.id !== product.id);
          cardImage.classList.remove("cart-active");
        } else {
          cart.push({ ...product, quantity: 1 });
          cardImage.classList.add("cart-active");
        }

        saveCart();
      });
    });
  }

  initProducts();
});
