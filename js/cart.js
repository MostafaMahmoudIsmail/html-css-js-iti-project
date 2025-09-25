window.addEventListener("load", () => {
  let cartContent = document.querySelector(".cart-content");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContent.innerHTML = "<p>Your cart is empty 🛒</p>";
    return;
  }

  cart.forEach((product) => {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    let productDiv = document.createElement("div");
    productDiv.classList.add("product");
    let img = document.createElement("img");
    img.src = product.image;
    productDiv.appendChild(img);

    let productDesc = document.createElement("div");
    productDesc.classList.add("product-desc");

    let productName = document.createElement("p");
    productName.classList.add("product-name");
    productName.textContent = product.title;

    let qtyInput = document.createElement("input");
    qtyInput.type = "number";
    qtyInput.value = 1;
    qtyInput.min = 1;

    productDesc.appendChild(productName);
    productDesc.appendChild(qtyInput);

    let price = document.createElement("p");
    price.classList.add("product-price");
    price.textContent = `${product.price}`;

    cartItem.appendChild(productDiv);
    cartItem.appendChild(productDesc);
    cartItem.appendChild(price);

    cartContent.appendChild(cartItem);
  });


  let CheckOutBtn = document.getElementsByClassName("BtnCheckOut")[0]
  CheckOutBtn.addEventListener("click", () => {
    checkout = cart
    saveCheckout()
    window.location.href = "checkout.html"
  })





});
