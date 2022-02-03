$(function(){
    $('.characters__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="characters-prev"><img src="images/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="characters-next"><img src="images/right.svg" alt=""></button>',
    });
});