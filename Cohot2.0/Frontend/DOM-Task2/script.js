const teams = [
  {
    team: "Chennai Super Kings",
    name: "CSK",
    trophies: "5× IPL Champions",
    captain: "Ruturaj Gaikwad",
    color: "yellow",
    emoji: "Lion"
  },
  {
    team: "Mumbai Indians",
    name: "MI",
    trophies: "5× IPL Champions",
    captain: "Hardik Pandya",
    color: "blue",   
    emoji: "Tiger"
  },
  {
    team: "Kolkata Knight Riders",
    name: "KKR",
    trophies: "3× IPL Champions",
    captain: "Shreyas Iyer",
    color: "purple",     
    emoji: "Horse"
  },
  {
    team: "Gujarat Titans",
    name: "GT",
    trophies: "1× IPL Champion",
    captain: "Shubman Gill",
    color: "navy",
    emoji: "Trophy"
  },
  {
    team: "Sunrisers Hyderabad",
    name: "SRH",
    trophies: "1× IPL Champion",
    captain: "Pat Cummins",
    color: "orange",    
    emoji: "Sun"
  },
  {
    team: "Rajasthan Royals",
    name: "RR",
    trophies: "1× IPL Champion",
    captain: "Sanju Samson",
    color: "pink",     
    emoji: "Crown"
  },
  {
    team: "Royal Challengers Bengaluru",
    name: "RCB",
    trophies: "Yet to win",
    captain: "Faf du Plessis",
    color: "Red",   
    emoji: "Lion"
  },
  {
    team: "Delhi Capitals",
    name: "DC",
    trophies: "Yet to win",
    captain: "Rishabh Pant",
    color: "blue",
    emoji: "Tiger"
  },
  {
    team: "Punjab Kings",
    name: "PBKS",
    trophies: "Yet to win",
    captain: "Shikhar Dhawan",
    color: "red",   
    emoji: "Lion"
  },
  {
    team: "Lucknow Super Giants",
    name: "LSG",
    trophies: "Yet to win",
    captain: "KL Rahul",
    color: "blue",   
    emoji: "Eagle"
  }
];

let first = document.querySelector("#first");
let sec = document.querySelector("#sec");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");
let button = document.querySelector("button");
let body = document.querySelector("body");

button.addEventListener("click", function(){
  let num = Math.floor(Math.random()*teams.length);

  let a = first.innerHTML = teams[num].team;
  let b = sec.innerHTML = teams[num].name;
  let c = third.innerHTML = teams[num].trophies;
  let d = fourth.innerHTML = teams[num].captain;

  body.style.backgroundColor = teams[num].color;
})