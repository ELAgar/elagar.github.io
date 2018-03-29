$(document).ready( function () {

    $('.slick .wr').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000
    });

    var button = $('header .wr .log-search-user .phone-button');

    $(window).on('load resize', function() {

        console.log($(document).width());

        if ( $(document).width() <= 768 ) {
            $('.top-nav-menu').addClass('-phone');
        } else if ( $(document).width() > 768 ) {
            $('.top-nav-menu').removeClass('-phone');
        }

        // TRANSFORM!!! =========================

        button.on('click', function() {
            $(this).toggleClass('button-hide');
        });

        // TRANSFORM!!! =========================

    });

    $('.log-search-user .phone-button').on('click', function() {
        $('.top-nav-menu').toggle();
    });

    $('.log-search-user .search-button').on('click', function() {
        $('.log-search-user .search').toggle('slow');
    });
















});