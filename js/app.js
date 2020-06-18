$(document).ready(function () {


    // https://kenwheeler.github.io/slick/

    // новости
    $('.news').slick({
        arrows: false,
        dots: true,
        area: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 15,
        variableWidth: false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 568,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
        ]
    });

    // отзывы
    $('.reviews__slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        draggable: false

    });
});
