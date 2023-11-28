// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// скрыть-показать все
const container = document.querySelector('.get-started__button');

document.querySelector('.get-started__showMore').addEventListener('click', function() {
  if (container.style.height === '200px') {
    container.style.height = '';
    this.textContent = 'Скрыть';
  } else {
    container.style.height = '200px';
    this.textContent = 'Показать все';
  }
  this.classList.toggle('rotate');
});

