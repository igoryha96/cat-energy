/* в этот файл добавляет скрипты*/
let modalToggle = document.querySelector(".main-header__button");
let modalMenu = document.querySelector(".modal-menu");
let maps = document.querySelector(".map");
console.log(modalToggle);

modalToggle.classList.remove("main-header__button--nojs");
modalMenu.classList.remove("modal-menu--nojs-menu");
maps.classList.remove("map--nojs");

modalToggle.onclick = function () {
  modalToggle.classList.toggle("main-header__button--closed");
  modalToggle.classList.toggle("main-header__button--open");
  modalMenu.classList.toggle("modal-menu--closed");
  modalMenu.classList.toggle("modal-menu--open");
};
