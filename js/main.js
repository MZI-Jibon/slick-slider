$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '0',
        // autoplay: true,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
});