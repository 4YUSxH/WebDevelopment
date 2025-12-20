// DESTRUCTRING *************************
// Used in refrence data types

// Explnation : Deep Copy
let arr = [10, 20, 30, 40];
var arr2 = [arr[0], arr[1], arr[2], arr[3]];
// var arr2 = [arr[0], arr[1], arr[2], ...arr[n]]; For large amount of data
console.log(arr);
console.log(arr2);
arr2.push(50);
console.log(arr);
console.log(arr2);
// Above way is good way but not the optimal way 

// Optimal Way : Spread Operator(...) \
let arr3 = [10, 20, 30, 40];
let arr4 = [...arr3];
// let [...arr3] =  arr4; We can also write as
console.log(arr3);
console.log(arr4);
arr3.push(50);
console.log(arr3);
console.log(arr4);
// Here ...arr = [arr[0], arr[1], ...a[n]]

// We can also to this Below
let [a, b, c] = arr3;
console.log(a, b, c);
let [a1, b1, ...c1] = arr3; // c1 = Rest ke saare elements
console.log(a1, b1, c1);

// Destructuring For Objects
let obj = {
    user : "Aayu",
    age : 21,
    state : "Florida"
};
// let obj2 = obj; It is a shallow copy 
let obj2 = {...obj}; // It is a deep copy 
// let {...obj} = obj2; Can also write as 
obj2.state = "Kansas";
console.log(obj);
console.log(obj2);

// Direct koi element bhi copy kar sakte hai
let {user, age} = obj;
console.log(user, age);
// let {user, ...obj1} = obj;
// console.log(user, obj1); Before running comment above 2 line cause 'user' variable redeclaration error will occur 

// More on Destructring
let object = {
    user : "Solo",
    age : 23,
    city : "Pune",
    skills : ["JS", "React", "Next"]
}
let {skills} = object; // Object Destructring
console.log(skills); // Direct skills ko bahar nikal liya from object
let [firstSkill, ...restSkills] = skills; // Array Destructring
console.log(firstSkill); // Array mai object jese element bahar nahi nikal sakte
console.log(restSkills); // Array mai object jese element bahar nahi nikal sakte