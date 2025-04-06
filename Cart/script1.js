let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
  // Add product to cart
  cart.push({ name: productName, price: productPrice });
  totalPrice += productPrice;

  // Update cart display
  updateCart();
}

function removeFromCart(index) {
  // Remove item from cart
  totalPrice -= cart[index].price;
  cart.splice(index, 1);

  // Update cart display
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cartList');
  const totalPriceElement = document.getElementById('totalPrice');
  cartList.innerHTML = ''; // Clear cart list

  // Display each cart item
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('cart-item');
    li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
                        <button onclick="removeFromCart(${index})">Remove</button>`;
    cartList.appendChild(li);
  });

  // Update total price
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Checkout successful! Total: $${totalPrice.toFixed(2)}`);
    // Reset cart after checkout
    cart = [];
    totalPrice = 0;
    updateCart();
  }
}
