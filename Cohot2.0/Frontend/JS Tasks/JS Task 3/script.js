console.log("Print 1 to 10");
for (let a = 1; a < 11; a++) {
  console.log(a);
}

console.log("Print even number from 0 to 20");
for (let b = 0; b < 21; b++) {
  if (b % 2 === 0) {
    console.log(b);
  }
}

console.log("Print 10 to 1");
for (let c = 10; c > 0; c--) {
  console.log(c);
}

console.log("Print the word Yes 5 times");
for (let d = 0; d < 5; d++) {
  console.log("Yes");
}

console.log("Print odd number from 0 to 20");
for (let e = 1; e < 21; e += 2) {
  console.log(e);
}

console.log("Print whether number is even or odd from 1 to 10");
for (let f = 1; f < 11; f++) {
  if (f % 2 === 0) {
    console.log(`${f} : Even`);
  } else {
    console.log(`${f} : Odd`);
  }
}

console.log(
  "Take input from user and log whether number is negative or positive"
);
// let g = +prompt("Enter a number"); //Prompt string return karta hai use integar mai change karne ke liye aage + or parsInt() pr Number() lagate hai
// if(g<0){
//     console.log("Negative")
// }
// else if(g===0){
//     console.log("Number is 0");
// }
// else{
//     console.log("Positive");
// }

console.log("Ask user’s age and check if eligible to vote");
// let h = +prompt("Enter Age");
// if(h>=18){
//  console.log("You can vote");
// }
// else{
//     console.log("You cant vote");
// }

console.log("Print multiplication table of 5");
for (let i = 1; i < 11; i++) {
  console.log(`5 X ${i} = ${5 * i}`);
}

console.log("Count how many numbers between 1 and 15 are greater than 8");
let countter = 0;
for (let j = 1; j < 16; j++) {
  if (j > 8) {
    countter++;
  } 
}
console.log(`The total numbers greater than 8 is ${countter}`);

console.log(
  "Ask user for password and print access status Hardcoded correct password. Compare with user input."
);
// let k = prompt("Enter password");
// const fixpass = "1234";
// if(k===fixpass){
//     console.log("Password is correct");
// }
// else{
//     console.log("Password is incorrect");
// }

console.log(
  "Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”"
);
// const fixpass1 = "Solo";
// for (let m = 0; m < 3; m++) {
//   let l = prompt("Enter password");
//   if(l===fixpass1){
//     console.log("Account locked");
//     break;
//   }
//   else if (m === 0) {
//     console.log("2 Attempts are left");
//   } else if (m === 1) {
//     console.log("1 Attempt is left");
//   } else if (m === 2) {
//     console.log("No attempts left");
//   }
// }

console.log("Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until Stop is typed. Count Yes.");
// let n = 1;
// let countee = 0; 
// while(n<=n){
//     let o = prompt("Enter word");
//     if(o==="stop"){
//         console.log("Stop");
//         break;
//     }
//     else if(o==="yes") {
//       countee++;
//     }
//     n++;
// }
// console.log(`${countee} : Yes`);

console.log("Print numbers divisible by 7 from 1 to 50");
for (let p = 7; p < 51; p += 7) {
    console.log(p);
}


console.log("Sum of all odd numbers from 1 to 30");
let newp = 0;
for(let p = 1; p<31; p++){
    if(!(p%2===0)){
        console.log(newp += p);
    }
}
// Sum = 225

console.log("Sum of all even numbers from 1 to 30");
let newq = 0;
for(let q = 1; q<31; q++){
    if(q%2===0){
        console.log(newq += q);
    }
}
// Sum = 240

console.log("Keep asking number until user enters an even number");
// let r = 0;
// while(r<=r){
//     let inp = +prompt("Enter number");
//     if(inp%2===0){
//         console.log(`${r} Execution stopped : You've entered even number`);
//         break;
//     }
//     else{
//         console.log(`${r} Execution running : You've entered odd number`);
//     }
//     r++;
// }

console.log("Print numbers between two user inputs");
// input1 = +prompt("Enter input 1");
// input2 = +prompt("Enter input 2");
// if(input2 < input1){
//   console.log("Enter numbers correctly input2 cannot be bigger than input1");
// }
// for(input1++; input1<input2; input1++){
//     console.log(input1);
// }

console.log("Print only first 3 odd numbers from 1 to 20");
let count = 0;
for(let s = 1; s<21; s++){
    if(!(s%2===0)){
        count++;
        
        console.log(s);
        if(count === 3){
            break;
        }
    }
}

console.log("Ask user 5 numbers. Count how many are positive");
// for(let t=1; t<6; t++){
//     userInp = +prompt("Enter 5 numbers");
//     if(userInp > 0){
//         console.log(`${t} is Positive`);
//     }
//     else if(userInp < 0){
//         console.log(`${t} is Negative`);
//     }
//     else{
//         console.log(`${t} is Zero`);

//     }
// }

console.log("Handelling prompt");
// let u = prompt("Enter number");
// // If someone cancel prompt
// if(u === null){
//   console.warn("You cancelled it")
// }
// // Empty propmt
// else if(u.trim() === ""){
//   console.warn("Please enter something")
// }
// // Entering string but i was asking for a number
// else if(!(+u === +u)){
//   console.warn("Enter numbers only");
// }
// else{
//   console.log(+u);
// }

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
console.log("ATM Simulator – Allow 3 withdrawals");
let balance = 1000;
let times = 0;

while(times !== 3){
  let ask = +prompt("Enter amount");
  times++;
  if(ask >= 0 && ask <= balance){
    balance -= ask;
    console.log("Amount deducted", ask);
    console.log(`Remaining balance : ${balance}`);
  } 
  else{
    console.log(`Not enough balance and Remaining balance: ${balance}`);
    break;
  }
}






console.log("Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked(Optimal way)");
// let correctpass = "solo";
// let userpass = prompt("Enter password");
// let countt = 1;
// if(userpass === correctpass){
//   console.log("Account unlocked");
// }
// else{
//   while(userpass !== correctpass){
//     userpass = prompt("Enter pass");
//     countt++;
//     if(userpass === correctpass){
//       console.log("Account unlocked");
//       break;
//     }
//     else if(countt === 3){
//       console.log("Account locked");
//       break;
//     }
//   }
// }