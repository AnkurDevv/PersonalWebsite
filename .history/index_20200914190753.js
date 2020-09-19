// CHANGING NAVBAR COLOR WHEN A USER HOVERS OVER A LINK
$(document).ready(function () {

  // makes nav transparent when user hovers on a link
  $(".nav-link").hover(function () {
    $('.navbar').addClass('bg-dark').removeClass('bg-light');
    $('#Brand-logo').css("color", "white");
    $('.nav-link').css("color", "white");
    $('.navbar-toggler').css("color", "white");
  });

  // makes nav non-transparent when user hovers on a link
  $(".navbar").mouseleave(function () {
    $('.navbar').addClass('bg-light').removeClass('bg-dark');
    $('#Brand-logo').css("color", "black");
    $('.nav-link').css("color", "black");
    $('.navbar-toggler').css("color", "black");
  });

  // show the downward arrow after 3 secs
  setTimeout(function () {
    $('#scroll-down-arrow').css("display", "block");
    // $('#scroll-down-arrow').addClass('');
  }, 4000);

});

// Function to close dropDrown after clicking nav-link
function closeNavDrop() {
  document.getElementById("nav-tog").click();
}

///////////////////////// JS TO STICK NAVBAR ON TOP - START ////////////////////////////

// When the user scrolls the page, execute myFunction
window.onscroll = function () { stickOnScroll() };

// Get the navbar
var navbar = document.getElementById("stickNavbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickOnScroll() {
  console.log("Stick on scroll function called :)")
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

///////////////////////// JS TO STICK NAVBAR ON TOP - END ////////////////////////////