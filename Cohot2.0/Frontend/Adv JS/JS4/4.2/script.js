// Callback -> callback hota hai ek fuction jo turant nahi chalega, ye tab chalega jab apka koi kaam complete hoga
// Also Callback function hota hai jo ap kisi aur function mai as arguement pass karte ho

// Ex : 
// setTimeout(function(){
//     console.log("Hey");
// }, 2000);
// Jab 2000ms complete ho jaaye tab function ko chala dena 

// Another Ex : 
function abcd(fnc){ // Arguement se paased function yaha aayega
    fnc(); // Fnc mai ab arguement se aaya hua passed function hai and usse chala diya
};
abcd(function(){ // Passing funciton to abdc as it's asked for a funciton in its parameter
    console.log("Arguement Function");
});

// Ex of Callback Hell : Before Promise & Async/Await aese hi code write karna padta tha
function efgh(fnc2){ 
    fnc2(function(fnc4){
        fnc4(function(){
            console.log("HuiHui");
        });
    }); 
};
efgh(function(fnc3){ 
    fnc3(function(fnc5){
        fnc5();
    });
});

// How to create above callback hell : 
function xyz(fn){
    fn(function(fn3){
        fn3(function(fn5){
            fn5();
        });
    });
};
xyz(function(fn2){
    fn2(function(fn4){
        fn4(function(){
            console.log("HEEEEEELOOOO");
        });
    });
});

// Jaha bhi function call hoga usme ek aur function diya jaa sakta hai aur uss function ko accept karna padega jis function mai diya hai as arguement, iss process ko repeat kardo callback hell create hoga, isse kitna bhi deep tree craete kar sakte hai callbacks ka
// Pahele dekho kaha function call hua hai waha ek callback(cb) pass kardo aur uss cb ko jis function mai pass kiya hai waha accept karo and isse repeat karo
// xyz function banaya usse call kiya aur ek cb function pass kiya arguement mai aur usse cb function ko xyz mai as parameter accept kiya, fir yahi step ko dusre function ke liye repeat kara jaha function call ho raha ho uss function mai cb function paas kiya as args mai usse cb function ko jiss function mai pass kiya tha as args mai waha as paramter accept kiya 

// Watch cohort2 advjs4 day-59 for revising

// Previous jo dekha wo tha circus ab jo dekhenge wo mai asli mai kese kaam karte hai callbacks ka use karke

// Situation : 1. amitSeDetailsLaao(address, cb), first chiz jo chaiye wo hai address, and address mil jane ke baad cb run karo
//             2. dukaankoDhundo(details, cb)
//             3. samaanLelo(samaanList, cb)
//             4. gharAaajao(address, cb)
// amit se details laane ke baad hi dukaan dhundoge, dukaan ko dhudne ke baad hi saaman laaoge, samaan lene ke baad hi ghar aa sakte ho, order mai hogi chizeein

// Ye below function kahi(server, library, etc) likha hoga 
function amitSeDetailsLaao(address, cb){
    // Yaha logic likha hoga uss method/function ka

    // Ye below logic bas understanding(situation create karne) ke liye likha hai 
    console.log("Fetching Details...");
    setTimeout(() => {
        let details = {lat : 30.75, lng : 50.67}
        cb(details); // Jab details aa gayi tab ye bc run hua
    }, 3000);
};

// Yr below code developer likhega uss predefined function ko use karne ke liye
amitSeDetailsLaao("Auckland NZ", function(dets){
    console.log(dets);
});

// Another Ex : 
function icecreameLaao(address, cb){
    // Logic : address laane ka logic pahele run hoga
    // Then cb(ans) call hoga jisme logic ka ans pass karenge

    // Conclusion, Pahele logic perform hoga jab tak cb ka kuch kaam nahi rahega, jese hi logic ka ans mil jayega cb picture mai aayega 
};
icecreameLaao("Any Address", function(details){
    // details -> ans ko accept karega
});
// Indirect cb 86 line wala funciton hai

// Anaglogy : 
h1 = document.querySelector("h1");
h1.addEventListener("click", function(dets){
    console.log(dets);
})
// .addEventListener is a callback and dets accept karte hai jo data dom ka predefined code(.addEventListener ko logic jaha likha hai) bhejta hai, islie amitSeDetailsLaao ke callback function mai dets likha hai