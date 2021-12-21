const sliders = [];

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 900) {
        document.querySelectorAll('.info').forEach(item => {
            const sliderContainer = item.querySelector('.info_slider');
            const prevButton = item.querySelector('.prev');
            const nextButton = item.querySelector('.next');

            const slider = tns({
                container: sliderContainer,
                prevButton: prevButton,
                nextButton: nextButton,
                loop: false,
                slideBy: 'page',
                speed: 450,
                navPosition: 'bottom',
                disable: true,
                responsive: {
                    901: {
                        disable: false,
                        gutter: 85,
                        edgePadding: 10,
                        controls: true,
                        nav: true,
                        mouseDrag: false
                    }
                }
            });

            sliders.push(slider);
        });
    }
});

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 900) sliders.forEach(slider => slider.rebuild());
        else sliders.forEach(slider => slider.destroy());
    }, 250);
});
