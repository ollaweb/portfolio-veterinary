'use strict'
import $ from 'jquery';
import 'slick-carousel';

function slickSlider() {
    // ================= slick-slider ===============================
    $(document).ready(function () {
        $('.slider').slick({
            arrows: false,
            dots: true,
            appendDots: $(".promo__dots"),
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true,
        });
        $('.experts-slider').slick({
            slidesToShow: 6,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        // arrows: false,
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        // arrows: false,
                        slidesToShow: 1,
                    }
                },
            ]
        });
        $('.content-slider').slick({
            slidesToShow: 3,
            infinite: false,
            responsive: [

                {
                    breakpoint: 1730,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    }
                },
            ]
        });
        $('.services-slider').slick({
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    }
                },
            ]
        });
        $('.expert-slider').slick({
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    }
                },
            ]
        });
    });
}

export default slickSlider;