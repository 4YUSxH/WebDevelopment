let p = document.querySelector("p");
let button = document.querySelector("button");
let flag = 0;

button.addEventListener("click", () => {
    if(flag === 0){
        button.innerHTML = "Remove Friend";
        p.innerHTML = "You are now friends"
        
        flag = 1; 
    }else{
        button.innerHTML = "Add Friend";
        p.innerHTML = "Stranger"

        flag = 0;
    }
});