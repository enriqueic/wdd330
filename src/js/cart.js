import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Price container logic
  const totalContainer = document.getElementById("cart-total");
  const cartFooter = document.querySelector(".cart-footer");
  if (cartItems.length > 0) {
    cartFooter.classList.remove("hide");
    // Quantity logic
    const total = cartItems
      .map((item) => Number(item.FinalPrice) * (item.quantity || 1))
      .reduce((sum, price) => sum + price, 0);
    totalContainer.innerHTML = `<p>$${total.toFixed(2)}</p>`;
  } else {
    cartFooter.classList.add("hide");
    totalContainer.innerHTML = "";
  }
}

function cartItemTemplate(item) {
  return `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.quantity || 1}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
}

renderCartContents();