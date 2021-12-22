const questions = [
    {
        question: 'Если запырку отравить, то она сразу начнет пускать пузыри.',
        options: [
            {
                text: 'Если запырка пускает пузыри, то она была отравлена.',
                helpTest: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                isAnswer: false,
            },
            {
                text: 'Если запырку не отравить, то она не будет пускать пузыри.',
                helpTest: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                isAnswer: false,
            },
            {
                text: 'Если запырка не пускает пузыри, то она не отравлена.',
                helpTest: 'Этот ответ был правильным!',
                isAnswer: true,
            },
        ]
    },
    {
        question: 'Существуют шакалы с больной мухропендией.',
        options: [
            {
                text: 'Не всякий шакал может похвастаться здоровой мухропендией.',
                helpTest: 'Этот ответ был правильным!',
                isAnswer: true,
            },
            {
                text: 'Не всякий шакал может похвастаться больной мухропендией.',
                helpTest: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                isAnswer: false,
            },
            {
                text: 'Существуют шакалы со здоровой мухропендией.',
                helpTest: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                isAnswer: false,
            },
        ]
    },
    {
        question: 'Журналисты наврали, что бздыш болотный безграмотен и нахален.',
        options: [
            {
                text: 'На самом деле бздыш болотный образован и тактичен.',
                helpTest: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                isAnswer: false,
            },
            {
                text: 'На самом деле бздыш болотный безграмотен, но не нахален.',
                helpTest: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                isAnswer: false,
            },
            {
                text: 'Те журналисты солгали.',
                helpTest: 'Этот ответ был правильным!',
                isAnswer: true,
            },
        ]
    },
    {
        question: 'Если тряхнуть перпелькой, то немедленно начнется стрельба. За последний час стрельбы не было.',
        options: [
            {
                text: 'В течении последнего часа перпелькой не трясли.',
                helpTest: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                isAnswer: false,
            },
            {
                text: 'В течении последнего часа перпелькой трясли.',
                helpTest: 'Этот ответ был правильным!',
                isAnswer: true,
            },
            {
                text: 'А нечего было трясти чем попало.',
                helpTest: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                isAnswer: false,
            },
        ]
    },
    {
        question: 'Огромный бутряк напугал деревенского старосту.',
        options: [
            {
                text: 'Старосте приснился ночной кошмар.',
                helpTest: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                isAnswer: false,
            },
            {
                text: 'Староста попробовал некачественной выпивки.',
                helpTest: 'Этот ответ не подходит, потому что логика спряталась где-то еще.',
                isAnswer: false,
            },
            {
                text: 'Староста был напуган.',
                helpTest: 'Этот ответ был правильным!',
                isAnswer: true,
            },
        ]
    },
]
const test = {};

document.addEventListener('DOMContentLoaded', () => {
    test.wrapper = document.querySelector('.g_tva_small_test');
    test.progressBar = test.wrapper.querySelector('.progress');
    test.form = test.wrapper.querySelector('.form');

    test.progressState = 1;
    test.currentQuestion = {};

    for (let i = 1; i < questions.length + 1; i++) test.progressBar.innerHTML += `<span data-progress-step='${i}'></span>`;
});

const initQuestion = (questionIndex) => {
    test.progressState = (questionIndex);
    test.currentQuestion = questions[questionIndex];

    // const progressSteps = test.progressBar.ta
}