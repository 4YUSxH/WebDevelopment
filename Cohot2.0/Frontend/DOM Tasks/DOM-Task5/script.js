let img = document.querySelector(".photo");
let like = document.querySelector(".like");

img.addEventListener("dblclick", (dets) => {
    like.style.opacity = 1;
    like.style.animation = `pop ${480}ms cubic-bezier(${0.2}, ${0.75}, ${0.25}, ${1})`;
    setTimeout(() => {
        like.style.animation = ``;
        like.style.opacity = 0;
    }, 700);
})