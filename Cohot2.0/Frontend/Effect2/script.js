const headers = document.querySelectorAll("h1");
const h3 = document.querySelector("h3");
const firstH1 = headers[0];
const secondH1 = headers[1];

const text = firstH1.innerHTML;
const text2 = secondH1.innerHTML;
const text3 = h3.innerHTML;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;
let intervalId = null;

// 1st : split() -> Break kiya each letter 
// 2nd : map() -> Performing operation(choosing a random character) on each letter 
// 3rd : join() -> Joining each letter  

// For Second Heading
function randomText(){
    const str = text.split("").map((char, index) => {
            if(index < iteration){
                return char;
            }
            return characters.split("")[Math.floor(Math.random()*52)]
        }).join("");

        firstH1.innerHTML=str;
        iteration += 0.5;
        
        // Stop the interval when done
    if (iteration >= text.length) {
        clearInterval(intervalId);
        intervalId = null;
        firstH1.innerHTML = text;
    }
};

// Start animation on hover
firstH1.addEventListener("mouseenter", () => {
    // reset everything
    if (!intervalId) {
        iteration = 0;
        intervalId = setInterval(randomText, 20);
    }
});

// For Second Heading
function randomText2(){
    const str = text2.split("").map((char, index) => {
            if(index < iteration){
                return char;
            }
            return characters.split("")[Math.floor(Math.random()*52)]
        }).join("");

        secondH1.innerHTML=str;
        iteration += 0.5;
        
        // Stop the interval when done
    if (iteration >= text2.length) {
        clearInterval(intervalId);
        intervalId = null;
        secondH1.innerHTML = text2;
    }
};

// Start animation on hover
secondH1.addEventListener("mouseenter", () => {
    // reset everything
    if (!intervalId) {
        iteration = 0;
        intervalId = setInterval(randomText2, 20);
    }
});

// For Third Heading
function randomText3(){
    const str = text3.split("").map((char, index) => {
            if(index < iteration){
                return char;
            }
            return characters.split("")[Math.floor(Math.random()*52)]
        }).join("");

        h3.innerHTML=str;
        iteration += 0.5;
        
        // Stop the interval when done
    if (iteration >= text3.length) {
        clearInterval(intervalId);
        intervalId = null;
        h3.innerHTML = text3;
    }
};

// Start animation on hover
h3.addEventListener("mouseenter", () => {
    // reset everything
    if (!intervalId) {
        iteration = 0;
        intervalId = setInterval(randomText3, 20);
    }
});
