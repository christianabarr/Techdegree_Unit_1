/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channe:chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "Cabbage: A familiar kitchen-garden vegetable about as large and wise as a man's head.",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906,
    genre: " (Wit & Humor)"
  },
  {
    quote: "Bore, n.: A person who talks when you wish him to listen.",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906,
    genre: " (Wit & Humor)"
  },
  {
    quote: "Brain: an apparatus with which we think we think.",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906,
    genre: " (Wit & Humor)"
  },
  {
    quote: "Painting: The art of protecting flat surfaces from the weather and exosing them to the critic.",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906,
    genre: " (Wit & Humor)"
  },
  {
    quote: "Politeness, n. The most acceptable hypocrisy..",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906,
    genre: " (Wit & Humor)"
  },
  {
    quote: "There is nothing new under the sun but there are lots of things we don't know.",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906,
    genre: " (Wit & Humor)"
  }
];

/***
 * `getRandomQuote` function
***/

/* Math.random generates a random number, which is less than or equal to the 
total number of objects contained in the 'quotes' array above */

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * (quotes.length));

/* A new variable that holds a quote randomly grabed from the 'quotes' array is declared using it's randomly
chosen index position */

  let returnedQuote = quotes[randomNum];

/* Next the random text quote is returned and confirmed by testing with console.log 
in Chrome's interepreter */

  return returnedQuote;
};

/***
 * `backgroundColor` function
***/
/* A function that automatically generates a new random background color each time the 'Show another quote' button is clicked */
function newRandomColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    return randomColor;   
}
/* A timer that updates the page to display a new quote every 5 seconds*/
const timer = setInterval(printQuote, 5000);

/***
 * `printQuote` function
***/

function printQuote() {

/* Gets a random quote object from the quotes array by calling the getRandomQuote() function 
on the 'quotes' array and places it in a new variable which I have named 'returnedQuote' */

  let returnedQuote = getRandomQuote(quotes);

/* The random quote is placed in a new variable and is relayed to the index.html appropriately
by class names 'quote' and 'source' */  

  let twoElements = '<p class="quote">' + returnedQuote.quote + '</p>';
      twoElements += '<p class="source">' + returnedQuote.source;

/* Checks to see if the 'citation' property exists and then concatenates the relevant text on to the 
end of the html string if it exists */

if (returnedQuote.citation) {
    twoElements += '<span class = "citation">' + returnedQuote.citation + '</span>'; 
  };

/* Checks to see if the 'year' property exists and then concatenates the relevant text on to the 
end of the html string if it exists */

if (returnedQuote.year) {
  twoElements += '<span class = "year">' + returnedQuote.year + '</span>';
  };

if (returnedQuote.genre) {
  twoElements += '<span class = "genre">' + returnedQuote.genre + '</span>';
  };
// Concatenates a closing </p> tag onto the end of the string and completes the html string

  twoElements += '</p>';

/* Sets the innerHTML of the quote-box div equal to the entire html string by placing
it in the variable 'twoElements' */

  document.getElementById('quote-box').innerHTML = twoElements;
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.body.style.backgroundColor = newRandomColor();

/* added an additional event-listener to the original below, calling upon the newRandomColor 
function each time the button is clicked.*/

document.getElementById('load-quote').addEventListener("click", newRandomColor, false);

document.getElementById('load-quote').addEventListener("click", printQuote, false);