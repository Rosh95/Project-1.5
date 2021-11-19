const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1.3,
  spaceBetween: 16,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var btnText = document.querySelector('.brands__footer--btn');
var brandBoxHeight = document.querySelector('.brands__list');
var arrowDirection = document.querySelector('.brands__footer--arrow');

btnText.addEventListener('click', function () {
  if (btnText.textContent === 'Скрыть') {
    brandBoxHeight.classList.remove('brands__list--height');
    arrowDirection.src = 'img/icon.svg';
    return (btnText.textContent = 'Показать все');
  }
  if (btnText.textContent === 'Показать все') {
    brandBoxHeight.classList.add('brands__list--height');
    btnText.textContent = 'Скрыть';
    arrowDirection.src = 'img/icon2.svg';
  }
});
