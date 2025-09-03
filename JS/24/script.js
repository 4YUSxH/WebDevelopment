// this keyword special keyword hai, kyunki jaise hi baaki saare keyword ki value ya unka nature same rahta hai this ki value ya nature badal jata hai iss baat se ki aap usey kaha use kar rahe ho

//global scope
console.log(this);

//inside a function
function abce() {
    console.log(this);
}
abce();

//in method - ek aesa function jo object ke andar ho
let obj = {
    name: "ayush",
    sayname: function () {
        console.log(this);// yaha this object ko refer karega, we can access name using this.name
    },
}
obj.sayname();
// sayname methoda ka function sirf normal function(es5 function) hoga, agar arrow function use kiya to this uski value loose kar dega

//more in method
let obj1 = {
    company: "Apple",
    exp: 5,
    nextcompany: function () {
        function defg() {
            console.log(this);// again this ki value loose ho jayegi, islie method ke andar function use karne par inside function ko arrow function banana 
        }
    }
}   

//event handler
document.querySelector("h1").addEventListener("click", function () {
    console.log(this.style.color = "red");//this wo banda hoga jispe event listner laga hai i.e 'h1' 
});

//class
class Abcd{
    constructor(){
        console.log("Hey");
        this.a = 12;// this ki value blank object hoti hai
    }
}
let val = new Abcd();

//Manual binding; call, apply, bind

// for call
let obj2 = {
    name1: "Solo",
    age1: 20,
};
let obj0 = {
    name0: "Stunner",
    age0: 19,
};

// for apply
let obj3 = {
    name2: "Sayan",
    age2: 22,
};

// for binf
let obj4 = {
    name3: "Krishna",
    age3: 22,
};

// for call
function fgh() {
    console.log(this.name1);
}
function fgh1(a, b, c) {
    console.log(this.name0, a, b, c);
}

// for apply
function ijk(a, b, c) {
    console.log(this.name2, a, b, c);
}

// for bind
function opq() {
    console.log(this.name3);
}


// call
fgh.call(obj2);//dynamically object ko bheja hai using manual binding, and manual binding hamesha function par lagege(obv function ko hi call kar sakte hai, object ko nahi)
fgh1.call(obj0, 9, 10, 11);// we can also do this 

// apply
ijk.apply(obj3, [1,2,3])//same as call but only accept 2 params this ki hone wali value and array(rarely used)

//bind
let fnc = opq.bind(obj4);// ek aur new function deta jispe this ki valuye obj2 hai
fnc();