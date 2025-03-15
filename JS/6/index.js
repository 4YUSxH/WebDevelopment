//String: 
console.log("String Tut")

let a = "Luffy"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
//console.log(a[5]) Undefined
console.log(a.length)//Legnth of string

//Template Litrals:
console.log("Template Titrals")
let _name = "Luffy" 
let city = "Japan"
console.log("His name is " + _name + " and he live in " + city)
console.log(`His name is ${_name} and he live in ${city}`)// It is String Interpolation
console.log(`I can use double qoutes "" inside the string using template litrals`)

//Escape Sequence Character:
console.log("Escape Sequence Character")

//console.log("Adam D"Angelo") It will thrown a error
console.log("Adam D\"Angelo")//You can use this or template literal
console.log("Adam D \n Angelo")//New line
console.log("Adam D \t Angelo")//Tab
console.log("Adam D \r Angelo")//Carriage Return

//String Properties:
console.log("String Properties")

let b = "Denji"
console.log(b.toLowerCase())// It is function this is why parenthesis id needed
console.log(b.toUpperCase())// It is function this is why parenthesis id needed
console.log(b.length)//It is not a function 
console.log(b.slice(0,4))
console.log(b.slice(1))//It will return 1 to last characters
console.log(b.replace("Den", "Man"))

let c = " My name is My"
console.log(c.replace("My", "First occurrence"))
d = b.concat(c, " YES", " NO")//We can even use + operator also
console.log(d)
//Strings are immutable b still "Denji" it will not change