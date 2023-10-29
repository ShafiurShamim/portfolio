window.$ = window.jQuery = require("jquery");

// Modal Start
$(".hover-layer").on('click', function () {
    let imgSrc = $(this).siblings("img").attr("src");
    $("#prevModal").fadeIn();
    $("#prevImg").attr("src", imgSrc);
});

$("#prevModal .close").on('click', function () {
    $("#prevModal").fadeOut();
});
$("#prevModal").on('click', function () {
    $("#prevModal").fadeOut();
});
// Modal End

// Scroll To Top Start
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 250) {
        $(".scroll-to-top").fadeIn(1000);
    } else {
        $(".scroll-to-top").fadeOut(1000);
    }
});

$(".scroll-to-top").on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});


// Scroll To Top End

// Mobile Menu
$(".hamburger-nav").on('click', function () {
    $('.menu').addClass('show');
});
$(".menu button").on('click', function () {
    $('.menu').removeClass('show');

});
$(".menu a").on('click', function () {
    if ($('.menu').hasClass('show')) {
        $('.menu').removeClass('show');
    }
});

// Theme Changer
$('.theme-changer div').on('click', function () {
    $(":root").attr('data-theme', $(this).attr('data-theme'))
});