document.addEventListener('DOMContentLoaded', () => {
    const tvaChat = document.querySelector('.tva_chat');

    tvaChat.addEventListener('click', (e) => {
        const action = e.target.getAttribute('data-action');

        switch (action) {
            case 'select_variant':
                handleVariantSelect(e.target);
                break;
            case 'go_next':
                handleGoNext();
                break;
        }
    });
});

handleVariantSelect = (element) => {
    console.log('select');
}

handleGoNext = () => {
    console.log('go next');
}