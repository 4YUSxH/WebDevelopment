let form = document.querySelector("form");
let nm = document.querySelector("input");
let opmsg = document.querySelector("#opmsg")

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    let a = regex.test(nm.value);
    if(!a){
        console.log("Invalid");
        opmsg.style.display = "initial";
    }
})