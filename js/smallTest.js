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
                    isCorrect: false,
                },
                {
                    id: 2,
                    text: 'Если запырку не отравить, то она не будет пускать пузыри.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isCorrect: false,
                },
                {
                    id: 3,
                    text: 'Если запырка не пускает пузыри, то она не отравлена.',
                    helpText: 'Этот ответ был правильным!',
                    isCorrect: true,
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
                    isCorrect: true,
                },
                {
                    id: 2,
                    text: 'Не всякий шакал может похвастаться больной мухропендией.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isCorrect: false,
                },
                {
                    id: 3,
                    text: 'Существуют шакалы со здоровой мухропендией.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isCorrect: false,
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
                    isCorrect: false,
                },
                {
                    id: 2,
                    text: 'На самом деле бздыш болотный безграмотен, но не нахален.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isCorrect: false,
                },
                {
                    id: 3,
                    text: 'Те журналисты солгали.',
                    helpText: 'Этот ответ был правильным!',
                    isCorrect: true,
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
                    isCorrect: false,
                },
                {
                    id: 2,
                    text: 'В течении последнего часа перпелькой трясли.',
                    helpText: 'Этот ответ был правильным!',
                    isCorrect: true,
                },
                {
                    id: 3,
                    text: 'А нечего было трясти чем попало.',
                    helpText: 'Этот ответ был правильным!',
                    isCorrect: true,
                },
            ]
        },
        {
            title: 'Огромный бутряк напугал деревенского старосту.',
            severalAnswers: false,
            options: [
                {
                    id: 1,
                    text: 'Старосте приснился ночной кошмар.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isCorrect: false,
                },
                {
                    id: 2,
                    text: 'Староста попробовал некачественной выпивки.',
                    helpText: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                    isCorrect: false,
                },
                {
                    id: 3,
                    text: 'Староста был напуган.',
                    helpText: 'Этот ответ был правильным!',
                    isCorrect: true,
                },
            ]
        },
    ]
}
const tvaSmallTest = {};
let passedQuestions = 0;

document.addEventListener('DOMContentLoaded', () => {
    tvaSmallTest.wrapper = document.querySelector('.g_tva_small_test');
    tvaSmallTest.formWrapper = tvaSmallTest.wrapper.querySelector('.form_wrapper');
    tvaSmallTest.resultWrapper = tvaSmallTest.wrapper.querySelector('.result_wrapper');
    tvaSmallTest.progressBar = tvaSmallTest.wrapper.querySelector('.progress');
    tvaSmallTest.form = tvaSmallTest.formWrapper.querySelector('.form');
    tvaSmallTest.actions = tvaSmallTest.formWrapper.querySelector('.actions');
    tvaSmallTest.submitButton = tvaSmallTest.actions.querySelector('button[type="submit"]');
    tvaSmallTest.activeQuestion = {};
    tvaSmallTest.step = 1;

    restartProgressBar();

    initQuestion(tvaSmallTest.step);

    tvaSmallTest.form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit(e);
    });

    tvaSmallTest.wrapper.addEventListener('click', handleTvaSmallTestClick);
    tvaSmallTest.form.addEventListener('change', handleFormChange);
});

const drawTitle = title => `<h2 class="g_tva_title">${title}</h2>`;

const drawRadio = (id, text) =>
    `<div class="option" data-option-id="${id}">
        <input type="radio" value="${id}" name="option" required/>
        ${text}
    </div>`;

const drawCheckbox = (id, text) =>
    `<div class="option" data-option-id="${id}">
        <input type="checkbox" value="${id}" name="option"/>
        ${text}
    </div>`;

const drawHelpText = (isCorrect, text) => `<p class="helpText ${isCorrect ? 'green' : 'red'}">${text}</p>`;

const handleTvaSmallTestClick = event => {
    const action = event.target.dataset?.action;

    switch (action) {
        case 'next':
            initQuestion(tvaSmallTest.step + 1);
            break;
        case 'restart':
            tvaSmallTest.wrapper.classList.remove('ready_results');
            tvaSmallTest.resultWrapper.querySelector('.result').classList.remove('green');
            tvaSmallTest.resultWrapper.querySelector('.result').classList.remove('red');

            passedQuestions = 0;

            restartProgressBar();
            initQuestion(1);

            break;
    }
};

