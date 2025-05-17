//problem 1
/*
let arr = [23,56,26,86,33];
let a = prompt("enter numbers");

arr.push(parseInt(a)); // we can use Number.parseInt too
console.log(arr);
*/

//problem 2
/*
let arr = [23,56,26,86,33,46];
let a;
do{
    a = prompt("enter number");
    a = Number.parseInt(a);
    arr.push(a);
}while(a!=0);
console.log(arr);
*/

//problem 3
/*
let arr = [23,43,60,20,54,100,540,240];
let a = arr.filter((x)=>{
    return x%10 ==0;
});
console.log(a);
*/

//problem 4
/*
let arr = [];
let a;
// let a = 10;
// arr.push(a);

do{
    a = prompt("enter number");
    // a = 10;
    a = Number.parseInt(a);
    arr.push(a);
}while(a!=0);
arr.pop();
console.log(arr);

let b = arr.map((value)=>{
    return value*value;
})
console.log(b);
*/

//problem 5
let arr = []
let n = prompt("enter number")
for(let i=0;i<n;i++){
    arr[i] = i+1;
}
let factorial = arr.reduce((a1,a2)=>{
    return a1*a2
})
console.log(factorial);