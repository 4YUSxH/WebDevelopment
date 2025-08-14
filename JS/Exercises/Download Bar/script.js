let bar = document.querySelector("#progressFill");
let text = document.querySelector("#progressText"); 
let count = 0;

let tm = setInterval(() => {
    count++;
    if(count === 101){
        clearInterval(tm);
        document.querySelector(".download-title").textContent = "Download Complete";
    }
    else{
        bar.style.width = count + "%";
        text.textContent = count + "%";
    }
    console.log(count); 
}, 1000/100);