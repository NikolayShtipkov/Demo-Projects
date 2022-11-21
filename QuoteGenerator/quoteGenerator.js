// Variables

let button = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: 'Get to know your motherland and you will fall in love with it!',
    person: 'Aleko Konstantinov'
}, {
    quote: 'If I win, I win for the whole nation—if I lose, I only lose myself.',
    person: 'Vasil Levski'
}, {
    quote: 'The Fatherland’s traitors deserve no mercy.',
    person: 'Stefan Stambolov'
}, {
    quote: 'Even if they cut off my head, I will still shout: ‘Long live Bulgaria!',
    person: 'Nikolay Haytov'
}, {
    quote: 'A man is a long sentence, written with much love and inspiration, but full of spelling errors.',
    person: 'Jordan Radichkov'
}, {
    quote: 'The man is a slave of his own will, but a master of his own work.',
    person: 'Colonel Boris Drangov'
}, {
    quote: 'The ideal of earthly happiness is in work, in health, and in nature.',
    person: 'Ivan Vazov'
}, {
    quote: 'Such is human nature! People forget everything, even the remorse of their own conscience.',
    person: 'Lyuben Karavelov'
}, {
    quote: 'Do not despise old customs! Don’t forget your father’s fireplace!',
    person: 'Georgi Sava Rakovski'
}];

button.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});