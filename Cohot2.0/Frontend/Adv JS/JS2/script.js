// Chota code kaisa bhi likh lo problem nahi aayegi, par industry ka bada code base aese(Spaghetti Code) nahi likh sakte, Industry mai maintainable, modular, scalable, easy to read & manage code likhte hai aur aese code ko likhne ke liye ke practice follow karte hai jisse OOPs kahte hai.
// OOps : Is a way to write good code.  

// Intersting : let obj = {} breakdown hota hai let obj = new Object(), isme Object ek class hai aur usse object banta hai and prototype mai saare features hote hai.

// CALL, APPLY, BIND *************************
// Ek function mai this keyword ki value window hoti hai, agar aap chahate ho ki wo value window naa ho kar koi aur object ho tab ap use kar sakte ho call apply bind ka. 

// Call -> Function chalata hai and this ki value set karta hai.
// Apply -> Wahi karta hai jo Call karta hai and arguements mai paheli value this ki and dusri value array hoti hai.
// Bind -> Wahi karta hai jo Call karta hai and apko naya function return karta hai. 

// Default
let obj = {
  name : "Aayu"
}
function abcd(a, b, c){
  console.log(this, a, b, c)
}
abcd();

// Call  : Syntax -> function_name.call(this ki hone wali value , arguements(If want)) 
// abcd.call(obj); Without arguements
abcd.call(obj, 1, 2, 3); // With arguements

// Apply : Syntax -> function_name.apply(this ki hone wali value, [arguements(If want)]), Set of arguement apply only accept two arguments.
abcd.apply(obj, [4, 5, 6]); 

// Bind : Ye Call jesa hai, par ye function ko directly run nahi karta 
// abcd.apply(obj, 7, 8, 9); Ye retuen karega ek aur function jisse store karna padega variable mai.
let bindFnc = abcd.bind(obj, 7, 8, 9);
bindFnc();
