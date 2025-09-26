let cart = [];
let fav = [];
let checkout = [];
loadFav();
loadCart();
loadCheckout();

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

function saveCheckout() {
  localStorage.setItem("checkout", JSON.stringify(checkout));
}

function loadCheckout() {
  let savedCheckout = localStorage.getItem("checkout");
  if (savedCheckout) {
    checkout = JSON.parse(savedCheckout);
  }
}

window.addEventListener("load", () => {
  // nav links
  let homePage = document.getElementsByClassName("homePage")[0];
  let productsPage = document.getElementsByClassName("productPage")[0];
  let aboutPage = document.getElementsByClassName("aboutPage")[0];
  let signupPage = document.getElementsByClassName("sign-upPage")[0];

  homePage.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  productsPage.addEventListener("click", () => {
    window.location.href = "products.html?category=all";
  });

  aboutPage.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  signupPage.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  document.getElementById("cart-icon").addEventListener("click", () => {
    window.location.href = "cart.html";
  });

  document.getElementById("fav-icon").addEventListener("click", () => {
    window.location.href = "fav.html";
  });
});
