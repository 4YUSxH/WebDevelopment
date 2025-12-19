// Prmoises -> Ek kaam jaake karo
//              1. Pending State : Kaam karne jaa rahe ho
//              2. Resolve State : Kaam ho gaya
//              3. Reject State : Kaam nahi hua

// Ex : Facebook ke paas jao aur mera data lao
//          1. Data lane jaane tak Pending
//          2. Data aa gaya Resolve
//          3. Data nahi aaya Reject

// Promise ek badda hai jo dabba kahta hai mai kabhi complete ho jaunga, aur jab mai dabba kholunga to mere andar se 2 answer mai se 1 answer milega

let prm = new Promise((res, rej) => {
  // New promise created
  setTimeout(() => {
    res();
  }, 3000);
});
// 3sec tak promise pending state mai hoga
// Resolve and Reject karna HIIIIIIII padega

prm.then(function () {
  // Agar Promise res() ko run karega to 'then' chalega
  console.log("Resolve");
});
prm.catch(function () {
  // Agar Promise rej() ko run karega to 'catch' chalega
  console.log("Resolve");
});
// Since always res() hi chalega to prm Resolved hi log karega

// Usecase : Meta pa jaao aur async5678 user ka data leke aao -> if async5678 user not exist ho ya data nahi mila to reject() chalao and agar user mil gaya ya data aa gaya to resolve() chalao
let prm3 = new Promise((resolve, reject) => {
  // Logic to go to Meta and fetch data
  // If data aaya -> resolve()
  // If data nahi aaya -> reject()
});
prm3.then(function () {
  // Resolve ka code
});
prm3.catch(function () {
  // Reject ka code
});

// Using Promises
let prm4 = fetch("https://randomuser.me/api/"); // fetch() se kisi bhi url par jaa sakte hai
prm4
  .then(function (notReadableData) {
    // fetch() ka data readable nahi hota
    return notReadableData.json(); // Usse json(JS Object Notation) banake readable banate hai
  })
  .then(function (alsiData) {
    // Iske baad jo data(asliData) milta hai wo readable hota hai
    console.log(alsiData.results[0].name.first);
  })
  .catch(function (err) {
    console.log(err);
  });
// fetch ek promise banata hai, and jab tak data aa jata hai tab usse json mai convert karke return kar dete hai, aur return ek aur promise data hai, jo agle then mai accept kar lete hai, islie 2 then use kiye hai
// 1st wale then mai Raw Data aata hai, an d2nd wale then mai JSON Data aata hai
// Jisne fetch() method/funciton ka code likha hai usne new promise banaya hoga uske code mai islie .then and .catch use ho raha hai

// New thing : (data ) => data, without braces ke likhne se direct return ho jata hai es6 funciton mai

// Async/Await -> Ye promise par kaam karta hai, if koi code promise return kar raha hai ya promise based hai to async/await use kar sakte hai, better way hai promises ko handle karne ka, jaha jahah .then .catch lagna hai waha async/await ka use karna hai

// Await ko function ke andar likhna compulsory hai
// If Await use kar liya to Async await ke parent function ke aage lagana compulsory hai

async function abdc() {
  let raw = await fetch("https://randomuser.me/api/");
  let data = await raw.json();
  console.log(data.results[0].name.first);
}
abdc();

// Another Ex
function pro() {
  new Promise((res, rej) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);
      if (num < 5) {
        res(true);
      } else {
        rej(false);
      }
    }, 1000);
  });
}

async function jkl() {
    let v = await pro();
    console.log(v);
}
jkl();

// Async/Await easy hai jab ap real project banate ho