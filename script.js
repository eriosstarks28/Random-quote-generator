/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


var quotes = [

  {quote: 'Write it on your heart that every day is the best day in the year.', 
  source: 'Ralph Waldo Emerson',
  citation: 'Poem'
  },
  
  {quote: 'There is only one good, knowledge, and one evil, ignorance.'     , 
  source: 'Socrates',
  year: 'Year-1959'
  },
  
  {quote: '"Ancora Imparo" - I\’m still learning ', 
  source: 'Michelangelo',
  citation: 'inscription on a sketch he was working on at the time.'
  },
  
  {quote: 'Give me the place to stand, and I shall move the earth.', 
  source: 'Archimedes',
  citation: 'Synagoge, Book VIII',
  year:'Year - 340AD'
  },
  
  {quote: 'It is during our darkest moments that we must focus to see the light.', 
  source: 'Aristotle'
 
  }
  
  
];



/* Random quotes function creates a random number of 1 - 5. 
*/

function getRandomQuote (array){
  var randomNumber =  Math.floor((Math.random() * array.length));
  var randomQuote = array[randomNumber];
 
  return randomQuote;
 }


/***
 * `printQuote` creates a new variable to store the random object grabbed from the array. formats it into html and returns it.
***/
function printQuote(){
  var quotesObject = getRandomQuote(quotes);
  var html = ' ';
  
  console.log(quotesObject.quote);
  
  html = '<p class="quote"> '+ quotesObject.quote + ' </p>' +
    
  '<p class="source">' + quotesObject.source + '</p>' 
  
  if (quotesObject.citation){
  html += '<span class="citation">' +  quotesObject.citation + ' </span>'
  }
  if (quotesObject.year){
    html += '<span class="year">' +  quotesObject.year + ' </span> ' 
   html += '</p>'
  }

  div = document.getElementById('quote-box');
  div.innerHTML = html;
  
  return html;
}


  


 


  


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
