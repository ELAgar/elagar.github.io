$(document).ready(function() {

	// CHOOSE-CURRENCY

	$('.choose-currency').on('click', function () {
		$('ul', this).slideToggle();
	});

	$('.choose-currency ul li').on('click', function () {
		var $thisClass = $(this).attr('class');
		$('.choose-currency #iconCurrency').removeAttr('class');
		$('.choose-currency #iconCurrency').addClass($thisClass);
	});

	// CHOOSE-CITY

	$('.choose-city').on('click', function () {
		$('ul', this).slideToggle();
	});

	$('.choose-city ul li').on('click', function () {
		var $thisText = $(this).text();
		$('.choose-city .city-value').text($thisText);
	});

	// SHOW-MENU

	$('.show-menu').click(function () {
		$('.brand-block .container').toggleClass('padding');
		$('.navigation').toggle();
	});

});