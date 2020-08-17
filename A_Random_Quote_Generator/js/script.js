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
    year: 1906
  },
  {
    quote: "Bore, n.: A person who talks when you wish him to listen.",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906
  },
  {
    quote: "Brain: an apparatus with which we think we think.",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906
  },
  {
    quote: "Painting: The art of protecting flat surfaces from the weather and exosing them to the critic.",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906
  },
  {
    quote: "Politeness, n. The most acceptable hypocrisy..",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906
  },
  {
    quote: "There is nothing new under the sun but there are lots of things we don't know.",
    source: "Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: 1906
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
 * `printQuote` function
***/

function printQuote() {

/* Gets a random quote object from the quotes array by calling the getRandomQuote() function 
on the 'quotes' array and place it in a new variable which I have named 'returnedQuote' */

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

document.getElementById('load-quote').addEventListener("click", printQuote, false);