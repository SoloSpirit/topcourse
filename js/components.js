document.addEventListener('DOMContentLoaded', () => {
    const sectionTitles = document.querySelectorAll('section > h2.g_tva_title');
    const sectionContents = document.querySelectorAll('section > h2.g_tva_title ~ *');

    sectionContents.forEach((element) => {
        element.classList.add(HIDDEN_STATE);
    });

    sectionTitles.forEach((sectionTitle) => {
        sectionTitle.addEventListener('click', (event) => {
            let nextSibling = event.target.nextElementSibling;

            while (nextSibling) {
                nextSibling.classList.toggle(HIDDEN_STATE);
                nextSibling = nextSibling.nextElementSibling;
            }
        });
    })
});