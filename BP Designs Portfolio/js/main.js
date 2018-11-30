// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});

// Schrinking Navbar on Scrolling
$(window).scroll(function() {
  if ($(document).scrollTop() > 80) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});