let button = document.querySelector("#download-btn");
let fill = document.querySelector(".download-bar-fill");
let percent = document.querySelector(".download-percent");
let time = document.querySelector("#download-eta");

let fillcount = 0;

button.addEventListener("click", () => {
  let inter = setInterval(() => {
    fillcount++;
    console.log(fillcount);
    button.disabled = true;
    button.innerHTML = "Downloading..."
    fill.style.width = `${fillcount}%`;
    percent.innerHTML = `${fillcount}%`;
    if(fillcount >= 100) clearInterval(inter);
  }, 5);
});