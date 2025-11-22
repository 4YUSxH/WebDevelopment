let button = document.querySelector("button");
let container = document.querySelector(".container");
let msg = document.querySelector(".msg");

button.addEventListener("click", () => {
  msg.innerHTML = "";

  let link = prompt("Enter Profile Pic");
  let name = prompt("Enter Name");
  let job = prompt("Enter Occupation");
  let location = prompt("Enter Location");

  // Create card
  let div = document.createElement("div");
  div.classList.add("card");

  // Card inner HTML
  div.innerHTML = `
    <img class="profile-pic" src="${link}" alt="Profile Picture">
    <h1 class="name">${name}</h1>
    <p class="occupation">${job}</p>
    <p class="location">📍 ${location}</p>
  `;

  container.appendChild(div);
});
