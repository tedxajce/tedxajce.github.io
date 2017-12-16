$(window).scroll(function(){
    var wScroll = $(this).scrollTop()

    $('header').css({
        'background-position' : `center ${wScroll*.45}px`
     })
    console.log(wScroll)

    if(wScroll >= 590 ){
        $('nav.navbar.navbar-expand-lg').css({
            'position':'fixed',
            'top':`0`,
            'width': `100%`,
            'background': `rgba(0, 0, 0, 0.9)`
        })
    }else{
        $('nav.navbar.navbar-expand-lg').css({
            'position':'relative',
            'width': `100%`,
            'background': `rgba(0, 0, 0, 0.6)`
        })
    }
});
