$(document).ready(function() {
    
    var div = $('.block');
    var menuButton = $('.menu-button');
    var menu = $('header ul');    
    // -----------
    var button = $('.button-show');

    $(window).on('load resize', function() {

    	var dw = $(document).width();
        
    	if ( dw <= 640 ) {
    		menuButton.css('display','block');

    		menu.css('display', 'none');
    		menu.addClass('active');
    	} else {
    		menuButton.css('display','none');

    		menu.removeClass('active');
    		menu.css('display', 'block');
    	}

        // =========================================

		button.on('click', function() {
            $(this).toggleClass('button-hide');
		});



    });

	menuButton.on('click', function() {
		menu.toggle('normal');
	});

    // $(document).on('mousemove', function(e) {
    //     $('#cube').css({
    //         'transform': 'rotateX(' + e.pageY + 'deg) rotateY(' + e.pageX + 'deg)'
    //     });
    // });

    $('#sc1').on('click', function() {
        $('#cube').removeClass().addClass('firstSide');
    });
    $('#sc2').on('click', function() {
        $('#cube').removeClass().addClass('secondSide');
    });
    $('#sc3').on('click', function() {
        $('#cube').removeClass().addClass('thirdSide');
    });
    $('#sc4').on('click', function() {
        $('#cube').removeClass().addClass('fourthSide');
    });
    $('#sc5').on('click', function() {
        $('#cube').removeClass().addClass('fiveSide');
    });
    $('#sc6').on('click', function() {
        $('#cube').removeClass().addClass('sixSide');
    });

});