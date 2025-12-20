function hero(){
    console.log("Hey Aayu Here");
}
console.log(hero()); // Usse function ki khud ki kya value hai abhi undefined hai cause hero() ne kuch return nahi kara\

function abcd(){
    console.log("Solo Here");

    return 10;
}
console.log(abcd()); // 10 print hoga cause 10 return hua hai 

function dfeg(){
    console.log("I am function3");

    return 40;
}
let a = dfeg(); // Funciton call hau hai then 'a' mai returned data(40) store hua hai
console.log(a); 

function pqrs(){
    return "Hello Guys";
}
let ans = pqrs(); // Returned data function wali line mai return hota hai fir usse direct log karlo ya kisi variable mai store karlo 
console.log(ans);
console.log(pqrs()); // Direct log

function any(){ // Function can also export
    console.log("Exported Function");
    return "Successfully Exported"
}
export default any;