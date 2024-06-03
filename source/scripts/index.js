/* в этот файл добавляет скрипты*/
const modalToggle = document.querySelector('.main-header__button');
const modalMenu = document.querySelector('.modal-menu');
const maps = document.querySelector('.map');
const mapsGoogle = document.querySelector('.map-google');

modalToggle.classList.remove('main-header__button--nojs');
modalMenu.classList.remove('modal-menu--nojs-menu');
maps.classList.remove('map--nojs');
mapsGoogle.classList.remove('map-google--no-js-map');

modalToggle.onclick = function () {
  modalToggle.classList.toggle('main-header__button--closed');
  modalToggle.classList.toggle('main-header__button--open');
  modalMenu.classList.toggle('modal-menu--closed');
  modalMenu.classList.toggle('modal-menu--open');
};
