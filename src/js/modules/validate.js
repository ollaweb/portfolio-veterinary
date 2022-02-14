'use strict'

function validate() {
    function validateTel() {
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
    }
    validateTel();
}

export default validate;