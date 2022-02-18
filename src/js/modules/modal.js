'use strict'
function modal() {
    function applyModalWindowToButton(btnModal, classModal) {
        const modalBtn = document.querySelector(btnModal);
        const modalClass = document.querySelector(classModal);
        const scrollBarWidth = window.innerWidth - document.body.clientWidth;

        if (modalBtn) {
            const modalClose = modalClass.querySelector(".modal__close");
            const modalOverlay = modalClass.querySelector(".overlay");
            const modalButtons = document.querySelectorAll(".modal__button");

            modalBtn.addEventListener("click", (event) => {
                if (event.target) {
                    event.preventDefault();
                }
                modalClass.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollBarWidth}px`;
            });
            modalClose.addEventListener("click", () => {
                modalClass.style.display = "";
                document.body.style.overflow = "";
                document.body.style.paddingRight = ``;
            });
            modalClass.addEventListener("click", (event) => {
                event.preventDefault();
                if (event.target === modalOverlay) {
                    modalClass.style.display = "";
                    document.body.style.overflow = "";
                    document.body.style.paddingRight = ``;
                }
                modalButtons.forEach(button => {
                    if (event.target === button) {
                        modalClass.style.display = "";
                        document.body.style.overflow = "";
                        document.body.style.paddingRight = ``;
                    }
                });
            });
        }
    }

    applyModalWindowToButton(".header__location", ".modal-location");
    applyModalWindowToButton("#login", ".modal-login");
    applyModalWindowToButton(".aside__feedback", ".modal-feedback");
    applyModalWindowToButton(".modal__button_feedback", ".modal-thanks");

    function setCity() {
        const headerCity = document.querySelector(".header__city");
        const cityList = document.querySelector(".modal__city-list");
        const cities = document.querySelectorAll(".modal__city");
        const contactsSection = document.querySelector(".contacts__wrapper");
        cityList.addEventListener("click", (event) => {
            cities.forEach((city, cityIndex) => {
                if (city.textContent === event.target.textContent) {
                    if (city.textContent !== headerCity.textContent) {
                        headerCity.textContent = city.textContent;
                        if (contactsSection) {
                            const cityBlocks = document.querySelectorAll(".contacts__block");
                            cityBlocks.forEach((block, blockIndex) => {
                                if (blockIndex !== cityIndex) {
                                    block.classList.remove("opened-city");
                                } else {
                                    block.classList.add("opened-city");
                                }
                            });
                        }
                    }

                }
            });



        });

    }
    setCity();


}
export default modal;