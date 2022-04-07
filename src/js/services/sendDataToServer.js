'use strict'

function sendDataToServer() {
    // Отправка данных форм на сервер
    async function postData(url, data) {
        const result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    function clearInputs() {
        const inputs = document.querySelectorAll("input");
        const textareas = document.querySelectorAll("textarea");
        inputs.forEach(input => {
            input.value = "";
        });
        textareas.forEach(textarea => {
            textarea.value = "";
        });
    }

    function collectData() {
        const forms = document.querySelectorAll("form");
        forms.forEach(form => {

            form.addEventListener("submit", (event) => {
                console.log("Hello");
                event.preventDefault();
                const formData = new FormData(form);
                postData("./server.php", formData)
                    .then(res => {
                        console.log(res);
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




    collectData();
}

export default sendDataToServer;