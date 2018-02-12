$(document).ready(function () {
	
	$('.nav-button').on('click', function() {
		$('.nav-button').removeClass('active');
		$(this).addClass('active');

		if ( $('#nav span:nth-of-type(1)').hasClass('active') ) {
			$('#tabs .tab').removeClass('active');
			$('#tabs div:nth-of-type(1)').addClass('active');
		}

		if ( $('#nav span:nth-of-type(2)').hasClass('active') ) {
			$('#tabs .tab').removeClass('active');
			$('#tabs div:nth-of-type(2)').addClass('active');
		}

		if ( $('#nav span:nth-of-type(3)').hasClass('active') ) {
			$('#tabs .tab').removeClass('active');
			$('#tabs div:nth-of-type(3)').addClass('active');
		}
	});

});