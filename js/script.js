$(document).ready(function () {

  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    var i = 0;
    $("body").css({
      "background-position": `center ${wScroll * 0.45}px`,
    });
    $("header").css({
      "background-position": `center ${wScroll * 0.45}px`,
    });
    $("body#team-body").css({
      "background-position": `center ${wScroll * 0.65}px`,
    });
    $("#section-speakers").css({
      "background-position": `center ${wScroll * 0.45}px`
    });
    $("#myfooter").css({
      "background-position": `center ${wScroll * 0.55}px`
    });
    $("#about-box-card").css({
      "background-position": `center ${wScroll *.005}px`
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


  $('.owl-carousel').owlCarousel({
    center: true,
    stagePadding: 0,
    autoWidth: true,
    loop: true,
    margin: 10,
    nav: true,
  });


  $('.owl-carousel-team').owlCarousel({
    nav: true,
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

  tedlogo.click(function () {
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
  tedxlogo.click(function () {
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
  tedxajcelogo.click(function () {
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

  // Smooth Scrolling that i ripped off  of CSS-TRICKS
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top-$('nav').outerHeight()
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            // $target.focus();
            // if ($target.is(":focus")) { // Checking if the target was focused
            //   return false;
            // } else {
            //   $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            //   $target.focus(); // Set focus again
            // };
          });
        }
      }
    });


  var lastScrollTop = 0;
  $(window).scroll(function () {

    // var st = window.pageYOffset || document.documentElement.scrollTop;
    // if (st > lastScrollTop){
    //     console.log('sdf')
    //     $('nav.navbar').animate({
    //       'opacity':'0'
    //     },100,()=>{});
    //   } else {
    //     $('nav.navbar').animate({
    //       'opacity':'1'
    //     },100,()=>{});
    // }
    // lastScrollTop = st;
  
    var windowScrolled = $(this).scrollTop();
    var headerHeight = $('#home').outerHeight();
    if (windowScrolled > headerHeight){
      $('nav.navbar').animate({
        'opacity': '1'
      },300,()=>{});

      $('nav.navbar').css(
        {
          'position': 'fixed',
          'background': '#000000f5',
          'width': '100%',
          'padding-top': '4px'
        }
      );
    } else {
      $('nav.navbar').css(
        {
          'position': 'relative',
          'background': 'none',
          'padding-top': '25px'
        }
      );
    }
  })
  console.log($('#home').outerHeight());

});