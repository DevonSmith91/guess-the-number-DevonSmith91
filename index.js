//info for readline ask await functions and async functions
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
//function for generating a random integer
function randomInteger(min, max) {
  let range = max - min + 1;
  return min + Math.floor(Math.random() * range);
}
//function for steralizing responses from input
function capitalize(word) {
  let steralize = word.toString().trim().toLowerCase()
  let firstLetter = steralize[0].toUpperCase()
  let restOfWord = steralize.slice(1)
  return firstLetter + restOfWord
}

start();

async function start() {
  //start off with a prompt to play the game.
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")

  //allow the user to input a number and have it wait for that to happen
  let secretNumber = await ask("Pick any number between 1 and 100 and let me know what it is.\nI won't peek, I promise...\n");
  
  //return said secret number and say it will now guess.
  console.log('You entered: ' + secretNumber + "\nNow let me guess!");

  //Get the computer to guess a random number between 1 and 100
  console.log(randomInteger(1, 100))
  
  //give a prompt about asking if the guess was correct
  let response = await ask("Was I right?! ")
  let guess = randomInteger(1,100)
  
  while (response !== "Y") {
    if (capitalize(response).charAt(0) === "Y") {
      console.log("I knew it! I'm smarter then you!")
      //kill the process if it guesses correctly
      process.exit();
      //or if it was an incorrect guess 
    } else if (capitalize(response).charAt(0) === "N") {
      console.log("I NEED TO GUESS AGAIN!" + "\n" + randomInteger(1, 100))
      console.log(response = await ask("What about this one?"))
      //HOW DO I REFERENCE THE "RESPONSE" SECTION AGAIN!
      
      //or if they input something that is not a Yes or No
    } else {
      console.log("That's not an appropriate response.")
      process.exit();
      
    }
    

  }
  
  
  
  
}


//refrain from nesting if else statements for the entire thing. figure out loops and create loops that will make the
//function be what I want. It will be easier to update later on in the process.

//i need to write a loop that would use a variable that can change.
//there would need to be one variable for the min value and one variable for the max value.
//depending on if i tell the program "higher" or "lower" it would need to be able to replace the appropriate values.

//essentially. learn some loops!

//instead of worrying about the random number part, focus on getting it to loop until i enter yes