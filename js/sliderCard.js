$(() => {
    $('.info_slider').owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        margin: 8,
        stagePadding: 20,
        navText:
            [
                '<img src="img/icons/icon_arrow_left.svg" alt="Previous" class="prev">',
                '<img src="img/icons/icon_arrow_right.svg" alt="Next" class="next">'
            ],
        items: 1,
        mouseDrag: true,
        responsive: {
            900: {
                dots: true,
                nav: true,
                stagePadding: 0,
                mouseDrag: false,
                loop: false,
            }
        }
    })
})
