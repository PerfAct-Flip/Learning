//escape sequence characters 
let name = 'Adam D\'Angelo';
//or
let name2 = "Adam D\" Angelo";
// slice 
let love = "flip";
let name_love = love.slice(1,3);
console.log(name_love);
//replace 
let other_name = "PerfAct_Flip";
console.log(other_name.replace("Flip", "tip"));

//concat - join more strings to a string.
let myothername = "Skai";
console.log(myothername.concat(" is my old name, other name is ", other_name, " hehe!!"));
// trim
let mynameis = "      soham pf ";
console.log(mynameis);
console.log(mynameis.trim());