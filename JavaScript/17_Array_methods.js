// Array Methods
let a = [1,2,3,4,6,7,8];
let b = a.toString() // b is now a String
console.log(b, typeof b);
// join() - joins all the array elements using a separator
let c = a.join("<");
console.log(c, typeof c);

// pop() - removes last element from the array
// console.log(a.pop());
// console.log(a);

//push() - adds a new element at the end of the array
// a.push(9);
// console.log(a);
/*
//shift() - removes first element and returns it
a.shift();
console.log(a);

//unshift() - adds element to the beginning, returns  new array length

let r = a.unshift(true);
console.log(a, "\n new", r);
*/
// delete
// doesn't affect array length

// delete a[0];
// console.log(a);
//concat
/*
let a1 = [2,3,5,23,65,54];
let a2 = [32,34,543,52,34,51];
let a3 = [34,25,63,74,121,63];
let A_ = a1.concat(a2,a3);
console.log(A_);
console.log("length of new array is ", A_.length);*/

//sort() - sort method is used to sort an array alphabetically.

let B = a.sort();
console.log(B);
let compare = (A1,B1) => {
    //
    return  A1-B1;
}
let num = [23,432,435,766,123];
num.sort(compare);
console.log(num);

//reverse() - reverse the elements in the source array.
num.reverse();
console.log(num);

//splice and slice
num.splice(1,3,34,34,44);
//splice(position to add,  no. of elments, elements to be added..)
console.log(num);

///slice - slices out a piece  from an array. It creates a new array
let num1 = num.splice(2,4);
console.log(num1);