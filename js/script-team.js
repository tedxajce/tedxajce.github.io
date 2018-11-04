$(document).ready(function () {

  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    var i = 0;
    $("header").css({
      "background-position": `center ${wScroll * 0.45}px`,
    });
    $("body").css({
      "background-position": `center ${wScroll * 0.45}px`,
    });
  });

  var btnclicked = 0;
  $("button.navbar-toggler").click(function () {
    if (btnclicked == 0) {
      console.log("Button clicked yo")
      $("nav").css({
        background: `rgba(0,0,0,.8)`
      });
      btnclicked = 1;
    } else {
      console.log("Button clicked yoe")
      $("nav").css({
        background: `none`
      });
    }
    btnclicked = 0;
  });


});