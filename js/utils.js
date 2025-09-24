let cart = [];
let fav = [];

loadFav();
loadCart();

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
