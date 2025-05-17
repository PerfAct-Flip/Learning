// problem 1 -
/*
const prompt = require("prompt-sync")({sigint:true});
let age = prompt("what is your age?");
age = Number.parseInt(age); //to convert prompt(string) to number
if (age>10 && age<20){
    console.log("your age comes inside our eligibility range. Congrats!");
}
else{
    console.log("your age is not in our eligibility range. Sorry!");
}
*/
//problem 2 -
/*
let DayofTheWeek = prompt("What day it is?");
DayofTheWeek = Number.parseInt(DayofTheWeek);
    switch (DayofTheWeek) {
        case 1:
            console.log('monday');
            break;
        case 2:
            console.log('tuesday');
            break;
        case 3:
            console.log('wednesday');
            break;
        case 4:
            console.log('thursday');
            break;
        case 5:
            console.log('friday');
            break;
        case 6:
            console.log('saturday');
            break;
        case 7:
            console.log('sunday');
            break;
        
    }
*/
//problem 3 -
/* 
let num = prompt("Enter a number to check if it's divisible by 2 and 3.");
num = Number.parseInt(num);
if (num%2 === 0 && num%3 === 0){
    console.log("Yes!! The number you entered is divisible.")
}
else{
    console.log("The number you entered is not divisible by 2 and 3.")
}
*/
//problem 4 - 
/*
let num = prompt("Enter a number to check if it's divisible by either 2 or 3.");
num = Number.parseInt(num);
if (num%2 === 0 || num%3 === 0){
    console.log("Yes!! The number you entered is divisible.")
}
else{
    console.log("The number you entered is not divisible by either 2 or 3.")
} 
*/
//problem 5
/*
let age = prompt("enter you age")
age = Number.parseInt(age);
console.log("you can", (age>=18)? "drive" : "not drive"); 
*/