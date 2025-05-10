// let addToCart = document.querySelectorAll(".add-to-cart");

// addToCart.forEach((cart) => {
//      cart.addEventListener("click", () => {
//           alert("Item add to cart");
//      });
// });
const cartCount = document.querySelector('.cart-count');

document.querySelectorAll('.add-to-cart').forEach(button => {
     button.addEventListener('click', () => {
          const productTitle = button.parentElement.querySelector('.product-title').innerText;
          alert(`Added "${productTitle}" to cart!`);
          cartCount.textContent = cart.length;
     });
});



