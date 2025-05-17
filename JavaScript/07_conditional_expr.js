// type npm install prompt-sync 
// in terminal
const prompt = require ("prompt-sync")({sigint: true})
let a = prompt("hey whats your age?");
a = Number.parseInt(a); //Converting the string to a number
if(a<0){
    // alert("Are you an alien?");
    console.log("Are you an alien?");
}
else if(a<9){
    // alert("you are still a kozzo and you can't think of driving");
    console.log("you are still a kozzo and you can't think of driving");
}
else if(a<18 && a>=9){
    // alert("Get little bigger then you can drive");
    console.log("Get little bigger then you can drive");
}
else{
    // alert("You are not a small punk anyomore. Go and drive!!");
    console.log("You are not a small punk anyomore. Go and drive!!");
}

console.log("application done");
console.log("you can", (a<18? "not drive" : "drive"))