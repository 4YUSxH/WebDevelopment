// 1. Write a function `sayHello()` that prints `"HelloJavaScript".
function sayHello(){
  console.log("Hello Javescript");
}
sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.
let add = function(a, b){
  return a+b;
}
let addition = add(5, 5);
console.log(addition);

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.
let print = (name = "Guest") => {
  console.log(`Hi ${name}`);
}
print();

// 4. Use rest parameters to make a function that adds unlimited numbers.
function unlimitedAdd(...a){
  let ans = a.reduce(function(accumlator, value){
    return accumlator + value; 
  }, 0);
  console.log(ans);
}
unlimitedAdd(10, 50, 60, 80);

// 5. Create an IIFE that prints `"I run instantly!"`
(function(){
  console.log("I run instantly!");
})();

// 6. Make a nested function where the inner one prints a variable from the outer one.
function outer(){
  let a = 10;
  function inner(){
    console.log(a);
  }
  inner();
}
outer();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
let arr = ["Mango", "Apple", "DragonFruit", "Orange", "Banana"];
console.log(arr);
arr.push("Chiku");
console.log(arr);
arr.shift();
console.log(arr);

// 8. Use a `for` loop to print all elements of an array.
for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
let person = {
  name : "Aayu",
  age : 21,
  city : "LA"
}
for(const key in person){
  console.log(key, person[key]);
};

// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
function timesUp(){
  console.log("Time’s Up!");
}
setTimeout(timesUp, 2000);

