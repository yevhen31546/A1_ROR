$(function () {
    "use strict";
    //faq 
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //hoarding slider start  
    $('.hoarding-slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left leftbtn"></i>',
        nextArrow: '<i class="fa fa-chevron-right rightbtn"></i>',
        autoplay: true,
        centerMode: true,
        centerPadding: 0,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    //hoarding slide show start
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });


    //    product js start
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    //    product js end
});
