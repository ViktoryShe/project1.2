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

document.querySelector('.get-started__showMore').addEventListener('click', function() {
const container = document.querySelector('.get-started__button');
  if (container.style.height === '200px') {
    container.style.height = '';
    this.textContent = 'Скрыть';
  } else {
    container.style.height = '200px';
    this.textContent = 'Показать все';
  }
  this.classList.toggle('rotate');
});

