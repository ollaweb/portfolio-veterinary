'use strict'
// ============== Header открытие спойлера ===============
//Закрыьть блок спойлера
function spoilerHide() {
    spoilerWrapper.classList.remove(spoilerOpenedClass);
}

function spoiler() {
    function useSpoiler(spoiler, spoilerWrapper, spoilerItem, spoilerOpenedClass) {
        //Переключение открыто/закрыто спойлера
        function spoilerToggle() {
            spoilerWrapper.classList.toggle(spoilerOpenedClass);
        }
        spoiler.addEventListener("click", () => {
            spoilerToggle();
        });
        //Нажатие на пункт меню из блока спойлера закроет блок спойлера
        spoilerWrapper.addEventListener("click", (event) => {
            spoilerItem.forEach(element => {
                if (event.target == element) {
                    spoilerHide();
                }
            });
        });
    }
    const spoilerAbout = document.querySelector(".spoiler");
    const spoilerAboutWrapper = document.querySelector(".spoiler__wrapper");
    const spoilerAboutItem = document.querySelectorAll(".spoiler__item a");
    const spoilerClass = "opened-spoiler";
    useSpoiler(spoilerAbout, spoilerAboutWrapper, spoilerAboutItem, spoilerClass);
}

export default spoiler;
export { spoilerHide };