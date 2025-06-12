const cart = [];
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

document.querySelectorAll(".product button").forEach(button => {
  button.addEventListener("click", e => {
    const product = e.target.closest(".product");
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total;
}
