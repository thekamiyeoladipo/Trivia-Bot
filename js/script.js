console.log('Hello, World!');

let botName = "Chatbot";
let botLocation = "Earth";
let favoriteLanguage = "JavaScript";

console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");

let codingFact =  favoriteLanguage + " is a versatile language.";
console.log(codingFact);

codingFact = 'One of my best languages to use is' + favoriteLanguage + '.';

console.log(codingFact);
codingFact = 'I love coding in ' + favoriteLanguage + '.';
console.log(codingFact);
console.log("It was fun sharing these facts with you. Goodbye! -" + botName + " from " + botLocation + ".");


// This section below is to build a sentence maker to avoid building another repo

let adjective = "mighty";
let noun = "Dragon";
let verb = "angry";
let place = "cave";
let adjective2 = "massive";
let noun2 = "chickens";

let firstStory = 
    "Once upon a time, there was a(n) " + adjective + " " + noun + 
    " who loved to eat " + noun2 + ". " + 
    "The " + noun + " lived in a " + place + 
    " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("First story: " + firstStory);


adjective = "brave";
noun = "Knight";
verb = "determined";
place = "castle";
adjective2 = "shiny";
noun2 = "swords";

let secondStory = 
"Once upon a time, there was a(n) " + adjective + " " + noun + 
" who loved to eat " + noun2 + ". " + 
"The " + noun + " lived in a " + place + 
" and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("Second story: " + secondStory);
