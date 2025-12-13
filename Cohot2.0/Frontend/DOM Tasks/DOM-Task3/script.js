let btn = document.querySelector("button");
let div = document.querySelector("div");
let qoute = [
  "Stay curious, not comfortable.",
  "Small steps still move you forward.",
  "Your future self is watching. Don’t disappoint.",
  "Vibes change when you do.",
  "Growth feels awkward before it feels right.",
  "Discipline beats motivation every time.",
  "Peace hits different when you earn it.",
  "Protect your energy like it’s premium.",
  "You’re one decision away from a new life.",
  "Dreams work if you do.",
  "Let go of what drains you.",
  "Trust the process even when it’s slow.",
  "Your potential is louder than your fear.",
  "Nothing changes if nothing changes.",
  "Be the plot twist in your own story.",
];
let colors = [
  "#ffcc66",
  "#e6b566",
  "#d9a25f",
  "#f2d9a0",
  "#56cfe1",
  "#4bb4c9",
  "#89d2dc",
  "#a3e2f0",
  "#f1f1f1",
  "#cfcfcf",
  "#bdbdbd"
];

btn.addEventListener("click", function () {
  h1 = document.createElement("h1");
  
  let posX = Math.random() * 90;
  let posY = Math.random() * 90;
  let index = Math.floor(Math.random()*qoute.length);
  let size = Math.floor(Math.random() * 41) + 20;
  let color = colors[Math.floor(Math.random() * colors.length)];

  h1.innerHTML = qoute[index];

  h1.style.left = `${posX}%`;
  h1.style.top = `${posY}%`;
  h1.style.fontSize = `${size}px`;
  h1.style.color = color;

  div.appendChild(h1);
});
