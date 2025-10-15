document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('couponModal');
  const closeBtn = document.getElementById('closeCoupon');

  // Megjelenítés belépéskor
  setTimeout(() => {
    modal.classList.add('active');
  }, 500);

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
});
