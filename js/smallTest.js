const testData = {
    title: 'Основы SEO',
    resultConclusions: {
        negative: 'Вы можете лучше, попробуйте пройти тест заново.',
        neutral: 'Хорошо, но какие-то моменты можно подтянуть.',
        positive: 'Отлично! И это не предел!',
    },
    questions: [
        {
            title: 'Если запырку отравить, то она сразу начнет пускать пузыри.',
            severalAnswers: false,
            options: [
                {
                    id: 1,
                    text: 'Если запырка пускает пузыри, то она была отравлена.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isAnswer: false,
                },
                {
                    id: 2,
                    text: 'Если запырку не отравить, то она не будет пускать пузыри.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isAnswer: false,
                },
                {
                    id: 3,
                    text: 'Если запырка не пускает пузыри, то она не отравлена.',
                    helpText: 'Этот ответ был правильным!',
                    isAnswer: true,
                },
            ]
        },
        {
            title: 'Существуют шакалы с больной мухропендией.',
            severalAnswers: false,
            options: [
                {
                    id: 1,
                    text: 'Не всякий шакал может похвастаться здоровой мухропендией.',
                    helpText: 'Этот ответ был правильным!',
                    isAnswer: true,
                },
                {
                    id: 2,
                    text: 'Не всякий шакал может похвастаться больной мухропендией.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isAnswer: false,
                },
                {
                    id: 3,
                    text: 'Существуют шакалы со здоровой мухропендией.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isAnswer: false,
                },
            ]
        },
        {
            title: 'Журналисты наврали, что бздыш болотный безграмотен и нахален.',
            severalAnswers: false,
            options: [
                {
                    id: 1,
                    text: 'На самом деле бздыш болотный образован и тактичен.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isAnswer: false,
                },
                {
                    id: 2,
                    text: 'На самом деле бздыш болотный безграмотен, но не нахален.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isAnswer: false,
                },
                {
                    id: 3,
                    text: 'Те журналисты солгали.',
                    helpText: 'Этот ответ был правильным!',
                    isAnswer: true,
                },
            ]
        },
        {
            title: 'Если тряхнуть перпелькой, то немедленно начнется стрельба. За последний час стрельбы не было.',
            severalAnswers: true,
            options: [
                {
                    id: 1,
                    text: 'В течении последнего часа перпелькой не трясли.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isAnswer: false,
                },
                {
                    id: 2,
                    text: 'В течении последнего часа перпелькой трясли.',
                    helpText: 'Этот ответ был правильным!',
                    isAnswer: true,
                },
                {
                    id: 3,
                    text: 'А нечего было трясти чем попало.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isAnswer: true,
                },
            ]
        },
        {
            title: 'Огромный бутряк напугал деревенского старосту.',
            severalAnswers: true,
            options: [
                {
                    id: 1,
                    text: 'Старосте приснился ночной кошмар.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isAnswer: false,
                },
                {
                    id: 2,
                    text: 'Староста попробовал некачественной выпивки.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isAnswer: false,
                },
                {
                    id: 3,
                    text: 'Староста был напуган.',
                    helpText: 'Этот ответ был правильным!',
                    isAnswer: true,
                },
            ]
        },
    ]
}
const tvaSmallTest = {};
let correctAnswers = 0;

const drawTitle = title => `<h2 class="g_tva_title">${title}</h2>`;
const drawRadio = (id, text) =>
    `<div class="option" data-option-id="${id}">
        <input type="radio" value="${id}" name="option" required/>
        ${text}
    </div>`;
const drawCheckbox = (id, text) =>
    `<div class="option" data-option-id="${id}">
        <input type="checkbox" value="${id}"/>
        ${text}
    </div>`;
const drawHelpText = (isAnswer, text) => `<p class="helpText ${isAnswer ? 'green' : 'red'}">${text}</p>`;

