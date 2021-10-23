$(document).ready(function () {
    "use strict";

    //variables
    let dropdowntoggle = $("header .hamburger-menu");
    let sideWidget = $(".side-widget");

    //toggle between menue and x in navbar
    dropdowntoggle.on("click", function () {
        sideWidget.toggleClass("active");

        if (sideWidget.hasClass("active")) {
            $(this).addClass("open");
        } else {
            $(this).removeClass("open");
        }
    });

    $("section").on("click", function () {
        if (sideWidget.hasClass("active")) {
            sideWidget.removeClass("active");
            dropdowntoggle.removeClass("open");
        }
    });

    //toggle between menue and x in navbar
    $("header .navbar-toggler").on("click", function () {
        if ($(this).hasClass("collapsed")) {
            $(this).removeClass('close')
        } else {
            $(this).addClass('close')
        }
    })

    //alert warning
    $('.alert.alert-warning button.close').on('click', function () {
        $('.alert.alert-warning').fadeOut();
    });
    //alert warning

    //loading
    $('.loading').delay(500).fadeOut(500);

    //main slider swiper
    var swiper = new Swiper(".main_swiper", {
        speed: 1000,
        loop: true,
        parallax: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //works slider swiper
    var swiper = new Swiper(".works_swiper", {
        speed: 1000,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        parallax: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }
    });
    
    //partners slider swiper
    var swiper = new Swiper(".partners_swiper", {
        speed: 1000,
        loop: true,
        spaceBetween: 15,
        slidesPerView: 5,
        parallax: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            },
          }
    });

    //wow
    new WOW().init();
});