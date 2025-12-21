let winclick = document.querySelector(".winclick");
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    winclick.style.left = `${e.clientX}px`
  winclick.style.top = `${e.clientY}px`
  });

document.addEventListener("contextmenu", (e) => {
  console.log("Right click detected");
  winclick.style.opacity = 1;
});

document.addEventListener("click", (e) => {
  console.log("Right click detected");
  winclick.style.opacity = 0;
});
