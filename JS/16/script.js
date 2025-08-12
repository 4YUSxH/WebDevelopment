let fo = document.querySelector("form");
let inputs = document.querySelector("input");
let main = document.querySelector("#main") 

fo.addEventListener("submit", function (dets) {
    console.log(dets);
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", dets.target[0].value);
    
    let h3 = document.createElement("h3");  
    h3.textContent = dets.target[1].value;

    let h5 = document.createElement("h5");
    h5.textContent = dets.target[2].value;

    let p = document.createElement("p");
    p.textContent = dets.target[3].value;
    
    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    let a = dets.target;
    for (let i = 0; i < a.length-1; i++) {
        if(a[i].type !== "sumbit"){
            a[i].value = "";
        }
    }
});