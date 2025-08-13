let a = document.querySelector("#main");
 
a.addEventListener("click", function (dets) {
    console.log(dets.target);// li is target because of event bubbling
    dets.target.style.textDecoration = "line-through";    
});