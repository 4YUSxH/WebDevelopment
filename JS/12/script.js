let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", () => {//dblclick: double click
    alert("You've double clicked on button")//it will only work when mouse is on button
})

button.addEventListener("contextmenu", () => {//contextmenu: right click
    alert("Dont inspect our webpage")//it will only work when mouse is on button
})

document.addEventListener("keydown", (e) => {//keydown: register all the keys strokes and e is event object
    console.log(e)
})

//We can also remove event listener