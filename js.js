// swiper
new Swiper('.swiper',{
  slidesPerView: "auto",
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 12,
      autoplay:false,
    }
  }

});

// скрыть-показать все

const container = document.querySelector('.swiper');
const showMoreButton = document.querySelector('.get-started__showMore');

showMoreButton.addEventListener('click', function() {
  if (container.classList.contains('expanded')) {
    container.classList.remove('expanded');
    this.textContent = 'Скрыть';
  } else {
    container.classList.add('expanded');
    this.textContent = 'Показать все';
  }
  this.classList.toggle('rotate');
});