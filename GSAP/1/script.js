gsap.to(".box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    backgroundColor: "pink",
    borderRadius: "50%",
    scale: 0.5,
    rotation: 360,
})

gsap.from(".box2", {
    x: 1000,
    duration: 2,
    delay: 1,
})

gsap.from("h1", {
    opacity: 0,
    duration: 1,
    y: 30,
    delay: 1,
    stagger: 0.5,//Ek ke baad dusra h1 chalega and har element 0.5sec lega, -1 se ulta chalega last element pahele animate hoga
})

gsap.to(".box3", {
    x: 1000,
    duration: 1,
    delay: 1,
    borderRadius: "50%",
    scale: 1,
    rotation: 360,
    repeat: 2,//reapeat karega animation 1(defualt) + 2 baar hence 3 baar, -1 for infinte times run karne ke liye
    yoyo: true, //reverse hokar chalega 
})

let tl = gsap.timeline();//creating timeline help karta hai animation ko ek ke baad ek chalane mai, delay ko maintain karta hai
tl.to(".box4", {
    x:1000,
    duration: 1,
    delay: 1
})
tl.to(".box5", {
    x:1000,
    duration: 1,
    // delay: 1 ye likhne ke jarurat nahi hai
})
tl.to(".box6", {
    x:1000,
    duration: 1,
})
// ek box ka animaiton complete hoga tab dursa chalega

