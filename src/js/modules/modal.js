'use strict'
function modal() {
    function useModal(btnModal, classModal) {
        const modalBtn = document.querySelector(btnModal);
        const modalClass = document.querySelector(classModal);
        const modalClose = document.querySelector(classModal).querySelector(".modal__close");
        const modalOverlay = document.querySelector(classModal).querySelector(".overlay");
        const modalSubmit = document.querySelector(".modal__button");
        modalBtn.addEventListener("click", (event) => {
            if (event.target) {
                event.preventDefault();
            }
            modalClass.style.display = "block";
            document.body.style.overflow = "hidden";
        });
        modalClose.addEventListener("click", () => {
            modalClass.style.display = "";
            document.body.style.overflow = "";
        });
        modalClass.addEventListener("click", (event) => {
            console.log(event.target);
            if (event.target === modalOverlay) {

                modalClass.style.display = "";
                document.body.style.overflow = "";
            } else if (event.target === modalSubmit) {
                // event.preventDefault();
                modalClass.style.display = "";
                document.body.style.overflow = "";
            }
        });

    }



    useModal(".header__location", ".modal-location");
    useModal("#login", ".modal-login");
    useModal(".aside__feedback", ".modal-feedback");
    useModal(".modal-feedback .modal__button", ".modal-thanks");
}
export default modal;