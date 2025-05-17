const prompt = require("prompt-sync")({ sigint: true });


let num = Math.floor(Math.random() * 100) + 1;
num = Number.parseInt(num);
console.log("random num is:", num);
let count = 0; // intial value of tries 
let guess; //to store input from user
console.log("guess a number!!, if it matches you win");

guess = prompt("Guess the number");
//taking input from user.
do {
  guess = Number.parseInt(guess);

  if (guess > num) {
    console.log("\nnumber is greater");
    guess = prompt("enter number!!");
    guess = Number.parseInt(guess);
    ++count;
    continue;
  }
  else if (guess < num) {
    console.log("number is smaller");
    guess = prompt("enter number!!");
    guess = Number.parseInt(guess);
    ++count;
    continue;
  }
//   else {
//     console.error("error. not working");
//   }
} while (guess != num);
//break the loop when the entered number is equal to the generated value.

// final score on the beases of attempt by user.
console.log(`your score is ${100 - count}`);
