let a = document.querySelector("#text");
let b = document.querySelector("span");

a.addEventListener("input", function (dets) {
    console.log(a.value.length);
    b.textContent = a.value.length;
})
