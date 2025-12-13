let a = new Audio("audio/28.mp3");
let b = new Audio("audio/29.mp3");
let c = new Audio("audio/30.mp3");
let d = new Audio("audio/31.mp3");
let e = new Audio("audio/32.mp3");
let f = new Audio("audio/33.mp3");
let g = new Audio("audio/34.mp3");
let h = new Audio("audio/35.mp3");
let i = new Audio("audio/36.mp3");
let j = new Audio("audio/37.mp3");
let k = new Audio("audio/38.mp3");
let l = new Audio("audio/39.mp3");

let key = document.body.addEventListener("keydown", function (dets) {
  if (dets.code === "KeyA") {
    a.currentTime = 0;
    a.play();
    console.log("Pressed A");
  }
  if (dets.code === "KeyS") {
    b.currentTime = 0;
    b.play();
    console.log("Pressed S");
  }
  if (dets.code === "KeyD") {
    c.currentTime = 0;
    c.play();
    console.log("Pressed D");
  }
  if (dets.code === "KeyF") {
    d.currentTime = 0;
    d.play();
    console.log("Pressed F");
  }
  if (dets.code === "KeyG") {
    e.currentTime = 0;
    e.play();
    console.log("Pressed G");
  }
  if (dets.code === "KeyH") {
    f.currentTime = 0;
    f.play();
    console.log("Pressed H");
  }
  if (dets.code === "KeyJ") {
    g.currentTime = 0;
    g.play();
    console.log("Pressed J");
  }
  if (dets.code === "KeyW") {
    h.currentTime = 0;
    h.play();
    console.log("Pressed W");
  }
  if (dets.code === "KeyE") {
    i.currentTime = 0;
    i.play();
    console.log("Pressed E");
  }
  if (dets.code === "KeyT") {
    j.currentTime = 0;
    j.play();
    console.log("Pressed T");
  }
  if (dets.code === "KeyY") {
    k.currentTime = 0;
    k.play();
    console.log("Pressed Y");
  }
  if (dets.code === "KeyU") {
    l.currentTime = 0;
    l.play();
    console.log("Pressed U");
  }
});

let whiteKeyA = document.querySelector('.white-key[data-key="a"]');
let blackKeyW = document.querySelector('.black-key[data-key="w"]');
let whiteKeyS = document.querySelector('.white-key[data-key="s"]');
let blackKeyE = document.querySelector('.black-key[data-key="e"]');
let whiteKeyD = document.querySelector('.white-key[data-key="d"]');
let whiteKeyF = document.querySelector('.white-key[data-key="f"]');
let blackKeyT = document.querySelector('.black-key[data-key="t"]');
let whiteKeyG = document.querySelector('.white-key[data-key="g"]');
let blackKeyY = document.querySelector('.black-key[data-key="y"]');
let whiteKeyH = document.querySelector('.white-key[data-key="h"]');
let whiteKeyJ = document.querySelector('.white-key[data-key="j"]');
let blackKeyU = document.querySelector('.black-key[data-key="u"]');

whiteKeyA.addEventListener("click", function () {
  a.currentTime = 0;
  a.play();
  console.log("Clicked A");
});
blackKeyW.addEventListener("click", function () {
  event.stopPropagation();
  b.currentTime = 0;
  b.play();
  console.log("Clicked W");
});
whiteKeyS.addEventListener("click", function () {
  c.currentTime = 0;
  c.play();
  console.log("Clicked S");
});
blackKeyE.addEventListener("click", function () {
  d.currentTime = 0;
  d.play();
  console.log("Clicked E");
});
whiteKeyD.addEventListener("click", function () {
  e.currentTime = 0;
  e.play();
  console.log("Clicked D");
});
whiteKeyF.addEventListener("click", function () {
  f.currentTime = 0;
  f.play();
  console.log("Clicked F");
});
blackKeyT.addEventListener("click", function () {
  g.currentTime = 0;
  g.play();
  console.log("Clicked T");
});
whiteKeyG.addEventListener("click", function () {
  h.currentTime = 0;
  h.play();
  console.log("Clicked G");
});
blackKeyY.addEventListener("click", function () {
  i.currentTime = 0;
  i.play();
  console.log("Clicked Y");
});
whiteKeyH.addEventListener("click", function () {
  j.currentTime = 0;
  j.play();
  console.log("Clicked H");
});
whiteKeyJ.addEventListener("click", function () {
  k.currentTime = 0;
  k.play();
  console.log("Clicked J");
});
blackKeyU.addEventListener("click", function () {
  l.currentTime = 0;
  l.play();
  console.log("Clicked U");
});
