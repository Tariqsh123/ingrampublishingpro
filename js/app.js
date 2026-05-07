$(document).ready(function () {
    $('.btn_popup_trigger').click(function () {
        $('.overlay').addClass('overlay_active');
        $('.popup_wrapper').addClass('popup_wrapper_active')
    });
    $('.popup_close').click(function () {
        $('.overlay').removeClass('overlay_active');
        $('.popup_wrapper').removeClass('popup_wrapper_active')
    });
    $('.marquee-slider').slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        variableWidth: true
    });
});