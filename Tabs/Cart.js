const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

let emptyMsgContainer = document.querySelector(".empty-msg-container");
let msgContainer = document.getElementsByClassName("msg-container");

let cart = [];
let totalPrice = 0;

if (cartItems.length === 0) {
     emptyMsgContainer.classList.remove("hide");
     if(cartItems.length > 0)
     emptyMsgContainer.classList.add("hide");
} else{
     msgContainer.classList.remove("hide");
     // Display cart items
     // cartItems.forEach(item => {
     //      const itemElement = document.createElement('div');
     //      itemElement.innerHTML = `<h2>${item.title}</h2><p>Price: ₹${item.price}</p>`;
     //      cartItemsContainer.appendChild(itemElement);
     //      totalPrice += item.price;
     // });

     // // Update total price
     // totalPriceElement.innerText = `Total Price: ₹${totalPrice}`;

     // // Checkout button functionality
     // document.getElementById('checkout-button').addEventListener('click', () => {
     //      alert('Proceeding to checkout...');
     //      // Implement checkout logic here
     // });
}






