// CHANGING NAVBAR COLOR WHEN A USER HOVERS OVER A LINK
$(document).ready(function () {

  // makes nav transparent when user hovers on a link
  $(".nav-link").hover(function () {
    $('.navbar').addClass('bg-dark').removeClass('bg-light');
    $('#Brand-logo').css("color", "white");
    $('.nav-link').css("color", "white");
    $('.navbar-toggler-icon).css("color", "white");
  });

  // makes nav non-transparent when user hovers on a link
  $(".navbar").mouseleave(function () {
    $('.navbar').addClass('bg-light').removeClass('bg-dark');
    $('#Brand-logo').css("color", "black");
    $('.nav-link').css("color", "black");
  });

});