//problem 1 - 
/*
let obj = {
    harry: 98,
    rohan: 70, 
    aakash: 73,
}
for(let i = 0; i < Object.keys(obj).length; i++){
    console.log(" marks of " + Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]])
}
*/
//problem 2 - 
/*
let obj = {
    harry: 98,
    rohan: 70, 
    aakash: 73,
}
for(key in obj){
    console.log("the marks of " + key + " is " + obj[key])
}
*/
//problem 3 - 
/*
const prompt = require("prompt-sync")({sigint:true})

let cn = 8;
let i = prompt("try to guess the correct number")
while(i != cn){
    console.log("try again")
    i = prompt("enter the number.")
}
console.log("you entered right number\nbonjour");
*/
//problem 4 - 
const mean = (a, b, c, d, e) => {
    return (a+b+c+d+e)/5
}
console.log("mean of 5 numbers (3, 4, 5, 8, 9) is " + mean(3,4,5,8,9))