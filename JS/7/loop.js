let a = [1,5,9,7,]

console.log("For Loop");
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

console.log("Foreach Loop");
a.forEach((value, index, arr) => {
    console.log(value,index);
})

console.log("Forof Loop");
for (const element of a) {
    console.log(element);
}