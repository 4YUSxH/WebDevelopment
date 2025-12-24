let cursor = document.querySelector(".cursor");

document.querySelector("body").addEventListener("mousemove", (evt) => {
  cursor.style.left = evt.x+"px";
  cursor.style.top = evt.y+"px";
});
