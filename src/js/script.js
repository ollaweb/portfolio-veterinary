
import spoiler from './modules/spoiler';
import burger from './modules/burger';
import modal from './modules/modal';
import sendDataToServer from './services/sendDataToServer';
// import validate from './modules/validate';
// import smoothScroll from './modules/smoothScroll';
import slickSlider from './modules/slickSlider';


window.addEventListener('DOMContentLoaded', () => {
    spoiler();
    burger();
    modal();
    sendDataToServer();
    // validate();
    // smoothScroll();
    slickSlider();
});