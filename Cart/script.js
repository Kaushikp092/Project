function updateTotal() {
  const rows = document.querySelectorAll('#cart tbody tr');
  let grandTotal = 0;

  rows.forEach(row => {
    const price = parseFloat(row.querySelector('.price').innerText.replace('$', ''));
    const quantity = parseInt(row.querySelector('.quantity').value);
    const total = price * quantity;

    row.querySelector('.total').innerText = `$${total.toFixed(2)}`;
    grandTotal += total;
  });

  document.getElementById('grandTotal').innerText = `$${grandTotal.toFixed(2)}`;
}

function removeItem(button) {
  const row = button.closest('tr');
  row.parentNode.removeChild(row);
  updateTotal();
}