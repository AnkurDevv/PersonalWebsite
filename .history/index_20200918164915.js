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
  $('.navbar').addClass('bg-light').removeClass('bg-dark');
  $('#Brand-logo').css("color", "black");
}

// FOR CARAOUSEL
$(document).ready(function () {
  $('.owl-carousel').owlCarousel();
});

// FOR RADIAL PROGESS BAR - START 
var el = document.getElementById('graph'); // get canvas

var options = {
  percent: el.getAttribute('data-percent') || 25,
  size: el.getAttribute('data-size') || 220,
  lineWidth: el.getAttribute('data-line') || 15,
  rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
var span = document.createElement('span').addClass("progress-percent");
span.textContent = options.percent + '%';

if (typeof (G_vmlCanvasManager) !== 'undefined') {
  G_vmlCanvasManager.initElement(canvas);
}

var ctx = canvas.getContext('2d');
canvas.width = canvas.height = options.size;

el.appendChild(span);
el.appendChild(canvas);

ctx.translate(options.size / 2, options.size / 2); // change center
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

//imd = ctx.getImageData(0, 0, 240, 240);
var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function (color, lineWidth, percent) {
  percent = Math.min(Math.max(0, percent || 1), 1);
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
  ctx.strokeStyle = color;
  ctx.lineCap = 'round'; // butt, round or square
  ctx.lineWidth = lineWidth
  ctx.stroke();
};

drawCircle('#efefef', options.lineWidth, 100 / 100);
drawCircle('#555555', options.lineWidth, options.percent / 100);
// FOR RADIAL PROGESS BAR - END