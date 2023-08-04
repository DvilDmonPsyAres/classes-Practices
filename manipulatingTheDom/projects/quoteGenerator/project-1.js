//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{quote:"A rose by any other name would smell as sweet.", person: "William Shakespeare"},
{quote:"Ask not what your country can do for you; ask what you can do for your country.", person: "John Kennedy"},
{quote:"Ask, and it shall be given you; seek, and you shall find.", person: "the Bible"},
{quote:"Eighty percent of success is showing up.", person: "Woody Allen"},
{quote:"For those to whom much is given, much is required.", person: "the Bible"},
{quote:"Genius is one percent inspiration and ninety-nine percent perspiration.", person: "Thomas Edison"},
{quote:"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.", person: "Martin Luther King"},
{quote:"I'll be back.", person: "Terminator"},
{quote:"Nothing is certain except for death and taxes.", person: "Benjamin Franklin"},
{quote:"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.", person: "Abraham Lincoln"},
{quote:"You must be the change you wish to see in the world.", person: "Mahatma Ghandi"},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    let x = quotes[random]

    quote.innerText = x.quote;
    person.innerText = x.person;
})
