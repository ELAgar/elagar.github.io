$(document).ready(function () {

   $('.slider-main .wr').slick({
      // dots: true,
      speed: 1000
   });

   $('.main-slider').slick({
      speed: 1000,
      infinite: false
   });



   // mini-nav

   $('.menu-slider nav a').click(function (e) {
      e.preventDefault();
   });

   $('.menu-slider nav a span').click(function () {
      $('.menu-slider nav a').removeClass('active');
      $(this).parent().addClass('active');
   });

});