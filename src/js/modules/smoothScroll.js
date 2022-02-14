'use strict'

function smoothScroll() {
    //Плавный скролл наверх
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
}

export default smoothScroll;