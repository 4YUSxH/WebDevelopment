gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360, 
})

gsap.from("#page2 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360, 
//  scrollTrigger: "#page2 #box",this animation will perform when 2nd page visible
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,// element "start & end" and "scroller-start" mai markers aa jayenge "start-end" likhe hue
        start: "top 60%",// jab "scroller-start" aur element ka element ka "start" start same line mai aa jayega to animation start hoga
        end: "top 30%",//start- end ke beech mai animaiton chalega
        scrub: 2 //accept true or false and 1to5(smoothness)
    }
})

gsap.from("#page3 h1", {
    opacity: 0,
    duration: 1,
    x: 500,
    scrollTrigger:{
        trigger: "#page3 h1",
        scroller: "body",
        markers: false,
        start: "top 50%",   
    }
})
gsap.from("#page3 h2", {
    opacity: 0,
    duration: 1,
    x: -500,
    scrollTrigger:{
        trigger: "#page3 h2",
        scroller: "body",
        markers: false,
        start: "top 70%",   
    }
})