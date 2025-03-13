// let vs var?
// why type of null is object?

var a = 4
var b = 5
var c = "Harry"
var _a = "Luffy"
// var 77a = "Something" NOT ALLOWED

console.log(a+b+c)
console.log(typeof(a), typeof(b), typeof(c))

const ab = 4
// ab = ab+1 NOT ALLOWED cause it is constant

// let is block scoped and var is globally scoped

// This is example of var
var a1 = 2
console.log(a1)
{
    var a1 = 22
    console.log(a1)
}
console.log(a1)

// This is let example and in mordern days let is used cause by using let if we change variable's value within the block then it does not reflect in whole code
let b1 = 1
console.log(b1)
{
    let b1 = 11
    console.log(b1)
}
console.log(b1)

// Premitive Datatyes: Nill, Number, String, Symbol, Undefined, Boolean, Bignit
let x = "Gojo"
let y = 5
let z = 5.5
let r = true
let m = undefined
let p = null
console.log(x, y, z, r, m, p)
console.log(typeof x, typeof y, typeof z, typeof r, typeof m, typeof p)
// Null is object because https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined

//Object: Key: value
let m1 = {
    name: "Yuji",// We can skip double qoutes when there is no space in key
    "fav anime": "JJk",//This key needs double quotes because it contains a space
}
console.log(m1)
m1.Ep = "4"
console.log(m1)
