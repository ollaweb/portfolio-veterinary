'use strict'
function burger() {
    const burger = document.querySelector(".burger");
    const burgerStrips = document.querySelector(".burger__items");

    const menu = document.querySelector(".menu");
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuItem = document.querySelectorAll(".menu__item");
    const spoiler = document.querySelector(".spoiler");

    const headerLocation = document.querySelector(".header__location");
    function openBurgerMenu() {
        burger.classList.add("burger_opened");
        burgerStrips.classList.add("_opened");
        menu.classList.add("opened-menu");
        document.body.style.overflow = "hidden";
        menuOverlay.classList.add("menu-overlay_opened");
        headerLocation.classList.add("opened-location");
    }
    function closeBurgerMenu() {
        burger.classList.remove("burger_opened");
        burgerStrips.classList.remove("_opened");
        menu.classList.remove("opened-menu");
        document.body.style.overflow = "";
        menuOverlay.classList.remove("menu-overlay_opened");
        headerLocation.classList.remove("opened-location");
    }
    function closeByClickOnOverlay() {
        menuOverlay.addEventListener("click", (event) => {
            event.stopPropagation();
            if (event.target === menuOverlay) {
                closeBurgerMenu();
            }
        });
    }
    function closeByClickOnMenuItem() {
        menu.addEventListener("click", (event) => {
            event.stopPropagation();
            menuItem.forEach(item => {
                if (event.target === item && item !== spoiler) {
                    closeBurgerMenu();
                }
            });

        });
    }

    function clickOnBurger() {
        burger.addEventListener("click", (event) => {
            event.stopPropagation();
            if (!burgerStrips.classList.contains("_opened")) {
                openBurgerMenu();
                closeByClickOnOverlay();
                closeByClickOnMenuItem();
            } else {
                closeBurgerMenu();
            }
        });
    }
    clickOnBurger();
}

export default burger;