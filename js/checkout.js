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

  if (hasError) {
    alert("fill the empty fields");
  } else {
    alert("All good");
  }
});
