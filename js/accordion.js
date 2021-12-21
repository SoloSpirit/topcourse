document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.g_tva_accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            if (accordion.classList.contains('active')) accordion.classList.remove('active');
            else accordion.classList.toggle('active');
        })
    })
});
