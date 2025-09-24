// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.addEventListener("load", () => {
  // category
  async function initCategory() {
    let res = await fetch("https://dummyjson.com/c/e285-1aca-444f-9e1f");
    let data = await res.json();
    let categories = data.categories;

    let categoryContent =
      document.getElementsByClassName("category-content")[0];

    for (let i = 0; i < categories.length; i++) {
      let newIcon = document.createElement("i");
      newIcon.classList.add(...categories[i].icon.split(" "));

      let newPar = document.createElement("p");
      newPar.textContent = categories[i].name;

      let newCategory = document.createElement("div");
      newCategory.classList.add("category-card");

      newCategory.appendChild(newIcon);
      newCategory.appendChild(newPar);

      categoryContent.appendChild(newCategory);
    }

    let categoryCards = document.querySelectorAll(".category-card");

    categoryCards.forEach((card) => {
      card.addEventListener("click", () => {
        window.location.href =
          "products.html?category=" + card.querySelector("p").textContent;
      });
    });
  }

  initCategory();

  async function initProducts() {
    let res = await fetch("https://dummyjson.com/c/e28b-251e-4547-bb35");
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

  // nav links
  let homePage = document.getElementsByClassName("homePage")[0];
  let contactPage = document.getElementsByClassName("contactPage")[0];
  let aboutPage = document.getElementsByClassName("aboutPage")[0];
  let signupPage = document.getElementsByClassName("sign-upPage")[0];

  homePage.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  contactPage.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  aboutPage.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  signupPage.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  // all products nav

  let allProductsBtn = document.querySelector(".product-button");
  allProductsBtn = allProductsBtn.querySelector("button");
  allProductsBtn.addEventListener("click", () => {
    window.location.href = "products.html?category=all";
  });

  // let FavIcon = document.querySelectorAll(".fa-heart");
  // FavIcon.forEach((icon) => {
  //   icon.addEventListener("click", () => {
  //     icon.style.backgroundColor = "black";
  //     icon.style.color = "black";
  //     icon.style.fontSize = "30px";
  //   });
  // });

  let FavIcon = document.querySelectorAll(".product-card i");
  FavIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("active-heart");
    });
  });
});

function saveFav() {
  localStorage.setItem("fav", JSON.stringify(fav));
}

function loadFav() {
  let savedFav = localStorage.getItem("fav");
  if (savedFav) {
    fav = JSON.parse(savedFav);
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  let savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}
