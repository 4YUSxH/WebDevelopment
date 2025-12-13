// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise) *******************
let a = 10;
let b = 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

let x = 5;
console.log(x += 3);
console.log(x *= 3);
console.log(x /= 3);

let count = 5;
console.log(count++);
console.log(count--);

console.log(5=="5"); // Only values
console.log(5==="5"); // Value with datatype

console.log(10 > 5 ? 10 < 20 : 10===10);

console.log(false && false);
console.log(true && false);
console.log(false && true);
console.log(true && true);

console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log(!(true));
console.log(!(false));

// Predict the result of:
// (5 > 3 && 10 > 8) : True
// (5 > 3 || 10 < 8) : True

// Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now) : Mark For Review













// 2 Variable Hoisting in JavaScript ************************************************************************************************
// Predict output of:
// console.log(a);
// var a = 10 : Undefined

// Predict output of:
// console.log(b);
// let b = 10 : TDZ acitve hoga and cannot access b beofore intialization

// Predict output of:
// test()
// function test() { console.log(“Hello”) } : Hello

// hello()
// var hello = function() { console.log(“Hi”) } :Yaha func hoist nahi hoyega cuz ye var ka use karke create hua hai and as a var treat hoga naa ki as a function 

// Write one sentence:
// What gets hoisted? : var let(but TDZ active) const function 
// What does not get hoisted fully? var a = function(){}











// 3 Conditional Operators (if, else, else-if, ternary, switch) **********************************************************************
// let age = prompt("Enter Age: ");
// if(age>18){
//     console.log("Adult");
// }
// else{
//     console.log("Minor");
// }

// let marks = prompt("Enter Marks");
// if(marks>=90){
//     console.log("Grade : A");
// }
// else if(marks>=90){
//     console.log("Grade : B");
// }
// else if(marks>=50){
//     console.log("Grade : C");
// }
// else{
//     console.log("Fail");
// }

city = "Bhopal";
if(city==="Bhopal"){
    console.log("M.P.");
}
else if(city==="Delhi"){
    console.log("Capital");
}
else{
    console.log("Unkown City");
}

let score = 40;
(score>35) ? console.log("Pass") : console.log("Fail");

let temp = 30;
(temp>30) ? console.log("Hot") : console.log("Pleasant");

let num = 7;
switch(num){
    case 1: 
        console.log("Mo");
        break;

    case 2: 
        console.log("Tu");
        break;

    case 3: 
        console.log("We");
        break;

    case 4: 
        console.log("Th");
        break;

    case 5: 
        console.log("Fr");
        break;

    case 6: 
        console.log("Sa");
        break;

    case 7: 
        console.log("Sa");
        break;

    default:
        console.log("Invalid Day");
}

let age1 = 20;
let country = "Australia";
if((age1>18) && (country==="India")){
    console.log("Eligible for Vote");
}
else{
    console.log("Not Eligible");
}