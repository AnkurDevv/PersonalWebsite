// CHANGING NAVBAR COLOR WHEN A USER HOVERS OVER A LINK
$(document).ready(function () {

  // makes nav dark themed when user hovers on a link
  $(".nav-link").hover(function () {
    $('.navbar').addClass('bg-dark').removeClass('bg-light');
    $('#Brand-logo').css("color", "white");
    $('.nav-link').css("color", "white");
    $('.navbar-toggler').css("color", "white");
  });

  // makes nav light themed when user stops hovers on a link
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
  $('.navbar').addClass('bg-light').removeClass('bg-dark');
  $('#Brand-logo').css("color", "black");
}

$("projectFilterBtn").live("click", function () {
  $("projectFilterBtn").removeClass("btn-dark");
  $(this).addClass("btn-light");
});


// FOR FOOTER DATE
var theDate = new Date().getFullYear()
document.getElementById("copyrightText").innerHTML = "&copy; " + "Copyright " + theDate;


// FOR CARAOUSEL
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true, // turn to true when done 
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    slideBy: 4,
    // fluidSpeed: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: true
      }
    }
  });
});

