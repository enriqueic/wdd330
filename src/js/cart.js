import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Price container logic
  const totalContainer = document.getElementById("cart-total");
  if (cartItems.length > 0) {
    // Removing hide class from cart footer
    const cartFooter = document.querySelector(".cart-footer");
    cartFooter.classList.remove("hide");
    // Use map to extract prices, then reduce to sum
    const total = cartItems
      .map((item) => Number(item.FinalPrice))
      .reduce((sum, price) => sum + price, 0);
    totalContainer.innerHTML = `<p>$${total.toFixed(2)}</p>`;
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
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
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
