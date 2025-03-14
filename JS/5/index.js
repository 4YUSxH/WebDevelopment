//Funtions: It is used when we need to perform any particular task repeateadly and it will also add reusability to the code
console.log("Function")

function hello(name) {
    console.log("Hola " +name+ " you are goated")
    console.log("Hola " +name+ " your fav club is RC")
    console.log("Hola " +name+ " you love to watch anime")
    console.log("Hola " +name+ " you are willing to go USA")
}
hello("Luffy")//Calling function or Function invokation
hello("Anya")//Calling function

//Sum of two numbers using function:
console.log("Sum of two numbers using function")

function sum(a, b) {
    console.log(a+b)
}
sum(2, 2)
sum(5, 5)

//Sum of two numbers using function and returning a value(output):
console.log("Sum of two numbers using function and returning a value(output)")

function sumret(x, y) {
    return x+y// Return will return x+y value 
}
let result=sumret(10, 10)
let result1=sumret(30, 20)
console.log("The addition of two given numbers is ", result, result1)

//Optional Parameter:
console.log("Optional Prameter")

function sumdef(p, q, r=5) {//r=s default value
    return p+q+r// Return will return x+y value 
}
let op=sumdef(10, 10, 80)
let op1=sumdef(30, 20)//Optional Parameter is not neccessarry to fill when calling a fucntion
console.log("The addition of two given numbers is ", op, op1)

//Arrow Function:
console.log("Arrow Function")

const func = (s) => {//By using arrow function we can make a function within the variable 
    console.log("I am an arrow function ", s)
}
func(2)
func(4)
func(5)