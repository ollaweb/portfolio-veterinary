'use strict'
function spoiler() {
    function useSpoiler(btnSpoiler, wrapperSpoiler, overlaySpoiler) {
        const spoilerButton = document.querySelector(btnSpoiler);
        const spoilerWrapper = document.querySelector(wrapperSpoiler);
        // const spoilerOverlay = document.querySelector(overlaySpoiler);
        spoilerButton.addEventListener("click", () => {
            if (!spoilerWrapper.classList.contains("opened-spoiler")) {
                spoilerWrapper.classList.add("opened-spoiler");
                document.body.style.overflow = "hidden";
                // spoilerOverlay.style.display = "block";
            } else {
                spoilerWrapper.classList.remove("opened-spoiler");
                document.body.style.overflow = "";
                // spoilerOverlay.style.display = "";
            }
        });


    }

    useSpoiler(".spoiler", ".spoiler__wrapper", ".spoiler-overlay");
}

export default spoiler;