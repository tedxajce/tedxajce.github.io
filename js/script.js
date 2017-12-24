$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  $("header").css({
    "background-position": `center ${wScroll * 0.45}px`
  });

  console.log(wScroll);

  // if(wScroll >= 590 ){
  //     $('nav.navbar.navbar-expand-lg').css({
  //         'position':'fixed',
  //         'top':`0`,
  //         'width': `100%`,
  //         // 'background': `rgba(0, 0, 0, 0.7)`
  //     })
  // }else{
  //     $('nav.navbar.navbar-expand-lg').css({
  //         'position':'relative',
  //         'width': `100%`,
  //         // 'background': `rgba(0, 0, 0, 0.7)`
  //     })
  // }
});

var btnclicked = 0;
$("button.navbar-toggler").click(function() {
    if (btnclicked == 0) {
        $("nav").css({"background": `rgba(0,0,0,.8)`});
        btnclicked = 1;
    } else {
        $("nav").css({"background": `none`});
        btnclicked = 0;
    }
    
});
