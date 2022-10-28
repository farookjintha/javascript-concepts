//Let vs Var vs Const

//Number Type
let value1 = 5; //integer
let value2 = 1.4; //float
let value3 = 1.000000000034328853434 //double


let value4 = "Hello";
let value5 = true;
var value6 = "Good Morning";
var city = "Mumbai";

const nationality = "Indian";
const gender = "Male"
// const gender = "Female"; //Reclaration
// gender = "Female" //Reassign


let price = 10000; //Declaring the variable
// const price = 30000; //Redeclaration
price = 20000; //Reassign


var address = "Besant Nagar, Chennai";
var address = "Anna Nagar, Chennai";
address = "Bangalore";

// const -> cannot be redeclared or reassigned
// let -> cannot be redeclared but can be reassigned
// var -> can be reclared and reassigned.

// Scope of these variables -> var -> Global,  let and const -> Block


let myValue = 'India';
myValue = 5;
myValue = true;
myValue = 1.0002;

console.log(myValue);