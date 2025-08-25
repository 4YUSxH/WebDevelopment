gsap.registerPlugin(ScrollTrigger);
let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");


para1.style.color = "white",
    para2.style.color = "white",

    gsap.from("#para1", {
        color: "gray",
        delat: 0,
        scrollTrigger: {
            duration: 0,
            trigger: ".intro",
            scroller: "body",
            markers: false,
            start: "top 15%",
            end: "top 15%",
            scrub: 0,
            toggleActions: "play none none none", // play instantly on enter
        }
    })

gsap.from("#para2", {
    color: "gray",
    scrollTrigger: {
        duration: 0,
        trigger: ".intro",
        scroller: "body",
        markers: false,
        start: "top -20%",
        end: "top -20%",
        scrub: 0,
        toggleActions: "play none none none", // play instantly on enter
    }
})

para1.style.color = "gray",
    para2.style.color = "gray",

    gsap.from("#para1", {
        color: "white",
        scrollTrigger: {
            duration: 0,
            trigger: "#para1",
            scroller: "body",
            markers: false,
            start: "top 25%",
            end: "top 25%",
            scrub: 0,
            toggleActions: "play none none none", // play instantly on enter
        }
    })

gsap.from("#para2", {
    color: "white",
    scrollTrigger: {
        duration: 0,
        trigger: "#para1",
        scroller: "body",
        markers: false,
        start: "top -30%",
        end: "top -30%",
        scrub: 0,
        toggleActions: "play none none none", // play instantly on enter
    }
})

// My skill 
let tl = gsap.timeline();
tl.from(".skills p", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".skills p",
        scroller: "body",
        // markers: true,
        start: 'top 80%',
        end: 'top 70%',
        scrub: 0,
        stagger: 1,
    }
})

tl.from(".skills h1", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".skills h1",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 0,
        stagger: 1
    }
})

tl.from(".skills h2", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".skills h2",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 55%',
        scrub: 0,
        stagger: 1
    }
})

tl.from("#first", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: "#first",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 0,
        stagger: 1
    }
})

tl.from("#tools1", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: "#tools1",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 0,
        stagger: 1
    }
})

tl.from("#sec", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: "#sec",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 0,
        stagger: 1
    }
})

tl.from("#tools2", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: "#tools2",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 0,
        stagger: 1
    }
})


tl.from("#third", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: "#third",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 0,
        stagger: 1
    }
})

tl.from("#tools3", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: "#tools3",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 0,
        stagger: 1
    }
})


// Strong obession 
gsap.from(".para4 h1", {
    opacity: 0,
    scrollTrigger: {
        duration: 0,
        trigger: ".para4",
        scroller: "body",
        // markers: true,
        start: 'top 60%',
        end: 'top  0%',
        scrub: 0,
    }
})
gsap.to(".para4 h1 span", {
    opacity: 1,
    backgroundPosition: "100% 100%",
    scrollTrigger: {
        trigger: ".para4 h1 span",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 15%',
        scrub: true,
    }
})

// Projects
let tl1 = gsap.timeline();
tl1.from(".projects p", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".projects p",
        scroller: "body",
        // markers: true,
        start: 'top 80%',
        end: 'top 70%',
        scrub: 0,
        stagger: 1,
    }
})

tl1.from(".projects h1", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".projects h1",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 0,
        stagger: 1
    }
})

tl1.from(".projects h2", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".projects h2",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 55%',
        scrub: 0,
        stagger: 1
    }
})

gsap.from(".showcon", {
    opacity: 0,
    scrollTrigger: {
        duration: 0,
        trigger: ".cards",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 40%',
        scrub: 0,
    }
})
gsap.to(".cards", {
    xPercent: -210,
    scrollTrigger: {
        trigger: ".six",
        scroller: "body",
        start: "top top",
        end: "+=3000", // or adjust this based on how far you want to scroll
        pin: true,
        scrub: 1,
    }
});

// Certifiactes
let tl3 = gsap.timeline();
tl1.from(".cert p", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".cert p",
        scroller: "body",
        // markers: true,
        start: 'top 80%',
        end: 'top 70%',
        scrub: 0,
        stagger: 1,
    }
})

tl3.from(".cert h1", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".cert h1",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 0,
        stagger: 1
    }
})

tl3.from(".cert h2", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".cert h2",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 55%',
        scrub: 0,
        stagger: 1
    }
})

// Collaboration
// Top marquee: move slightly RIGHT
gsap.to(".para5 p.marquee:first-of-type", {
    xPercent: 20,
    //   ease: "poweir.out",
    scrollTrigger: {
        trigger: ".para5",
        scroller: "body",
        start: "top 100%",
        end: "top -100%",
        scrub: 3,
        // markers: true
    }
});

// Bottom marquee: move slightly LEFT
gsap.to("#marquee1", {
    xPercent: -20,
    //   ease: "poweir.out",
    scrollTrigger: {
        trigger: ".para5",
        scroller: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: 3,
        // markers: true
    }
});

// Gradient span animation (already good)
gsap.to(".para5 h1 span", {
    opacity: 1,
    backgroundPosition: "100% 100%",
    scrollTrigger: {
        trigger: ".para5 h1 span",
        scroller: "body",
        start: 'top 70%',
        end: 'top 15%',
        scrub: true,
        // markers: true
    }
});
// Opactiy animation
gsap.to(".para5 h1 ", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".para5 h1 ",
        scroller: "body",
        start: 'top 85%',
        end: 'top 50%',
        scrub: true,
        // markers: true
    }
});

