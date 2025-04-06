// Simulating a simple cart for the webpage

let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total p');

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const productTitle = button.previousElementSibling.previousElementSibling.textContent;
    const productPrice = parseFloat(button.previousElementSibling.textContent.replace('$', ''));

    // Add product to cart
    cart.push({ title: productTitle, price: productPrice });

    updateCart();
  });
});

function updateCart() {
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = '<li>No items in your cart.</li>';
    cartTotal.textContent = 'Total: $0.00';
  } else {
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(li);
      totalPrice += item.price;
    });

    cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }
}
