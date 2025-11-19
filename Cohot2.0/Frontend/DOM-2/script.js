let box = document.querySelector("#box");
let button = document.querySelector("button");

button.addEventListener("click", function(){
  let a = Math.floor(Math.random()*256); // Range : 0 - 255
  let b = Math.floor(Math.random()*256);
  let c = Math.floor(Math.random()*256);
  box.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
})