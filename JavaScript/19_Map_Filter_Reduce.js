//Array map method
//map() - creates a new array by performing some operation on each array element.
//map creates new array but for loop perform function using orginal array.
/*
let arr = [45,46,63];
arr.map((value)=>{
    console.log(value*4);
})
let a = arr.map((value,index,array)=>{
    console.log("value",value,"\nindex",index,"\n array",array);
    return value+10;
})
console.log(a);
*/
// Array filter method
// filter() - filters an array with the values that passes a test. Cretes a new array
/*
let arr2 = [34,34,53,23,53,22];
let a2 = arr2.filter((a)=>{
    return a<40;
})
console.log(a2);
*/
//Array reduce method
// reduce() - reduces an array to a single value

let n = [1,8,7,11];
const reduce_func = (h1,h2)=>{
    return h1, h2;
}

let sum = n.reduce(reduce_func);
console.log(sum);

