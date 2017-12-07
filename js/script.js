$(window).scroll(function(){
    var wScroll = $(this).scrollTop()

    $('header').css({
        'background-position' : `center ${wScroll*.5}px`
     })
    // console.log(wScroll)
});
