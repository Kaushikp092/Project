const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

let totalPrice = 0;

// Display cart items
cartItems.forEach(item => {
     const itemElement = document.createElement('div');
     itemElement.innerHTML = `<h2>${item.title}</h2><p>Price: ₹${item.price}</p>`;
     cartItemsContainer.appendChild(itemElement);
     totalPrice += item.price;
});

// Update total price
totalPriceElement.innerText = `Total Price: ₹${totalPrice}`;

// Checkout button functionality
document.getElementById('checkout-button').addEventListener('click', () => {
     alert('Proceeding to checkout...');
     // Implement checkout logic here
});

let cart = [];

function addToCart(productName, productPrice) {
     const product = {
          name: productName,
          price: productPrice
     };

     cart.push(product);
     alert(`${productName} has been added to your cart!`);
     console.log(cart); // For debugging purposes, you can see the cart in the console
}