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
    let allErrors = "";

    let phoneInput = document.getElementById("phone-number").value.trim();
    if (phoneInput !== "" && !/^\d+$/.test(phoneInput)) {
      allErrors += "❗ Phone number must contain only digits\n";
      hasError = true;
    }

    let emailInput = document.getElementById("email-address").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput !== "" && !emailRegex.test(emailInput)) {
      allErrors += "❗ Please enter a valid email address\n";
      hasError = true;
    }

    let radios = document.querySelectorAll('input[name="cash-bank"]');
    let radioChecked = Array.from(radios).some((radio) => radio.checked);
    if (!radioChecked) {
      allErrors += "❗ Please select Bank or Cash on Delivery\n";
      hasError = true;
    }

    if (hasError) {
      allErrors += "❗fill the empty fields\n";
    } else {
      allErrors += "All good❗\n";
    }

    showWarning(allErrors);
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

  function showWarning(message) {
    document.getElementById("warningText").innerText = message;
    document.getElementById("warningOverlay").style.display = "flex";
  }

  let closebtn = document.getElementById("close-warning");
  closebtn.addEventListener("click", closeWarning);

  function closeWarning() {
    document.getElementById("warningOverlay").style.display = "none";
  }
});
