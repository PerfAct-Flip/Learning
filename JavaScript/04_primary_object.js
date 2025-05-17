// nn bb ss u - primitive datatypes in JS
let a = null; //null
let b = 345; //number
let c = true; // boolean (true/false)
let d = BigInt("345") + BigInt("15")
let e = "soham"
let f = Symbol("This is a nice Symbol")
let g = undefined

console.log(a, b, c, d, e, f, g)
console.log(typeof c)

//Non Primitive Data Type - Objeects in JS
const item = {
  soham: true,
  shubham: false,
  lavish: 67,
  ronak: undefined
}
console.log(item)
console.log(item["lavish"])
