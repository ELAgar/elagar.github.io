$(document).ready(function() {

	var scrollEl = $('#what-i-do');

	$('.icon-wrap .icon').on('click', function() {
		$('html, body').animate({ 
			scrollTop: $(scrollEl).offset().top 
		}, 1000);
	});

	// =============================================

	$('a[href="#"]').on('click', function(e) {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	// =============================================

    $('a').click( function(){ // ловим клик по ссылке
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		    $('html, body').animate({
		    	scrollTop: $(scroll_el).offset().top
		    }, 1000); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

	// =============================================

	$(window).on('load scroll resize', function() {
		var windScroll = window.pageYOffset;
		var scrollService = $('#what-i-do').offset().top - windScroll;
		var scrollWork= $('#my-works').offset().top - windScroll;
		var scrollSkills= $('#my-skills').offset().top - windScroll;
		var scrollContacts= $('#contact').offset().top - windScroll;
		var dw = $(document).width();

		if ( dw >= 768 ) {
			$('header').css('background-position-y', windScroll / 1.15);
		}

		if ( dw <= 767 ) {
			$('header').css('background-position-y', '0');
		}

		var items = $('.menu__item a');

		if (windScroll >= 0 ) {
			items.removeClass('active');
			$('.menu__item a[href="#"]').addClass('active');
		}

		if (scrollService <= 0 || scrollService <= 5) {
			items.removeClass('active');
			$('.menu__item a[href="#what-i-do"]').addClass('active');
		}

		if (scrollWork <= 0 || scrollWork <= 5) {
			items.removeClass('active');
			$('.menu__item a[href="#my-works"]').addClass('active');
		}

		if (scrollSkills <= 0 || scrollSkills <= 5) {
			items.removeClass('active');
			$('.menu__item a[href="#my-skills"]').addClass('active');
		}

		if (scrollContacts <= 0 || scrollContacts <= 5) {
			items.removeClass('active');
			$('.menu__item a[href="#contact"]').addClass('active');
		}
	});


});