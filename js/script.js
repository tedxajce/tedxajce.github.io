$(document).ready(function() {
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $("header").css({
      "background-position": `center ${wScroll * 0.45}px`
    });
    $("#section-speakers").css({
      "background-position": `center ${wScroll * 0.45}px`
    });
  });

  var btnclicked = 0;
  $("button.navbar-toggler").click(function() {
    if (btnclicked == 0) {
      $("nav").css({ background: `rgba(0,0,0,.8)` });
      btnclicked = 1;
    } else {
      $("nav").css({ background: `none` });
      btnclicked = 0;
    }
  });

  $('.carousel-container').slick({
    arrows: true,
    dots: true,
    autoplay: true
  });

  var tedlogo = $("#about-logo-ted");
  var tedxlogo = $("#about-logo-tedx");
  var tedxajcelogo = $("#about-logo-tedxajce");

  var ted = $("#content-ted");
  var tedx = $("#content-tedx");
  var tedxajce = $("#content-tedxajce");

  tedx.hide();
  tedxajce.hide();

  tedlogo.css({
    filter: `grayscale(0) opacity(1)`
  });

  tedlogo.click(function() {
    tedlogo.css({
      filter: `grayscale(0) opacity(1)`
    });
    tedxlogo.css({
      filter: `grayscale(1) opacity(0.7)`
    });
    tedxajcelogo.css({
      filter: `grayscale(1) opacity(0.7)`
    });
    ted.show();
    tedx.hide();
    tedxajce.hide();
  });
  tedxlogo.click(function() {
    tedlogo.css({
      filter: `grayscale(1) opacity(0.7)`
    });
    tedxlogo.css({
      filter: `grayscale(0) opacity(1)`
    });
    tedxajcelogo.css({
      filter: `grayscale(1) opacity(0.7)`
    });
    ted.hide();
    tedx.show();
    tedxajce.hide();
  });
  tedxajcelogo.click(function() {
    tedlogo.css({
      filter: `grayscale(1) opacity(.7)`
    });
    tedxlogo.css({
      filter: `grayscale(1) opacity(.7)`
    });
    tedxajcelogo.css({
      filter: `grayscale(0) opacity(1)`
    });
    ted.hide();
    tedx.hide();
    tedxajce.show();
  });
});
