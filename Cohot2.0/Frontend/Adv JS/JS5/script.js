// Debouncig :
// Ek particular time ke baad hi reponse dunga, like 4sec baad hi kuch perform karunga
// Use -> Jab ap server kharidte ho to ek request ka charge and resource lagta hai issi ko karne ke liye use karte hai debouncing
// Imp -> Iska code ab koi direct nahi likhta seedha chatgpt se utha kar use karlo
// Peechal response ka time agar colldown nahi to response nahi karega means if 2 sec ka delay hai aur ek baar response fire ho chuka hai aur 1sec mai hi again response ki request aa gayi to wo request fire nahi hogi

// Ye static cosde always aesa hi rahega bas delay change hoga islie gpt se likhwana chaiye
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer); // Baar baar naya time clear kar dega
    timer = setTimeout(fn, delay); // Baar baar naya time set kar dega
  };
  // new input nahi mila 500ms tak to final function chal jayega
}

let input = document.querySelector("#search");
input.addEventListener(
  "input",
  debounce(function () {
    console.log("Chala");
  }, 500)
);

// Throttling : Jab tak action hota rahega to ek particular time ke baad kuch reponse fire karunga aur jese hi action band ho jayega to mai bhi reponse fire karna band kar dunga

function throttle(fn, delay) {
  let last = 0;
  return function () {
    const now = Date.now();
    if (now - last >= delay) { // delay se jyada matlab 1sec ho chuka hai
        last = now;
        fn();
    };
  };
};

window.addEventListener("mousemove", throttle(function(){
    console.log("Mouse Moving");
}, 1000))
// Mouse jab tak move hoga tab tak har 1sec ke baad response fire hoga

// Json Parse & Json Stringify
// Internet par saara data json format mai transfer hota hai 

let obj = { name: "Aayu", color: "Pink" };
let json = JSON.stringify(obj); // Object se Json banate hai obj ko
let backToObj = JSON.parse(json); // Json se Object banate ho
// console.log(json, backToObj);