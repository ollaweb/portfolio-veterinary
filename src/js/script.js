"use strict";
//================== Меню бургер =========================

/*
Настройка меню бургер (открытие/закрытие при нажатии на бургер;
закрытие при переходе по ссылке меню)
*/

const body = document.querySelector("body")
// const burger = document.querySelector(".burger");
// const burgerItems = document.querySelector(".burger__items");
// const menuAside = document.querySelector(".menu__items");
// const menu = document.querySelector(".menu");


// function burgerSwitch() {
//     if (window.innerWidth <= 768) {
//         menuAside.classList.toggle("_opened");
//         burgerItems.classList.toggle("_opened");
//         body.classList.toggle("_lock");
//     }

// }

// burger.addEventListener("click", () => {
//     burgerSwitch();
// });


// const menuItemsLink = document.querySelectorAll(".menu__item");

// menuItemsLink.forEach(item => {
//     const link = item.querySelector("a");
//     link.addEventListener("click", (e) => {
//         e.stopPropagation();
//         burgerSwitch();

//     });
// });

// ================= Стрелка наверх ========================

/*
Появление стрелки вверх для прокрутки при скролле вниз на 800 на desktop;
при скроле вниз на 600 на планшете и мобильном телфоне
*/

// const arrowBlock = document.querySelector(".arrow-up");
// window.addEventListener("scroll", () => {
//     if (window.scrollY >= 800 && window.innerWidth > 768) {
//         arrowBlock.classList.add("_active");
//     } else if (window.scrollY >= 600 && window.innerWidth <= 768) {
//         arrowBlock.classList.add("_active");
//     } else {
//         arrowBlock.classList.remove("_active");
//     }

// });

//Плавный скролл наверх
// $('a[href^="#"').on('click', function () {

//     let href = $(this).attr('href');

//     if (href == "#up") {
//         $('html, body').animate({
//             scrollTop: $(href).offset().top
//         }, {
//             duration: 400,
//         });
//     } else {
//         $('html, body').animate({
//             scrollTop: $(href).offset().top
//         }, {
//             duration: 700,
//         });
//     }
//     return false;
// });

// ================= slick-slider ===============================
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: $(".promo__dots"),
        // autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
    });
    $('.experts-slider').slick({
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    // arrows: false,
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.content-slider').slick({
        slidesToShow: 3,
        infinite: false,
        responsive: [

            {
                breakpoint: 1730,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });
    $('.services-slider').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });
    $('.expert-slider').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });
});
// ============== Header открытие спойлера ===============
const spoiler = document.querySelector(".spoiler");
const spoilerWrapper = document.querySelector(".spoiler__wrapper");
const spoilerItem = document.querySelectorAll(".spoiler__item a");

//Закрыьть блок спойлера
function spoilerHide() {
    spoilerWrapper.classList.remove("opened-spoiler");
}

//Переключение открыто/закрыто спойлера
function spoilerToggle() {
    spoilerWrapper.classList.toggle("opened-spoiler");
}

//Когда нажато "О нас" спойлер открывается, закрывается
spoiler.addEventListener("click", () => {
    spoilerToggle();
});
//Нажатие на пункт меню из блока спойлера закройдет блок спойлера
spoilerWrapper.addEventListener("click", (event) => {
    console.log(event.target);
    spoilerItem.forEach(element => {
        if (event.target == element) {
            spoilerHide();
        }
    });
});

// ============== Header навигация по городам ===============
const headerLocation = document.querySelector(".header__location");
const headerCity = document.querySelector(".header__city");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalCity = document.querySelectorAll(".modal__city");
const modalClose = document.querySelector(".modal__close");
const allCities = document.querySelectorAll(".contacts__wrapper");
const volgograd = document.querySelector(".contacts__volgograd");
const grozny = document.querySelector(".contacts__grozny");

//Открыть модальное окно
function modalOpen() {
    overlay.classList.add("overlay_opened");
}

//Скрыть модальное окно
function modalHide() {
    overlay.classList.remove("overlay_opened");
    body.classList.toggle("_lock");
}

//При клике на локацию в шапке сайта откроется модальное окно
headerLocation.addEventListener("click", (event) => {
    modalOpen();
    body.classList.toggle("_lock");
});

//При клике на крестик модального окна, модальное окно скроется
modalClose.addEventListener("click", () => {
    modalHide();
});

//При клике на затемненную подложку модальное окно скроется
overlay.addEventListener("click", (event) => {
    if (event.target == overlay) {
        modalHide();
    }
});

//Работа при клике в модальном окне
modal.addEventListener("click", (event) => {
    //Для каждого города, что есть в списке модального окна
    modalCity.forEach(element => {
        //Если мы нажали на любой город в списке мордального окна
        if (event.target == element) {
            //Название города записать в переменную cityName
            const cityName = element.innerHTML;
            //Если название выбранного города совпадает с тем,
            //что уже стоит в шапке сайта,
            //то ничего не происходит
            if (cityName == headerCity.innerHTML) {
                //Иначе, если мы выбрали город "Грозный"
            } else if (cityName == "Грозный") {
                //Скрыть все блоки в секции "Контакты"
                allCities.forEach(city => {
                    city.classList.remove("opened-city");
                });
                //Вывести блок для города "Грозный"
                grozny.classList.add("opened-city");
                //Аналогично для другого города
            } else if (cityName == "Волгоград") {
                allCities.forEach(city => {
                    city.classList.remove("opened-city");
                });
                volgograd.classList.add("opened-city");
            }
            //Вписать выбранное название города из списка
            //модального окна в шапку сайта
            headerCity.textContent = cityName;
            //Скрыть модальное окно
            modalHide();
        }
    });
});
