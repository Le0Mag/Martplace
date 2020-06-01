$(function(){

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "13px",
    spacing: "4px",
    readOnly: true,
    ratedFill: "#ffc000",
  });

  $('.product__wrapper').slick({
    dots: false,
    appendArrows: $('.product__btn'),
    nextArrow: '<button type="button" class="slick-btn slick-next"><span class="lnr lnr-chevron-right"></span></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><span class="lnr lnr-chevron-left"></span></button>'
    
  });

  $('.followers__wrapper').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendArrows: $('.followers__btn'),
    nextArrow: '<button type="submit" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="submit" class="slick-btn slick-prev"></button>'
    

  });

  var mixer = mixitup('.release__inner-box');

});