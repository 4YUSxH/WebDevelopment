let users = [
  {
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEarI37Q50_iFkMR09jevkQBVtG8O9tguVHg&s",
    name: "Ava Martinez",
    occupation: "Software Engineer",
    location: "San Francisco, CA",
  },
  {
    profilePic: "https://wallpapers.com/images/hd/oscar-zahn-skeleton-headphones-unique-cool-pfp-rboah21ctf7m37o0.jpg",
    name: "Jayden Lee",
    occupation: "Product Designer",
    location: "Seattle, WA",
  },
  {
    profilePic: "https://tr.rbxcdn.com/180DAY-d926b6411fb9793710227c89e99745ea/420/420/FaceAccessory/Webp/noFilter",
    name: "Mia Patel",
    occupation: "Data Analyst",
    location: "Austin, TX",
  },
];

let container = document.querySelector(".container")

let sum = "";
users.forEach(function (user) {
  sum = sum + `<div class="card">
        <img class="profile-pic" src="${user.profilePic}" alt="Profile Picture" />
        <h1 class="name">${user.name}</h1>
        <p class="occupation">${user.occupation}</p>
        <p class="location">📍 ${user.location}</p>
      </div>`
});
console.log(sum);
container.innerHTML = sum;