$(document).ready( function () {

    $('.slick .wr').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000
    });



    if ($(window).width() <= 768) {
        $('.top-nav-menu').addClass('-phone');
    }

    $('.log-search-user .phone-button').on('click', function() {
        $('.top-nav-menu').toggle();
    });

    $('.log-search-user .search-button').on('click', function() {
        $('.log-search-user .search').toggle('slow');
    });
















});