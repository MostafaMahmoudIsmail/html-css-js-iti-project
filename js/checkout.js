window.addEventListener("load", () => {
  document.querySelector(".place-order").addEventListener("click", () => {
    let inputs = [
      document.getElementById("first-name"),
      document.getElementById("last-name"),
      document.getElementById("street-address"),
      document.getElementById("city"),
      document.getElementById("phone-number"),
      document.getElementById("email-address"),
    ];

    let hasError = false;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.classList.add("error");
        hasError = true;
      } else {
        input.classList.remove("error");
      }
    });

    let radios = document.querySelectorAll('input[name="cash-bank"]');
    let radioChecked = Array.from(radios).some((radio) => radio.checked);

    if (!radioChecked) {
      alert("Please select Bank or Cash on Delivery");
      hasError = true;
    }

    if (hasError) {
      alert("fill the empty fields");
    } else {
      alert("All good");
    }
  });

  function initCheckout() {
    loadCheckout();

    const productsContainer = document.querySelector(".products");
    const subtotalElement = document.querySelector(".subtotal p:last-child");
    const totalElement = document.querySelector(".total p:last-child");

    let subtotal = 0;

    checkout.forEach((product) => {
      let price = parseFloat(product.price.replace("$", ""));
      subtotal += price;

      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;

      const name = document.createElement("p");
      name.classList.add("product-name");
      name.textContent = product.title;

      const priceTag = document.createElement("p");
      priceTag.classList.add("product-price");
      priceTag.textContent = product.price;

      productDiv.appendChild(img);
      productDiv.appendChild(name);
      productDiv.appendChild(priceTag);

      productsContainer.appendChild(productDiv);
    });

    subtotalElement.textContent = `$${subtotal}`;
    totalElement.textContent = `$${subtotal}`;
  }

  initCheckout();
});
