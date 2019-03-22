$(document).ready(function() {
    // Portfolio card
    var swiper = new Swiper('.work-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
        invert: false,
        },
        // autoHeight: true,
        pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
        }
    });
});