"use strict";

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
    spoilerItem.forEach(element => {
        if (event.target == element) {
            spoilerHide();
        }
    });
});


//================== Меню бургер =========================

/*
Настройка меню бургер (открытие/закрытие при нажатии на бургер;
закрытие при переходе по ссылке меню)
*/

const body = document.querySelector("body")
const burger = document.querySelector(".burger");
const burgerItems = document.querySelector(".burger__items");
const menuAside = document.querySelector(".menu__items");
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


const menuItemsLink = document.querySelectorAll(".menu__item");
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


// ============== Header Модальное окно и навигация по городам ===============
const headerLocation = document.querySelector(".header__location");
const headerCity = document.querySelector(".header__city");
const overlay = document.querySelector(".overlay");
const modal = document.querySelectorAll(".modal");
const modalLocation = document.querySelector(".modal_location");
const modalCity = document.querySelectorAll(".modal__city");
const modalClose = document.querySelectorAll(".modal__close");
const allCities = document.querySelectorAll(".contacts__wrapper");
const volgograd = document.querySelector(".contacts__volgograd");
const grozny = document.querySelector(".contacts__grozny");

//Открыть модальное окно
function modalOpen(modalModify) {
    overlay.classList.add("overlay_opened");
    modalModify.classList.add("modal_opened");
    body.classList.add("_lock");
    burger.classList.add("burger__lock");
}

//Скрыть модальное окно
function modalHide() {
    overlay.classList.remove("overlay_opened");
    body.classList.remove("_lock");
    burger.classList.remove("burger__lock");
    modal.forEach(modal => {
        modal.classList.remove("modal_opened");
    });
}

//При клике на локацию в шапке сайта откроется модальное окно
headerLocation.addEventListener("click", () => {
    burgerSwitch();
    modalOpen(modalLocation);

});

//При клике на крестик модального окна, модальное окно скроется
modalClose.forEach(x => {
    x.addEventListener("click", () => {
        modalHide();
    });
});

//При клике на затемненную подложку модальное окно скроется
overlay.addEventListener("click", (event) => {
    if (event.target == overlay) {
        modalHide();
    }
});

//Работа при клике в модальном окне
modalLocation.addEventListener("click", (event) => {
    //Для каждого города, что есть в списке модального окна
    modalCity.forEach(element => {
        //Если мы нажали на любой город в списке мордального окна
        if (event.target == element) {
            //Название города записать в переменную cityName
            const cityName = element.innerHTML;

            /*Если длина массива с блоками контактов = 0
            (иначе блоков с контактами просто нет на странице),
            то просто поменяется город в шапке,
            и закроется модальное окно
            */
            if (allCities.length != 0) {
                /*Если название выбранного города совпадает с тем,
                что уже стоит в шапке сайта,
                то ничего не происходит
                */
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
            }

            //Вписать выбранное название города из списка
            //модального окна в шапку сайта
            headerCity.textContent = cityName;
            //Скрыть модальное окно
            modalHide();
        }
    });
});

// ==============Модальное окно отзыва ===============
const leaveFeedback = document.querySelector(".aside__feedback");
const modalFeedback = document.querySelector(".modal_feedback");
const modalForm = document.querySelectorAll(".modal__form");
const forms = document.querySelectorAll("form");
const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

const modalThanks = document.querySelector(".modal_thanks");

/*
Отправка данных форм на сервер
*/
async function postData(url, data) {
    const result = await fetch(url, {
        method: "POST",
        body: data
    });

    return await result.text();
};

function clearInputs() {
    inputs.forEach(input => {
        input.value = "";
    });
    textareas.forEach(textarea => {
        textarea.value = "";
    });
}

if (leaveFeedback) {
    leaveFeedback.addEventListener("click", () => {
        modalOpen(modalFeedback);
    });

}

forms.forEach(form => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        postData("./server.php", formData)
            .then(res => {
                console.log(res);
                modalHide();
                if (form.classList.contains("modal__form_feedback")) {
                    modalOpen(modalThanks);
                }
            })
            .catch(() => {
                console.log("Error!");
            })
            .finally(() => {
                clearInputs();
            });
    });
});

// ==============Модальное окно личного кабинета ===============
const logIn = document.getElementById("login");
const modalLogin = document.querySelector(".modal_login");

// logIn.addEventListener("click", () => {
//     modalOpen(modalLogin);
// });

//======Корректировка ввода пользователя====
const phoneInput = document.getElementById("telInput");
phoneInput.addEventListener("input", (e) => {
    let ar = Array.from(e.target.value);
    let validPhone = true;
    for (let i = 0; i < ar.length && validPhone; i++) {
        const char = ar[i];
        switch (i) {
            case 0:
                if (char != "+")
                    ar.splice(0, 0, "+");
                break;
            case 1:
                if (!isDigit(char))
                    validPhone = false;
                else if (ar[i + 1] != "(")
                    ar.splice(i + 1, 0, "(");
                break;
            case 3:
            case 4:
                if (!isDigit(char))
                    validPhone = false;
                break;
            case 5:
                if (!isDigit(char))
                    validPhone = false;
                else if (ar[i + 1] != ")")
                    ar.splice(i + 1, 0, ")");
                break;
            case 7:
            case 8:
                if (!isDigit(char))
                    validPhone = false;
                break;
            case 9:
                if (!isDigit(char))
                    validPhone = false;
                else if (ar[i + 1] != "-")
                    ar.splice(i + 1, 0, "-");
                break;
            case 11:
                if (!isDigit(char))
                    validPhone = false;
                break;
            case 12:
                if (!isDigit(char))
                    validPhone = false;
                else if (ar[i + 1] != "-")
                    ar.splice(i + 1, 0, "-");
                break;
            case 14:
            case 15:
                if (!isDigit(char))
                    validPhone = false;
                break;
        }
    }
    if (validPhone && ar.length == 16)
        e.target.value = ar.join('');
});
function isDigit(char) {
    return /\d/.test(char);
};
phoneInput.addEventListener("focus", (e) => {
    e.target.value = "+7";
});

//===== Валидация формы модального окна =========
// const form = document.querySelector(".modal__form");
// function validateForm(selectedForm) {
//     const input = selectedForm.querySelector('input[type="tel"]');
//     const button = selectedForm.querySelector("button");
//     input.addEventListener("focus", () => {
//         input.value = "+7";
//     });
//     input.addEventListener("input", () => {
//         console.log(input.value.length);
//         if (input.value.length == 12) {
//             button.removeAttribute("disabled");
//         } else {
//             button.setAttribute("disabled", "disabled");
//         }
//     });
// }
// validateForm(form);
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

// ========== Плавный скролл по якорным ссылкам ===============
$('a[href^="#"').on('click', function () {

    let href = $(this).attr('href');

    if (href == "#up") {
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 400,
        });
    } else {
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 700,
        });
    }
    return false;
});

// ========== Номера страниц в блоге ===============
// const pagesArray = document.querySelectorAll(".pages__page");
// console.log(pagesArray);