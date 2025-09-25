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
