// INTRODUCTION TO OOPs *************************

// Adv JS : OOPs, AsyncJS
// Abhi tak jo js padhi hai wo no double wo use hoti par hai average scenario mai, par jo adv js hai wo use to jab ap top tier par programming karenge aur industry mai softwares, website and enterpise solution create karenge.

// OOPs : Object Oritented Programming concepts
// Jab code chota hota hai to fir aap kuch bhi kar sakte ho bina koi guideline follow kiye and jab code bada ho jata hai tab role mai aata hai guidelines.
// Ex : Ek kamra banana hai to hum bina koi guideline jese archotetcure, cement, naksah etc ko bina mind mai rakhe bana sakte hai par agar burj khelifa banana hai to guidelines follow karni padegi.

// Oops : Faila hua code -> Objects, Classes & Functions mai tod diya.
// Oops -> Modular(Code diff hisso mai todna), Scalable, Managable(Koi chiz hatani, fix, change karna), Promis(ye code proper chalega agar fir bhi problem aayi to easy to fix hogi), Re-use ye sab oops provide karta hai.

// OBJECTS *************************
let obj = {
  name: "Aayu",
  age: 21,
};

// Objects kyu banaye?
// Data for User1 Below;
let name = "Aayu2";
let age = 21;
let email = "test@text.com";
let address = "xyz";
// Data for User2 Below;
let name1 = "Aayu2";
let age1 = 21;
let email1 = "test@text.com";
let address1 = "xyz";
// Data for User2 Below;
let name2 = "Aayu2";
let age2 = 21;
let email2 = "test@text.com";
let address2 = "xyz";
// It not optimal or good way to handel multiplwa's user data, For elimination this hectic process we use Objects.
// Ek bande ki details ek sath rakhne ke liye aapke paas hai objects.

// Details for User1 Below;
let user1 = {
  name: "Neon",
  age: 19,
  email: "n@n.com",
  address: "Anywhere",
};
// Details for User2 Below;
let user2 = {
  name: "Neon",
  age: 19,
  email: "n@n.com",
  address: "Anywhere",
};

// CLASSES *************************
// Ye ek blueprint or saancha(Analogy : biscuit factory) hota hai.
// Constructor -> Automatic chalne wala function

// Creating Class(Blueprint)
class BiscuitMaker {
  // class ka Capital letter se start hona jaruri hai
  constructor() {
    // Hamesha constructor banana chaiye
    this.name = "ParleG";
    // Jab bhi constructor chalta hai to iss "this" ki value naya object hota hai
    this.price = 5;
  }
}
let b1 = new BiscuitMaker(); // new keyword se blank object banega aur class run hogi aur this ki value new ko point karegi islie constructor ka sara data iss new blank object mai fill ho jayega, Then wo filled object b1 mai store ho jayega.
console.log(b1);
// new -> Blank Object

// Class kyu banate hai? : Classes banate hai taaki hume har baar ek naya object mil jaye, Classes object ki factory hai, Har bar new word ke sath class run karoge to ek naya object milega.

class AalooChaat {
  constructor() {
    // Default value yaha dete hai. Khaali bhi chor sakte hai
    this.price = 55;
    this.oil = "Sunflower";
    this.masale = ["Chilli", "Corrinder", "Yogurt"];
  }

  // Or bhi function bana sakte hai constructor ke baad
  Pack() {
    console.log("Aaloo Chaat Packed");
  }

  Unpack() {
    console.log("Aaloo Chaat Unpacked");
  }
}
let a1 = new AalooChaat();
console.log(a1);
a1.Pack(); // Usecase : Agar ye function mai error aa gaya aur ye nahi chala to sirf AalooChaat wali class mai hi dekhna padega naa ki pure codebase mai.

// Another Example
class Book {
  constructor(author, price, name, color) {
    // Parameters
    this.author = author;
    this.price = price;
    this.name = name;
    this.color = color;
  }

  // Functions/Features
  pannapalto() {}
  padhlo() {}
  bookmarklagao() {}
}
let k1 = new Book("Ayu", 555, "CSE", "Pink"); // Arguements
console.log(k1);

// Another Example
class User {
  constructor() {
    this.username = "Solo";
    this.age = 21;
    this.email = "xyz@gmail.com";
  }

  // User/Human ke features or functions
  khaanaKhao() {}
  SaansLo() {}
}
// Construcot -> Ek function jo automatic chalta hai jaise hi class se naya instance banaya jata hai.
// Instance -> k1 Book ka instance hai, a1 AalooChaat ka instance hai, etc.

// Prototype
class Human {
  constructor() {
    this.name = "abcd";
    this.age = 21;
  }

  // Features jo saare human mai common hai
  saansLo() {
    console.log("Breathing");
  }
  khaanaKhao() {
    console.log("Eating");
  }
}
let h1 = new Human();
let h2 = new Human();
// Above dono h1, h1 alag alag saansLo aur khaanaKhao banayenge jisse memory waste hogi kyunki wo features saare humans ke liye common hai
class Human1 {
  constructor() {
    this.name = "abcd";
    this.age = 21;
  }
}
Human.prototype.saansLo = function () {
  console.log("Breathing");
};
Human.prototype.khaanaKhao = function () {
  console.log("Eating");
};
// Prototype -> Shared memory among all instances, isse memory utilization acche se hoga & constructor ke bahar and class ke andar jo add karoge wo automatically prototype mai chala jayega.

let h3 = new Human();
let h4 = new Human();
