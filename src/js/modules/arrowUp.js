'use strict'

function arrowUp() {
    /*
    Появление стрелки вверх для прокрутки при скролле вниз на 800 на desktop;
    при скроле вниз на 600 на планшете и мобильном телфоне
    */

    const arrowBlock = document.querySelector(".arrow-up");
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 800 && window.innerWidth > 768) {
            arrowBlock.classList.add("_active");
        } else if (window.scrollY >= 600 && window.innerWidth <= 768) {
            arrowBlock.classList.add("_active");
        } else {
            arrowBlock.classList.remove("_active");
        }
    });
}

export default arrowUP;