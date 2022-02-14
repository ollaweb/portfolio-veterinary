'use strict'
import { modalHide, modalOpen } from '../modules/modals';

function postData() {
    // Отправка данных форм на сервер
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

    function collectData(forms, modalThanks, leaveFeedback, modalFeedback) {
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
    }


    const allForms = document.querySelectorAll("form");
    const modalThanks = document.querySelector(".modal_thanks");

    const leaveFeedback = document.querySelector(".aside__feedback");
    const modalFeedback = document.querySelector(".modal_feedback");
    const forms = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");
    const textareas = document.querySelectorAll("textarea");



    // ==============Модальное окно личного кабинета ===============
    const logIn = document.getElementById("login");
    const modalLogin = document.querySelector(".modal_login");

    collectData(allForms);
}

export default postData;