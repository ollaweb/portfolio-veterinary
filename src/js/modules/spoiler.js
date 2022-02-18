'use strict'
function spoiler() {
    function useSpoiler(btnSpoiler, wrapperSpoiler, overlaySpoiler) {
        const spoilerButton = document.querySelector(btnSpoiler);
        const spoilerWrapper = document.querySelector(wrapperSpoiler);
        const spoilerItems = document.querySelectorAll(".spoiler__item a");
        // const spoilerOverlay = document.querySelector(overlaySpoiler);
        spoilerButton.addEventListener("click", () => {
            if (!spoilerWrapper.classList.contains("opened-spoiler")) {
                spoilerButton.classList.add("active");
                spoilerWrapper.classList.add("opened-spoiler");
                // spoilerOverlay.style.display = "block";
            } else {
                spoilerWrapper.classList.remove("opened-spoiler");
                spoilerButton.classList.remove("active");
                // spoilerOverlay.style.display = "";
            }
        });
        window.addEventListener("scroll", () => {
            if (window.scrollY > 280) {
                spoilerWrapper.classList.remove("opened-spoiler");
                spoilerButton.classList.remove("active");

            }
        });

        spoilerWrapper.addEventListener("click", (event) => {
            spoilerItems.forEach(item => {
                if (event.target === item) {
                    spoilerWrapper.classList.remove("opened-spoiler");
                    spoilerButton.classList.remove("active");

                }

            });
        });


    }

    useSpoiler(".spoiler", ".spoiler__wrapper", ".spoiler-overlay");
    console.log(document.body.clientWidth);
    console.log(window.innerWidth);



}

export default spoiler;