document.addEventListener('DOMContentLoaded', () => {
    tvaSmallTest.wrapper = document.querySelector('.g_tva_small_test');
    tvaSmallTest.formWrapper = tvaSmallTest.wrapper.querySelector('.form_wrapper');
    tvaSmallTest.resultWrapper = tvaSmallTest.wrapper.querySelector('.result_wrapper');
    tvaSmallTest.progressBar = tvaSmallTest.wrapper.querySelector('.progress');
    tvaSmallTest.form = tvaSmallTest.formWrapper.querySelector('.form');
    tvaSmallTest.actions = tvaSmallTest.formWrapper.querySelector('.actions');
    tvaSmallTest.activeQuestion = {};
    tvaSmallTest.step = 1;

    restartProgressBar();

    initQuestion(tvaSmallTest.step);

    tvaSmallTest.form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const optionId = formData.get('option');
        const option = tvaSmallTest.activeQuestion.options[optionId - 1];
        const step = tvaSmallTest.step;

        console.log(formData.getAll('option'));

        tvaSmallTest.progressBar.querySelector(`[data-progress-step='${step}']`).classList.remove('blue')
        tvaSmallTest.progressBar.querySelector(`[data-progress-step='${step}']`).classList.add(`${option.isAnswer ? 'green' : 'red'}`);
        tvaSmallTest.form.querySelector(`[data-option-id='${optionId}']`).innerHTML +=
            `<p class="helpText ${option.isAnswer ? 'green' : 'red'}">${option.helpText}</p>`;

        if (option.isAnswer) correctAnswers++;

        if (step === testData.questions.length) showResults();
        else tvaSmallTest.actions.classList.add('ready_next');
    });

    tvaSmallTest.wrapper.addEventListener('click', handleTvaSmallTestClick);
});

handleTvaSmallTestClick = (event) => {
    const action = event.target.dataset?.action;

    switch (action) {
        case 'next':
            initQuestion(tvaSmallTest.step + 1);
            break;
        case 'restart':
            tvaSmallTest.wrapper.classList.remove('ready_results');
            tvaSmallTest.resultWrapper.querySelector('.result').classList.remove('green');
            tvaSmallTest.resultWrapper.querySelector('.result').classList.remove('red');
            restartProgressBar();
            initQuestion(1);
            correctAnswers = 0;
            break;
    }
};

const initQuestion = (questionIndex) => {
    tvaSmallTest.form.innerHTML = '';
    tvaSmallTest.actions.classList.remove('ready_next');
    tvaSmallTest.activeQuestion = testData.questions[questionIndex - 1];
    tvaSmallTest.step = questionIndex;

    tvaSmallTest.progressBar.querySelector(`[data-progress-step='${questionIndex}']`).classList.add('blue');

    if (questionIndex > 1) tvaSmallTest.progressBar.querySelector(`[data-progress-step='${questionIndex - 1}']`).classList.remove('blue');

    tvaSmallTest.form.innerHTML += drawTitle(tvaSmallTest.activeQuestion.title);

    if (tvaSmallTest.activeQuestion.severalAnswers) {
        tvaSmallTest.activeQuestion.options.forEach(option => tvaSmallTest.form.innerHTML += drawCheckbox(option.id, option.text));
    } else
        tvaSmallTest.activeQuestion.options.forEach(option => tvaSmallTest.form.innerHTML += drawRadio(option.id, option.text));
}

const showResults = () => {
    const questionsCount = testData.questions.length;
    const resultClass = correctAnswers > questionsCount / 2 ? 'green' : 'red';
    let conclusion = '';

    tvaSmallTest.wrapper.classList.add('ready_results');
    tvaSmallTest.resultWrapper.querySelector('.test_title').textContent = testData.title;
    tvaSmallTest.resultWrapper.querySelector('.result_counter').textContent = `${correctAnswers}/${questionsCount}`;

    if (correctAnswers < questionsCount / 2) conclusion = testData.resultConclusions.negative;
    if (correctAnswers > questionsCount / 2 && correctAnswers !== questionsCount) conclusion = testData.resultConclusions.neutral;
    if (correctAnswers === questionsCount) conclusion = testData.resultConclusions.positive;

    tvaSmallTest.resultWrapper.querySelector('.conclusion').textContent = conclusion;
    tvaSmallTest.resultWrapper.querySelector('.result').classList.add(resultClass);
}

const restartProgressBar = () => {
    tvaSmallTest.progressBar.innerHTML = '';
    for (let i = 1; i < testData.questions.length + 1; i++) tvaSmallTest.progressBar.innerHTML += `<span data-progress-step='${i}'></span>`;
}