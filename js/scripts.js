document.addEventListener('DOMContentLoaded', function () {
    const carousel = $("#testimonial-carousel").owlCarousel({
        loop: false,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

});

function myReadFunction1() {
    var dots = document.getElementsByClassName("dots1")[0];
    var moreText = document.getElementsByClassName("more1")[0];
    var btnText = document.getElementsByClassName("myBtn1")[0];

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myReadFunction2() {
    var dots = document.getElementsByClassName("dots2")[0];
    var moreText = document.getElementsByClassName("more2")[0];
    var btnText = document.getElementsByClassName("myBtn2")[0];

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myReadFunction3() {
    var dots = document.getElementsByClassName("dots3")[0];
    var moreText = document.getElementsByClassName("more3")[0];
    var btnText = document.getElementsByClassName("myBtn3")[0];

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myReadFunction4() {
    var dots = document.getElementsByClassName("dots4")[0];
    var moreText = document.getElementsByClassName("more4")[0];
    var btnText = document.getElementsByClassName("myBtn4")[0];

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}