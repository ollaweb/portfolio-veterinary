'use strict'
import { spoilerHide } from './spoiler.js';

function burger() {
    /*
    Настройка меню бургер (открытие/закрытие при нажатии на бургер;
    закрытие при переходе по ссылке меню)
    */

    const body = document.querySelector("body");
    const burger = document.querySelector(".burger");
    const burgerItems = document.querySelector(".burger__items");
    const menuItemsLink = document.querySelectorAll(".menu__item");
    const menu = document.querySelector(".menu");

    /*
    Фукция, которая работает при ширине экрана 992пикселя
    и меньше. 
    Открывает/скрывает меню сбоку с подложкой, переводит бургер в крестик
    и обратно в бургер, блокирует прокрутку body
    */
    function burgerSwitch() {
        if (window.innerWidth <= 992) {
            overlay.classList.toggle("overlay_opened");
            menu.classList.toggle("opened-menu");
            headerLocation.classList.toggle("opened-location");
            burgerItems.classList.toggle("_opened");
            body.classList.toggle("_lock");
        }

    }
    /*
    Если меню-бургер закрыто, а спойлер в меню открыт остался, 
    то закрыть спойлер 
    */
    function spoilerHideWithCloseBurger() {
        if (!burgerItems.classList.contains("_opened") && spoilerWrapper.classList.contains("opened-spoiler")) {
            spoilerHide();
        }
    }
    /* 
    Если ширина экрана менее или равна 992пикселя
    и куда нажали - это подложка выезжающего меню,
    то закрыть бургер, убрать спойлер, если открыт, разблокировать body
    */
    menu.addEventListener("click", (event) => {
        if (window.innerWidth <= 992 && event.target == menu) {
            burgerSwitch();
            spoilerHideWithCloseBurger();
        }
    });
    burger.addEventListener("click", () => {
        burgerSwitch();
        spoilerHideWithCloseBurger();
    });
    /*Когда нажали на пункт меню из бургера, 
то идет переход по ссылке, а меню-бургер закрывается
*/
    menuItemsLink.forEach(item => {
        const link = item.querySelector("a");
        if (link) {
            link.addEventListener("click", (e) => {
                e.stopPropagation();
                burgerSwitch();
                spoilerHideWithCloseBurger();
            });
        } else {
            item.addEventListener("click", () => {

                burgerSwitch();
                spoilerHideWithCloseBurger();
                modalOpen(modalLogin);
            });
        }

    });
}

export default burger;