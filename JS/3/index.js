console.log("This is conditional tut")

age=17;
if(age>=18){
    console.log("You can watch VU")
}
else{
    console.log("You cannot watch VU")
}

//Arithmatic Operators:
console.log("Arithmatic Operators")

a=2
console.log(3+2)//Addition
console.log(3-2)//Substraction
console.log(3*2)//Multiplication
console.log(3**2)//Exponential
console.log(3/2)//Divide
console.log(3%2)//Modulus
console.log(++a)//Increament
console.log(--a)//Decreament
//* Increament and Decreament operators only work with variables(not with const)

//Assignment Operator:
console.log("Assignment Operators")

console.log(b=4)//b=1
console.log(b+=1)//b=b+1 and it is increament assignment operator
console.log(b-=1)//b=b-1 and it is decreament assignment operator
console.log(b*=1)//b=b*1 and it is multiplication assignment operator
console.log(b/=1)//b=b/1 and it is divide assignment operator
console.log(b**=1)//b=b**1 and it is modulus assignment operator

//Comprision Operators:
console.log("Comprision Operators")

console.log(1==1)
console.log(2!=1)
console.log("1"==1)//This will only check values
console.log("1"===1)//This will chack value and as well as it's type
console.log("1"!==1)//This will chack value and as well as it's type
console.log(2>1)
console.log(1<2)
console.log(1>=2)
console.log(2<=1)
console.log((33>1)?"P" : "F")

//Logical operators:
console.log("Logical Operators")

console.log(!true)//Not
console.log(true&&false)//And
console.log(false||true)//Or

//if ,elseif, else Ladder:
console.log("if ,elseif, else Ladder")

year=4
if(year==1){
    console.log("You can come to freshers party")
}
else if(year==2){
    console.log("You are in second year of college")
}
else if(year==3){
    console.log("You are in third year of college")
}
else if(year==4){
    console.log("You are in fourth year of college")
}
else{
    console.log("You are alumni and you are graduated")
}