const handleFormSubmit = event => {
    const formData = new FormData(event.target);
    const answerIds = formData.getAll('option');
    let correctAnswers = 0;
    const step = tvaSmallTest.step;

    answerIds.forEach(id => {
        const answer = tvaSmallTest.activeQuestion.options[id - 1];

        tvaSmallTest.form.querySelector(`[data-option-id='${id}']`).innerHTML += drawHelpText(answer.isCorrect, answer.helpText);

        if (answer.isCorrect) correctAnswers++;
    });

    tvaSmallTest.progressBar.querySelector(`[data-progress-step='${step}']`).classList.remove('blue');

    if (correctAnswers === tvaSmallTest.activeQuestion.correctAnwers &&
        correctAnswers === answerIds.length) {
        passedQuestions++;
        tvaSmallTest.progressBar.querySelector(`[data-progress-step='${step}']`).classList.add('green');
    } else tvaSmallTest.progressBar.querySelector(`[data-progress-step='${step}']`).classList.add('red');

    if (step === testData.questions.length) showResults();
    else tvaSmallTest.actions.classList.add('ready_next');
}

const handleFormChange = () => {
    const checkedInputs = tvaSmallTest.form.querySelectorAll('input:checked');

    tvaSmallTest.submitButton.disabled = checkedInputs.length <= 0;
}

const initQuestion = questionId => {
    tvaSmallTest.form.innerHTML = '';
    tvaSmallTest.progressBar.querySelector(`[data-progress-step='${questionId}']`).classList.add('blue');
    tvaSmallTest.actions.classList.remove('ready_next');
    tvaSmallTest.submitButton.disabled = true;

    tvaSmallTest.activeQuestion = testData.questions[questionId - 1];
    tvaSmallTest.activeQuestion.correctAnwers = 1;
    tvaSmallTest.step = questionId;

    if (questionId > 1) tvaSmallTest.progressBar.querySelector(`[data-progress-step='${questionId - 1}']`).classList.remove('blue');

    tvaSmallTest.form.innerHTML += drawTitle(tvaSmallTest.activeQuestion.title);

    if (tvaSmallTest.activeQuestion.severalAnswers) {
        tvaSmallTest.activeQuestion.correctAnwers = 0;
        tvaSmallTest.activeQuestion.options.forEach(option => {
            tvaSmallTest.form.innerHTML += drawCheckbox(option.id, option.text);
            if (option.isCorrect) tvaSmallTest.activeQuestion.correctAnwers++;
        });
    } else tvaSmallTest.activeQuestion.options.forEach(option => tvaSmallTest.form.innerHTML += drawRadio(option.id, option.text));
}

const showResults = () => {
    const questionsCount = testData.questions.length;
    const resultClass = passedQuestions > questionsCount / 2 ? 'green' : 'red';
    let conclusion = '';

    tvaSmallTest.wrapper.classList.add('ready_results');
    tvaSmallTest.resultWrapper.querySelector('.test_title').textContent = testData.title;
    tvaSmallTest.resultWrapper.querySelector('.result_counter').textContent = `${passedQuestions}/${questionsCount}`;

    if (passedQuestions < questionsCount / 2) conclusion = testData.resultConclusions.negative;
    if (passedQuestions > questionsCount / 2 && passedQuestions !== questionsCount) conclusion = testData.resultConclusions.neutral;
    if (passedQuestions === questionsCount) conclusion = testData.resultConclusions.positive;

    tvaSmallTest.resultWrapper.querySelector('.conclusion').textContent = conclusion;
    tvaSmallTest.resultWrapper.querySelector('.result').classList.add(resultClass);
}

const restartProgressBar = () => {
    tvaSmallTest.progressBar.innerHTML = '';
    for (let i = 1; i < testData.questions.length + 1; i++) tvaSmallTest.progressBar.innerHTML += `<span data-progress-step='${i}'></span>`;
}