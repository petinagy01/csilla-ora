document.addEventListener('DOMContentLoaded', () => {
  const slidesEl = document.querySelector('.slides');
  const imgs = slidesEl.querySelectorAll('img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;

  function updateCarousel() {
    const width = imgs[0].clientWidth;
    slidesEl.style.transform = `translateX(-${index * width}px)`;
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + imgs.length) % imgs.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % imgs.length;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
});