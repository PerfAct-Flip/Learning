//problem-1
console.log("har\"".length);
// har" -> 4

//problem-2
// includes, startwith and endwith function of a string 
//includes - return true or false if entered string is  found or not.

const sentence = `The quick brown fox jumps over the lazy dog`;
const word = 'fox';
console.log(`THe word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//startsWith() - determines whether the string begins with the characters of a specified string, return true or false
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false

// endsWith - determine whether the string begins with the character of a specified string, return true or false

const str3 = 'Cats are the best!';

console.log(str3.endsWith('best!'));
// Expected output: true

console.log(str3.endsWith('are',8));
// Expected output: true
const str4 = 'Is this a question?';

console.log(str4.endsWith('question'));
// Expected output: false


// problem-3
let str5 = 'Cats are the best!';
console.log(str5.toLowerCase());

//problem-4 
let str6 = "Please give Rs 1000 to soham";
console.log(str6.length);
console.log(str6.slice(15,19));

//problem-5
let str7 = "hayo my name is Flip."
str7[4] = 'e';
console.log(str7);
// you cant change character from a string.