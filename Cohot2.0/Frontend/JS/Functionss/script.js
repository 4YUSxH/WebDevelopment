// Recursion : Function calling function. ***************************************************
function a(n) {
  if (n === 0) return;
  console.log(n);
  a(n - 1);
}
a(5);

// Function ***************************************************
function doSome(name, age, mail) {
  // Parameters
  console.log(name, age, mail); // 1st way to access arguements
}
doSome("solo", 20, "solo@yahoo.com"); // Arguements

function doSome1() { // We dont have to parso arugements as parameter when we are using arguments keyword.
  console.log(arguments); // 2nd way but ye array sturcure mai output dega.
  console.log(arguments[0], arguments[1], arguments[2]);
}
doSome1("Yumiko", 19, "yumiko@gmail.com");

// Function hositing
b(); // Calling function before declaration
function b() {
  console.log("Function hoisting");
}

// c(); // Cannot call function before declaration when function created by var let cuz it is treated as variable(error: c is not a function).
// var  c = function(){
//   console.log("Function hoisting");
// }

// sayHi(); // can't access lexical declaration 'sayHi' before initialization
// const sayHi = () => {
//   console.log("Hello!");
// };

// Rest parameters ***************************************************
function d(a, b, ...c){ //a, b, [c], a,b ke baad ke rest of all arguements array mai store ho jayenge.
    console.log(a, b, c);
}
d(1,2,3,4,5,6,7)