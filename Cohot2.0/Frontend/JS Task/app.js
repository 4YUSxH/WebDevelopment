console.log("Connected!");

// alert("Hi");

// let nm = prompt("Your Name");
// console.log(nm);

let city = "Bhopal";
console.log(city);

var a = "Ayush";
console.log(a);
var b = "Sheryians";
console.log(b);
const c = "School";
console.log(c);
// Updation
a = "Solo";
console.log(a);
b = "Updated Sheryians";
console.log(b);
// c = "Updated School";
// console.log(c); const cannot be reassigned

// {
//     let num = 14;
// }
// console.log(num); num is not defined, cannot access num outside the braces cause it is declared with let

const companyName = 3.14;
const discount = 50;
const taxes = 18; 

let fav = "Lookism";
console.info(fav);
console.log(fav);
console.warn(fav);

// let name = prompt("Your Name");
// alert(`Welcome: ${name}`);
// console.log(typeof(name)); Always a string, even if a number is entered

// let age = prompt("Enter Age: ");
// console.log(age+5); Prompt hamesh string retuen karta, 5(number) ka age ke sath concatenation ho raha hai

let msg = "I love Sheryians";
console.log(msg.slice(2,8));
// slice(start,end); start: inclusive (shuru ka index), end: exclusive (ye index include nahi hota)
// Index:  0 1 2 3 4 5 6 7 8  9 ...
// Chars:  I   l o v e   S  h  e  r ...
console.log(msg.split("love")); // love ko hatakar ek new array retuen karega jisme saare words elemrnts honge
console.log(msg.replace("Sheryians", "Selviya")); // Sheryians ko remove karke Selviya add kar dega
console.log(msg); // Oringinal string mai kuch bhi change nahi hoga
console.log(msg.includes("Sheryians")); // It will return true if Sheryians exist in string else false

// console.log("Hey") console.log("Huihuihui") This will thorw an error

// 5+10 expression(witout ;) 
// let a = 10; statement(with ;)

let o = 25;
console.log(typeof(o));
let p = "Harsh";
console.log(typeof(p));
let z = true;
console.log(typeof(z));
let x = ["JS", "HTML"];
console.log(typeof(x));
let v = { city: "Bhopal" };
console.log(typeof(v));
let n = null;
console.log(typeof(n));
let m = null+1;
console.log(m, typeof(m)); // null wese object hota hai par 1(number) add karne se number ho jata hai
let k = "Ayush" + 21;
console.log(k, typeof(k)); // Agar string + number karte ho, JS numbers ko string me convert karke join karta hai concatenate karke

console.log(1/0); // Infinity
console.log(0/0); // NaN
console.log(Number("abs")); // NaN
console.log(undefined + 1); // NaN

// Diff b/w null and undefined: variable ko declare kara hai par initialize nahi kara(undefined), variable ko declare kara hai aur initalization ke vakt value null di hai actual data baaad mai enter karenge

let u  = 5; 
let i = u; // u ki value i mai copy ho chuki hai and u and i independent hai
i = 10; 
console.log(u, i); // 5 10 output aayega cause i=10 kiya hai par u and i ki values independent hone ke kaaran u par koi change nahi aayega aur isiko hi premititive datatypes(jisme brackets nahi hote) kahte hai

let obj1 = { name: "Harsh" };
let obj2 = obj1; // Yahaan object copy nahi hua, balki reference (address) copy hua
obj2.name = "Sheryians"; // obj2 ko change karne par obj1 mai bhi change aayega
console.log(obj1.name, obj1.name);
// Chatgpt this: Draw memory boxes on paper to visualize difference.

