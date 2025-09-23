window.addEventListener("load", () => {
  let favContent = document.querySelector(".ourProducts-content");

  let favs = JSON.parse(localStorage.getItem("fav")) || [];

  if (favs.length === 0) {
    favContent.innerHTML = "<p>You have no favourites</p>";
    return;
  }

  favs.forEach((product) => {

    let card = document.createElement("div");
    card.classList.add("product-card");

    let removeIcon = document.createElement("i");
    removeIcon.classList.add("fa-solid", "fa-xmark");
    removeIcon.style.cursor = "pointer";

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
    price.textContent = `${product.price}`;

    let starsDiv = document.createElement("div");
    starsDiv.classList.add("stars");
    for (let i = 0; i < 5; i++) {
      let star = document.createElement("i");
      star.classList.add("fa-solid", "fa-star");
      star.style.color = i < product.rating ? "#ffd43b" : "#ccc";
      starsDiv.appendChild(star);
    }

    cardContent.appendChild(title);
    cardContent.appendChild(price);
    cardContent.appendChild(starsDiv);

    card.appendChild(removeIcon);
    card.appendChild(cardImage);
    card.appendChild(cardContent);

    favContent.appendChild(card);

    removeIcon.addEventListener("click", () => {
      favs = favs.filter((p) => p.id !== product.id);
      localStorage.setItem("fav", JSON.stringify(favs));
      card.remove();
      if (favs.length === 0) {
        favContent.innerHTML = "<p>You have no favourites</p>";
      }
    });
  });
});
