let a = document.querySelector("h1");

function type(dets) {
    console.log(dets);
    console.log(dets.key);
    
    if(dets.keyCode === 32){
        a.innerText=" ";
    }
    else{
        a.innerText=dets.key;
    }
}

window.addEventListener("keyup", type);