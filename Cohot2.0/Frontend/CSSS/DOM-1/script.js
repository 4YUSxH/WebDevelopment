h1 = document.querySelector("h1");
let incr = document.querySelector("#incr");
let decr = document.querySelector("#decr");
let a = 0;

incr.addEventListener("click", function () {
  a++;
  h1.innerHTML = a;
});
decr.addEventListener("click", function () {
  a--;
  h1.innerHTML = a;
});
