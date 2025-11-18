// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
function runTwice(fn) {
  fn();
  fn();
}
runTwice(function () {
  console.log("Hey");
});

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
function pure(a) {
  console.log(a + 4);
}
pure(10);
pure(10);

let b = 5;
function impure(c) {
  b++;
}
impure();
console.log(b);
impure();
console.log(b);

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
function func({ name, age, city }) {
  console.log(name, age, city);
}
func({
  name: "Aayu",
  age: 21,
  city: "LA",
});

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).
let a = {
  fav: "Looksim",
  fnc: function () {
    console.log(this);
  },
  arrowfnc: () => {
    console.log(this);
  },
};
a.fnc(); // Normal func mai this ki value object hi hogi
a.arrowfnc(); // Arrow func mai this ki value parent(a) se lega

// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.
let arr = [2, 4, 6, 8, 10];
let newarr = arr.map(function (val) {
  return val ** 2;
});
console.log(newarr);

// 6. Use `filter()` to get only even numbers from an array.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let newarr1 = arr1.filter(function(val){
  if(val % 2 === 0) return val;
})
console.log(newarr1);

// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
let arr2 = [1000, 2000, 3000];
let ans = arr2.reduce(function(acc, val){
  return acc+val;
})
console.log(ans);

// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars)
let arr3 = ["Ayu", "Luv", "Selviya", "Shreya", "Gargi"];
let someLonger = arr3.some(checkLonger); 
let everyLonger = arr3.every(checkLonger);
function checkLonger(val) {
  return val.length > 3;
}
console.log("some:", someLonger);
console.log("every:", everyLonger);

// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
let user1 = {
  name : "Aayu",
  age : 21,
  email : "temp@gmail.com"
}
user1.age = 18; // Age 18 ho jayegi 21 se

Object.freeze(user1);
user1.age = 21; // Ab age change nahi ho payegi
user1.social = "Instagram"; // Freeze mai koi bhi value jod nhi sakte aur change bhi nahi kar sakte 

Object.seal(user1);
user1.age = 21; // Seal mai value badal nahi sakte
user1.social = "Instagram"; // par new value jod sakte hai


// 10. Create a nested object (`user → address → city`) and access the city name inside it.
const user = {
  address: {
    city: "Neo Tokyo"
  }
};
console.log(user.address.city);
let {city} = user.address;
console.log(city);