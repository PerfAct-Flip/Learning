function greet(naam, greettxt = "Greeting from JS!!"){
    console.log(greettxt + " " + naam)
    console.log(naam + " is a good person.")
}
let name1 = "soham";
let name2 = "subham";
let name3 = "flip";
let name4 = "skai";
let grtxt = "Good evening";

greet(name1,  grtxt);
greet(name2,  grtxt);
greet(name3,  grtxt);
greet(name4);

function sum(a,b,c){
    let add = a+b+c;
    return add;
}
let sumofthreeno = sum(21,32,43);
console.log(sumofthreeno);
