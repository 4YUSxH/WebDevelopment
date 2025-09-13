// Classical Inheritance - include class based inheritance(extends and super), exist in cpp, java, etc, ES6 feature
// Prototypal Inheritance - include constructor function based Inheritance, only exist in JS, ES5 feature

// Classical Inheritance - class -> class
// Prototypal Inheritance - object -> object

// Prototypal Inheritance 
let coffee = {
    color: "dark",
    drink: function (){
        console.log("gut gut gut");
    }
};
let arabiataCoffee = Object.create(coffee); // using "Object" keyword we can access all the props/mehtods of coffee
arabiataCoffee.taste = "bitter";
arabiataCoffee.drink();//accessing drink function of coffee using protypal inheritance

// ek object hai aap chaaho to uski sari props/methods ko inherit kara dete ho dusre object mai
let a = {};
let b = Object.create(a); // Like this   

// dont do this it will craete hard copy of a1 and using prototypal inheritance a1 shares its all the props/methods with b1
let a1 = {};
let b1 = {...a};
 
