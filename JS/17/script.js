let a = document.querySelector("#abcd");

window.addEventListener("mousemove", function (dets) {
    console.log(dets.clientX, dets.clientY);
    a.style.top = dets.clientY + "px";
    a.style.left = dets.clientX + "px";
})
