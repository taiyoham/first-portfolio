$(function(){


  $('.top-slider').slick({
    autoplay:true,
    arrows:false,
    draggable:false,
    speed: 800,
    fade: true,
    pauseOnFocus:false,
    pauseOnHover:false,
    cssEase: 'linear'
  });


  $('.one-time').slick({
    arrows:NamedNodeMap,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    swipeToSlide:true,
    adaptiveHeight: true

  });



});
