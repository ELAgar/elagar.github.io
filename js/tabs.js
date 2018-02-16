$(document).ready(function () {

    $('.nav-button').on('click', function() {
        $('.nav-button').removeClass('active');
        $(this).addClass('active');

        if ( $('#nav span:nth-of-type(1)').hasClass('active') ) {
            $('#tabs .tab').removeClass('active');
            $('#tabs .tab:nth-child(1)').addClass('active');

        } else if ( $('#nav span:nth-of-type(2)').hasClass('active') ) {
            $('#tabs .tab').removeClass('active');
            $('#tabs .tab:nth-child(2)').addClass('active');

        } else if ( $('#nav span:nth-of-type(3)').hasClass('active') ) {
            $('#tabs .tab').removeClass('active');
            $('#tabs .tab:nth-child(3)').addClass('active');
        } else if ( $('#nav span:nth-of-type(4)').hasClass('active') ) {
            $('#tabs .tab').removeClass('active');
            $('#tabs .tab:nth-child(4)').addClass('active');
        }

        if ( $('#tabs .active').height() > 510 ) {
            $('#tabs').css('overflow', 'scroll');
        } else {
            $('#tabs').css('overflow', 'hidden');
        }
    });

});