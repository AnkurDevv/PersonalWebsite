// CHANGING NAVBAR COLOR WHEN A USER HOVERS OVER A LINK
$(document).ready(function () {

  // makes nav transparent when user hovers on a link
  $(".nav-link").hover(function () {
    $(".bg-light").css("opacity", "0.9");
  });

  // makes nav non-transparent when user hovers on a link
  $(".navbar").mouseleave(function () {
    $(".bg-light").css("opacity", "1");
  });

});