// Contact
let tl4 = gsap.timeline();
tl4.from(".ctn p", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".ctn p",
        scroller: "body",
        // markers: true,
        start: 'top 80%',
        end: 'top 70%',
        scrub: 0,
        stagger: 1,
    }
})

tl4.from(".ctn h1", {
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".ctn h1",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 0,
        stagger: 1
    }
})

tl4.from(".ctn h2", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".ctn h2",
        scroller: "body",
        // markers: true,
        start: 'top 70%',
        end: 'top 55%',
        scrub: 0,
        stagger: 1
    }
})

// Social footer
let tl5 = gsap.timeline();
tl5.from(".container", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        duration: 1,
        trigger: ".container",
        scroller: "body",
        // markers: true,
        start: 'top 50%',
        end: 'top 20%',
        scrub: 3,
        stagger: 1
    }
})

// 0 to 1 opacity 
let tl7 = gsap.timeline();

tl7.from(".name h5", {
    opacity: 0,
    duration: 0.25,
    delay: 0.05
})
    .from(".mainname span", {
        opacity: 0,
        y: 15,
        duration: 0.25,
        stagger: 0.1
    })
    .from("#typewriter-text", {
        opacity: 0,
        duration: 0.25
    })
    .from(".social i", {
        opacity: 0,
        scale: 0.7,
        duration: 0.2,
        stagger: 0.08,
        ease: "back.out(1.7)"
    })
    .from(".btn", {
        opacity: 0,
        y: 10,
        duration: 0.25
    })
    .from(["#firstimg", "#secimg", "#thirdimg"], {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.1
    });


// Certificate scroll sec para show when scroll
document.querySelector(".card-bg img").src = "Untitled.jpg";

gsap.fromTo(".second-paragraph",
    {
        opacity: 0.5,
        y: 30,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".second-paragraph",
            scroller: ".card-wrapper",
            start: "top 30%",   // 🔥 fade starts earlier
            end: "top 15%",     // 🔥 more scroll distance to finish
            scrub: true,
            //   markers: true
        }
    }
);
// image reveal
gsap.fromTo(".card-bg img",
    { opacity: 0.5, scale: 1.05 },
    {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".second-paragraph",
            scroller: ".card-wrapper",
            start: "top 30%",
            end: "top 25%",
            scrub: true,
            onEnter: () => {
                document.querySelector(".card-bg img").src = "Refrence.jpg"; // 👈 switch forward
            },
            onLeaveBack: () => {
                document.querySelector(".card-bg img").src = "Untitled.jpg"; // 👈 switch back
            }
        }
    }
);

gsap.from(".cont", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".cont",
        scroller: "body",
        start: "top 55%",
        end: "top 40%",
        scrub: true,
        // markers: true
    }
})

// Front page typwriter effect
const phrases = [
    "I am a frontend developer",
    "I build engaging interfaces",
    "I love clean code",
    "I enjoy creative design",
    "I solve problems with code"
];

const el = document.getElementById("typewriter-text");
let phraseIndex = 0;

function typeWriter(text, onComplete) {
    let tl = gsap.timeline({ onComplete });
    for (let i = 0; i <= text.length; i++) {
        tl.to(el, {
            duration: 0.05,
            textContent: text.slice(0, i),
            ease: "none"
        });
    }
}

function deleteWriter(text, onComplete) {
    let tl = gsap.timeline({ onComplete });
    for (let i = text.length; i >= 0; i--) {
        tl.to(el, {
            duration: 0.03,
            textContent: text.slice(0, i),
            ease: "none"
        });
    }
}

function cyclePhrases() {
    const current = phrases[phraseIndex];
    typeWriter(current, () => {
        setTimeout(() => {
            deleteWriter(current, () => {
                phraseIndex = (phraseIndex + 1) % phrases.length;
                cyclePhrases();
            });
        }, 1500); // wait after typing before deleting
    });
}

document.addEventListener("DOMContentLoaded", cyclePhrases);

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
        // Scrolling UP -> hide navbar
        navbar.style.top = '-100px'; // hide, adjust height as needed
    } else {
        // Scrolling DOWN -> show navbar
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// scrollprogress
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.getElementById('scroll-progress');
    progressBar.style.width = scrollPercent + '%';
});


// Custom loader
const greetings = [
    'Hello',             // English
    'नमस्ते',           // Hindi
    'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',           // Punjabi
    'Hola',              // Spanish
    'Bonjour',           // French
    'こんにちは',         // Japanese
    '안녕하세요',          // Korean
    '你好',              // Chinese
    'مرحبا',            // Arabic
    'Hallo',             // German
];

const helloText = document.getElementById('helloText');
let index = 0;

// Reset background position on page load to start from beginning
helloText.style.backgroundPosition = '0% 50%';

// Cycle greetings every 2 seconds with fade in/out using GSAP
function cycleGreetings() {
    gsap.to(helloText, {
        duration: 0.5, opacity: 0, onComplete: () => {
            index = (index + 1) % greetings.length;
            helloText.textContent = greetings[index];
            // Reset background position each cycle start if you want
            helloText.style.backgroundPosition = '0% 50%';
            gsap.to(helloText, { duration: 0.5, opacity: 1 });
        }
    });
}

// Initial opacity to 1 for fade animation start
gsap.set(helloText, { opacity: 1 });

// Start cycling every 2 seconds
const interval = setInterval(cycleGreetings, 1000);

// Remove loading screen after 6 seconds with fade out
setTimeout(() => {
    clearInterval(interval);
    gsap.to('#loadingScreen', {
        duration: 1, opacity: 0, pointerEvents: 'none', onComplete: () => {
            document.getElementById('loadingScreen').style.display = 'none';
        }
    });
}, 6000);

