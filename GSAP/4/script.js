let initalPath = `M 10 100 Q 250 100 1355 100`;
let finalPath = `M 10 100 Q 750 100 1355 100`;

let string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 1355 100`;

    gsap.to("svg path", {
        attr: {d: path},
        duration: .2,
        ease: "power3.out" //https://gsap.com/docs/v3/Eases/
    })
})

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 1,
        ease: "elastic.out(1,0.2)"
    })
})
