// FOR LOOP 
// program to add first n natural numbers
/*
const prompt = require("prompt-sync")({sigint:true});
let n = prompt("Emter the value for n ");
let sum = 0;
n = Number.parseInt(n);
for (let i = 0; i < n; i++ ){
    sum += (i + 1)
}
console.log("Sum of first " + n + " natural numbers is " + sum);
*/
//---------------------
// usable in vscode
/*
let sum = 0;

for (let i=0; i<=7; i++){
    console.log(" number is " + i );
    sum += i;
    //console.log("number after ++" + i, "sum of number" + sum) // this doesn't work properly
}
console.log("sum of numbers" + sum)
*/

//------------------
//Extra 
/* "i" we took above in the programs have no scope after the loop ends thus we don't get error 
i is not defined
console.log(i);

whereas if we use "var" instead of "let"
i have a scope/ is defined at the end of loop
*/ /*
for (var i=0; i<=7; i++){
    console.log(" number is " + i );
    sum += i;
    //console.log("number after ++" + i, "sum of number" + sum) // this doesn't work properly
}
console.log(i); */


//---------------------------------
//quick question - for loop
/*
let n = prompt("enter value for n");
n = Number.parseInt(n);
let factorial = 1;

for(i = 1; i<n; i++){
    console.log(n);
    factorial *= (i+1);
}
console.log("factorial of first " + n + " is " + factorial);
*/



//-----------------------
// FOR IN LOOP
/*
let obj = {
    harry: 90,
    shubh:88,
    shivika:84,
    ritika:80,
    shiv:60
}
for(let name in obj){
    console.log("marks of " + name + " are " + obj[name])
}
*/

// quick question for-in loop
/*
let obj = {
    apple: 20,
    mango: 10,
    watermelon: 3,
    banana: 10,
}

for (let fruit in obj){
    console.log("number of " + fruit, " available is " + obj[fruit])
}*/
// ------------------------
//FOR OF LOOP
// only iterable things can be used with for of loop
//string is itereable and array is also iterable
/*
for (let a of "SOHAM"){
    console.log(a);
}
*/
