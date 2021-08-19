//for/in循环
var txt = "";
var person = {fname:"Bill", lname:"Gates", age:62}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}