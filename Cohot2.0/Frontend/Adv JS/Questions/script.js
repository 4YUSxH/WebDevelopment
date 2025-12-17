// SECTION 1: Objects and OOPS Thinking (Foundation) *************************
// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
let user = {
  name: "Aayu",
  email: "aayu@gmail.com",
  login: function () {
    console.log("User logged in");
  },
};
user.login();

// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// Below code without class
let user1 = {
  name: "",
  email: "",
};
let user2 = {
  name: "",
  email: "",
};
// And so on

// Below code with class
class Users {
  constructor(name, email) {
    this.username = name;
    this.email = email;
  }

  login() {
    console.log("User logged in");
  }
}
let u1 = new Users("Lolo", "kjsadhg");
let u2 = new Users("HuiHui", "dgykl");
let u3 = new Users("ChuChu", "kujsdah");
let u4 = new Users("Shush", "dfashl");
let u5 = new Users("DuDu", "skafuh");
console.log(u1, u2, u3, u4, u5);

// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.
let discount = 50;
let products = {
  name: "",
  price: 500,
  fnc: function () {
    // return products.price - discount;
    return this.price - discount;
    // Dono baat same hi hai par this ka use karna jyadaa accha hai
  },
};
let result = products.fnc();
console.log(result);

// SECTION 2: Classes and Objects *************************

// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
    this.drive = function () {
      console.log(this.brand, this.speed);
    };
  }
}
let c1 = new Car("BMW", "300KM/H");
c1.drive();

// 	5.	Create two different car objects from the same class and verify that their data is different.
let c2 = new Car("Mercedes", "350KM/H");
c2.drive();
let c3 = new Car("Tata", "250KM/H");
c3.drive();

// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
// Ans : Bahut saare objects banane padte and jyada users hone par difficult ho jata

// SECTION 3: Constructor and this keyword *************************
// The goal is to clearly understand how this works and when it changes.

// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
class Student {
  constructor(stuname, roll) {
    this.name = stuname;
    this.roll = roll;
    this.fnc = function () {
      console.log(stuname, roll);
    };
  }
}
let s1 = new Student("Solo", "008");
s1.fnc();

// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
// Ans : this class se bane new object ko point karta hai aur this ko hatane par wo blank object point nahi ho payega jisse values set nahi ho payegi aur undefined aayega uss class se bane hue object ko chalane ke baad.

// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function
// Inside both, print this and observe the difference.
let obj1 = {
  fnc1: function () {
    console.log(this);
  },
  fnc2: () => {
    console.log(this);
  },
};
obj1.fnc1();
obj1.fnc2();

// SECTION 4: Constructor Functions and Prototypes *************************
// The purpose here is to understand how prototypes help share behavior efficiently.

// 	10.	Create a User constructor function (do not use class syntax).
// Ans : Bina class ke bhi constructor function banta hai, es6 update ke pahele constructor function neeche example ke way mai banta tha, par ab class ke sath banta hai jo ek better way hai
function User() {
  this.name = "MoMo";
}
let un1 = new User();
console.log(un1);

// 	11.	Add a login method in two ways:
// First, inside the constructor
class User1 {
  constructor() {
    this.name = "Moon";
    this.login = function () {
      console.log("Logged In via Constructor");
    };
  }
}
let us1 = new User1();
console.log(us1);
// Then, move the method to the prototype
class User2 {
  constructor() {
    this.name = "Moonie";
  }
}
User2.prototype.loginfnc = function () {
  console.log("Logged In via Prototype");
};
let us2 = new User2();
console.log(us2);

// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.
// 1st With Prototype
class User3 {
  constructor(name) {
    this.name = name;
  }
}
User3.prototype.loginfnc = function () {
  console.log("Logged In via Prototype");
};
let us3 = new User3("User1");
let us4 = new User3("User2");
console.log(us3.loginfnc === us4.loginfnc);
// 2nd With Constructor
class User4 {
  constructor(name) {
    this.name = name;
    this.loginfnc = function () {
      console.log("Logged In via Prototype");
    };
  }
}

let us5 = new User4("User1");
let us6 = new User4("User2");
console.log(us5.loginfnc === us6.loginfnc);
// 1st True -> Jab function Prototype par hota hai, toh saare objects same function ko share karte hain.
// 2nd False -> Dono u5, u6 la function alag alag hai.

// SECTION 5: call, apply, bind *************************
// The goal is to understand how this can be manually controlled.

// 	13.	Create a function that prints this.name.
function abdc(){
    console.log(this.name); // Ye print nahi kar paayega cause this window ko point karega
}
// abdc(); // Kuch print nahi hoga, error nahi aayega
let obj2 = {
    name : "Muimi",
} 
abdc.call(obj2); // Call se this ki value obj2 ko point karwa di

// 	14.	Create an object that contains a name property.
// Use call to run the function using the object
abdc.call(obj2); 
// Use apply to run the function using the object
abdc.apply(obj2);
// Use bind to create a new function and then call it
let fnc = abdc.bind(obj2);
fnc();
// Side mai blue color se dikhega iteration count

// 	15.	Borrow a method from one object and run it for another object using call.
let objone = {
  name: "Object One"
};
let objtwo = {
  name: "Object Two",
  showName: function () {
    console.log(this.name);
  }
};

// Borrowing objtwo ka method for objone
objtwo.showName.call(objone);

// Explnation : showName method objtwo ka hai
//              call(objone) bolta hai:
//                  “Is function ko run karo, but this ko objone bana do”

// Normally → this.name = "Object Two"
// With call(objone) → this.name = "Object One"

// {Watch JS 3 on YT for async js}