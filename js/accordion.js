document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.g_tva_accordion');

    accordions.forEach((accordion) => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('g_tva_accordion-active');
            console.log(accordion.classList);
        });
    })
});
