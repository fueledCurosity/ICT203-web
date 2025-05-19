<script>
document.querySelectorAll('.buy-now-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const product = {
      name: this.dataset.name,
      price: this.dataset.price
    };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
  });
});
</script>
