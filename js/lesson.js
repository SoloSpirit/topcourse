const HIDDEN_STATE = 'g_tva_hidden';
const PROJECT_PATH = `topcourse`;

let tvaChat;
let selectedVariant = 1;

document.addEventListener('DOMContentLoaded', () => {
    tvaChat = document.querySelector('.tva_chat');
    tvaChat.style.minHeight = `${tvaChat.offsetHeight}px`;

    tvaChat.addEventListener('click', handleTvaChatClick);
});

handleTvaChatClick = (event) => {
    const action = event.target.dataset?.action;

    switch (action) {
        case 'select_variant':
            handleVariantSelect(event.target);
            break;
        case 'go_next':
            handleGoNext(event.target);
            break;
    }
};

handleVariantSelect = (element) => {
    element.classList.add('selected');

    selectedVariant = element.dataset.variant * 1;
    document.querySelector(`.msg_tv[data-variant="${selectedVariant}"]`).classList.remove(HIDDEN_STATE);
    document.querySelectorAll(`.msg_user_variant:not([data-variant="${selectedVariant}"])`).forEach((item) => {
        item.classList.add(HIDDEN_STATE);
    });

    document.querySelector('[data-action="go_next"]').classList.remove(HIDDEN_STATE);
}

handleGoNext = (button) => {
    switch (selectedVariant) {
        case 1:
            button.remove();
            tvaChat.removeEventListener('click', handleTvaChatClick);
            tvaChat.style.minHeight = '0';

            document.querySelectorAll('section').forEach((section) => {
                section.classList.remove(HIDDEN_STATE);
            });

            break;
        case 2:
            location.href = `${location.origin}/${PROJECT_PATH}/components.html`;
            break;
        case 3:
            location.href = `${location.origin}/${PROJECT_PATH}/lists.html`;
            break;
    }
}