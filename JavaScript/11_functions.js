//  change one time and reflect multiple times
function oneplusAvg(x,y,z){
    console.log("Done");
    return Math.round(1 + (x+y+z)/2)
}

let a = 1;
let b = 2;
let c = 3;
let d = 4; 
let e = 5;
let f = 6;

//a function can be performed this way too
const sum = (p,q) =>{
    return p+q
}

// we have to invoce the function to get output in return
const hello = () =>{
    console.log("heyyy!!");
    return "hi";
}
console.log(hello());
console.log("One plus average of a and b and c", oneplusAvg(a,b,c));
console.log("One plus average of a and d and e", oneplusAvg(a,d,e));
console.log("One plus average of d and e and f", oneplusAvg(d,e,f));
console.log("One plus average of b and d and c", oneplusAvg(b,d,c));
console.log("One plus average of a and b and f", oneplusAvg(a,b,f));
console.log("sum of 6 and 7 = " + sum(6,7))