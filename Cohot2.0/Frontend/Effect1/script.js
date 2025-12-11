let body = document.querySelector("body");
body.addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY);
    body.style.setProperty("--x", e.clientX + "px");
    body.style.setProperty("--y", e.clientY + "px");
})