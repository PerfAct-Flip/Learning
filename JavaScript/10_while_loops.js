const prompt = require("prompt-sync")({sigint:true});

//While Loop
// condition is checked first then the block runs
/*
let n = prompt("Enter the value of n ");
n = Number.parseInt(n);

let i = 0;
while(i<n){
    console.log(i);
    i++;
}


//Do While Loop
// block runs first then condtion is checked 
let nn = prompt("Enter the value of nn ");
nn = Number.parseInt(nn);

let ii = 0;
do{
    console.log(ii);
    ii++;
}while(ii<nn)

*/

//quick question - While loop
let a = prompt("Enter Any Value(20>)");
let i = 20;
while(i >= a){
    console.log(i);
    i--;
}

//quick question - While do-loop
let b = prompt("Emter any value");
let j = 20;
do{
    console.log(j);
    j++;
} while(j<b)
// this will only print j if you enter a number <20.