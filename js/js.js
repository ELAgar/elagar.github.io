$(document).ready(function () {
// MAIN-SLIDER
    $('.slick .wr').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    autoplay: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: false
                }
            },
            {
                breakpoint: 360,
                settings: {
                    autoplay: false
                }
            }
        ]
    });

    // MINI-SLIDER
    $('.wr #tabs .tab').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    autoplay: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: false
                }
            },
            {
                breakpoint: 360,
                settings: {
                    autoplay: false
                }
            }
        ]
    });

    $('.display-phone-menu span').click(function () {
        $('.phone-menu').toggle();
    });

});
