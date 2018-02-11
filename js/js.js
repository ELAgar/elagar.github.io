$(document).ready( function () {

	$('.sliderMini ul').lightSlider({
        item: 3,
        loop: false,
        slideMove: 3,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    item: 2,
        			slideMove: 2,
                    slideMargin: 6
                }
            },
            {
                breakpoint: 600,
                settings: {
                    item: 1,
        			slideMove: 1
                }
            }
        ]
	});

	$('.bxslider').bxSlider({
		mode: 'horizontal',
		hideControlOnEnd: true,
		nextText: '',
		prevText: '',
		speed: 500
	});

	$('.slick .wr').slick({
		// autoplay: true,
		autoplaySpeed: 2000,
		arrows: true
	});

});