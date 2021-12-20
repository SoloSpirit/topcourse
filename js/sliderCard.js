document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.info').forEach(item => {
        const slider = item.querySelector('.info_slider');
        const prevButton = item.querySelector('.prev');
        const nextButton = item.querySelector('.next');

        tns({
            container: slider,
            prevButton: prevButton,
            nextButton: nextButton,
            loop: false,
            slideBy: 'page',
            gutter: 85,
            navPosition: 'bottom',
            edgePadding: 10,
            speed: 450
        });
    });
});
