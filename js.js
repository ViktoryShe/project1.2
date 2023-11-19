// swiper

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// скрыть-показать все
const hideIcon = document.querySelector('.get-started__arrow');

document.querySelector('.get-started__showMore').addEventListener('click', function() {
    var lenovoButton = document.querySelector('.get-started__lenovo1');
    if (lenovoButton.style.display === 'none') {
        lenovoButton.style.display = 'block';
      this.textContent = 'Скрыть';
      hideIcon.style = 'transform: rotate(0deg)'
    } else {
        lenovoButton.style.display = 'none';
      this.textContent = 'Показать все';
      hideIcon.style = 'transform: rotate(180deg)'
    }
    var samsungButton = document.querySelector('.get-started__samsung1');
    if (samsungButton.style.display === 'none') {
        samsungButton.style.display = 'block';
    } else {
        samsungButton.style.display = 'none';
    }
    var appleButton = document.querySelector('.get-started__apple1');
    if (appleButton.style.display === 'none') {
        appleButton.style.display = 'block';
    } else {
        appleButton.style.display = 'none';
    }
  });

