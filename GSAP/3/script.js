gsap.to("#page2 h1", {
    Transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",//Always trigeer parent when using "pin" property
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",//end screen ke upar hai(page ke baahar)
        scrub: 2,
        pin: true,//element pin ho jayega(ek position par ruk jayega) 
    }
})