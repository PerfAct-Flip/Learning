let marks_XII = [91,82,94,74,56.5, false, "absent"];
for(i= 0; i< marks_XII.length; i++){
    console.log("marks of student ", (i+1), "is",marks_XII[i]);
}
marks_XII[1] = 90;
console.log("updated marks of student 2nd student", marks_XII[1]);
console.log(typeof marks_XII);