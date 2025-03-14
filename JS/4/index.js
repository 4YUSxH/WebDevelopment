//For Loop:
console.log("For Loop")
let a=1
for(let i = 0; i<100; i++){//a=0 intilaiztion is occurs only once
    console.log(i+a)
}

//For-in Loop: It is used for priting object's data and key
console.log("For-in Loop")
let obj = {
    name: "Luffy",
    company: "Javascript",
    role: "SDE"
} 
for (const key in obj){
        const element = obj[key];
        console.log(key, element)
}

//For-of Loop: It is used for priting iteration datastructure(arrays, string, etc)
console.log("For-of Loop")
for (const c of "Yuji") {
    console.log(c)
}

//While Loop:
console.log("While Loop")
x=0
while (x<4) {
    console.log(x)
    x++
}

//Do-while Loop:
console.log("Do-while Loop")
y=14
do {//Loop will run once even if condition is false
    console.log(y)
    y++
} while (y<5);