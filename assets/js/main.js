(function($){
  "use strict";
  
  /* sticky header - start*/
  
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.header-nav').addClass("sticky")
    } else {
      $('.header-nav').removeClass("sticky")
    }
  });
  /* sticky header - end */
  
  /* bg parallax - start */
  
  $('[data-parallax]').parallax({
    speed: .6,
  });
  /* bg parallax - end */
  
  /* hero sec start sec end */
  $('.hero-slider-wrap').slick({
    dots: false,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 6000,
   
  });
  
  /* hero sec start sec end */
  
  /* review sec start start */
  
  $('.review-card-items-wrap').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: ".main-left-arrow",
    nextArrow: ".main-right-arrow",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
        }
      }
      
    ]
  });
  /* review sec start sec end */
  
  /* counter */
  $('.counter-box[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      var $this = $(this).html(event.strftime(''
      + '<li class="days"><strong class="day2">%D</strong><span class="d-block">Days</span></li>'
      + '<li class="hours"><strong class="hours2">%H</strong><span class="d-block">Hours</span></li>'
      + '<li class="minutes"><strong class="min2">%M</strong><span class="d-block">Minutes</span></li>'
      + '<li class="seconds"><strong class="sec2">%S</strong><span class="d-block">Seconds</span></li>'));
    });
  });
  /* counter */
 
      
  $(document).on( 'click', '.mode', function(e){
    e.preventDefault;
    if($('body').hasClass('dark-version')) {
        $('body').removeClass('dark-version');
        $('.mode .fa-moon').show();
        $('.mode .fa-sun').hide();
    } else {
        $('body').addClass('dark-version');
        $('.mode .fa-moon').hide();
        $('.mode .fa-sun').show();
    }
  }); 



  AOS.init({

  });

  $(document) .ready(function(){
    $('.zoom-gallery').magnificPopup({
        delegate: '.item-thumb',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }
    });
  });

    
})(jQuery);

