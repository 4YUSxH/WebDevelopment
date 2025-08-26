// Scope

a = 8; // Global Scope

function abcdc(){ //Functional Scope
    var b = 9; 
}

{
    let c = 10; // Block Scope
}


// Closure

function abce() {
    let d = 11;
    return function(){
        console.log(d);
    }
}

let fnc = abcdc();// Storing abcde()'s return funciton
fnc();// Running returned funciton

// Lexical Scoping 

function efgh() {
    let e = 12;
    function ijk() {
        console.log(e);
    }
}
// 'e' lexically scoped hai efgh se, 28 to 33 kahi bhi access ho sakta

// Dynamic Scoping


let f = 13;
function lmn() {
    console.log(f);
}

function opq() {
    let f = 14;
    lmn();
}
opq();
// Js mai ye exist nahi karta, js lexically scoped hai  
// In js: opa chala then lmn chala, lexically scopee hone ke karan f=13 print hoga
// In other langauage: dynamically scoped hone ke karan f=14 print hoga