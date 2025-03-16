console.log("Code is running")

let boxex = document.getElementsByClassName("box")//Give all the elements with class name box
console.log(boxex);
boxex[2].style.background = "red"//Targeting and adding style on box3

document.getElementById("new").style.backgroundColor =  "green"//Targeting element using id  

document.querySelector(".box").style.backgroundColor = "yellow"//Targeting element using queryzSelector but it will only applied on first box(cause firstbox class box is matched)

let a = document.querySelectorAll(".box")//It will retuen list of elements(node list) hence we cant applied style directly for applying style we nneed to use LOOP
console.log(a);//Printing 11 line return elements
a.forEach(e => {//Making loop we can also use other loops also
    console.log(e);//Printing elements one by one using loop
    e.style.background = "pink"//Adding style to individual elements one by one using loop
});

console.log(document.getElementsByTagName("div"));//Retunn all the divs 

// Explore: .matches, .conatins, .closest
//We can also target them byy using nodes but it will be hectic and for eliminating this hectic part we use getElementsByClassName and getElementById