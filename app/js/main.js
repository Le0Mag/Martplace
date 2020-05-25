$(function(){

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "16px",
    spacing: "3px",
    readOnly: true,
    ratedFill: "#ffc000",
  });

  $('.product__wrapper').slick({
    dots: false,
    appendArrows: $('.product__btn'),
    nextArrow: '<button type="submit" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="submit" class="slick-btn slick-prev"></button>'
    
  });

  // var mixer = mixitup('.products__inner-box');

});