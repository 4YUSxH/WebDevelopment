console.log("Traditional For Loop Method");
let a = [1,78,4,53,23]
// let new_a = []
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     new_a.push(element**2)
// }
// console.log(new_a); It is hectic process we can eliminate this with using MAP function

console.log("MAP Method/Funtion");
let new_a = a.map((e) => {
    return e**2
}
)
console.log(new_a);

console.log("Filter Method");
const greaterthan7 = (e) => {
    if(e>7){
        return true
    }
    return false
}
console.log(a.filter(greaterthan7));

console.log("Reduce Method");
let arr2 = [1,2,3,4,5]
const Reduce = (a, b) => {
    return a+b
}
console.log(arr2.reduce(Reduce));
//Reduce: 1). 1+2=3 2). 3+3=6 3). 6+4=10 4). 10+5=15

console.log("From Method");
let d = Array.from("Luffy")//It will create an array using Luffy
console.log(d);