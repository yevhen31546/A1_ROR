$('.slider-active').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
          






$('.bst-sel-sliderr').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
//    autoplay:true,

nextArrow:'<img src="https://i.ibb.co/TwkqCWw/bst-sel-right-arrow.png" class="img-fluid nxt" alt="">',
prevArrow:'<img src="https://i.ibb.co/k0PCfph/bst-sel-leftarrow.png" class="img-fluid prv" alt="">',
  responsive: [
    {
      breakpoint: 768,
      settings: {
      arrows:false,
        centerMode: true,
        slidesToShow: 1,
          centerPadding:'120px',
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows:false,
        centerMode: true,
        slidesToShow: 1,
          centerPadding:'50px',
      }
    }
  ]
});





//For  Menu

$('.to-search').on('click', function () {

    $('.for-clss').toggleClass('opened');
    
      $('.forclose').toggleClass('closit');
      $(this).toggleClass('for-open');
});





$('.forclose').on('click', function () {

    $('.to-search').toggleClass('for-open');
    
     $(this).toggleClass('closit');
    $('.for-clss').toggleClass('opened');
    
});




