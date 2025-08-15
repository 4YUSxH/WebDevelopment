let tl = gsap.timeline();

tl.from("h2", {
    y:-30,
    duration: .7,
    delay: .2,
    opacity: 0,
})
tl.from("h4", {
    y:-30,
    duration: .7,
    opacity: 0,
    stagger: .15,
})
tl.from("h1", {
    y:20,
    opacity: 0,
    duration: .5,
    sacle: .2,
})