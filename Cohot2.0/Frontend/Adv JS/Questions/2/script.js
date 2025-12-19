// ## Exercise 1 — Very Easy (Warming up)
// function afterDelay(time, fn){
//   setTimeout(() => {
//     fn();
//   }, time*1000);
// };
// afterDelay(3, function(){
// console.log("Callback executed");
// });

// ## Exercise 2 — Intermediate (Data flow)
// function getUser(username, cb){
//   console.log("Fetching User's Details...");
//   setTimeout(() => {
//     let obj = {id : 0, username : username};
//     cb(obj);
//   }, 1000);
// };

// function getUserPosts(userId, cb2){
//   console.log("Fetching User's Posts...");
//   setTimeout(() => {
//     let post = ["Vegas", "NZ", "USA", "Sweden", "Finland"];
//     cb2(userId, post);
//   }, 1000);
// };

// getUser("Aayu", function(dets){
//   getUserPosts(dets.id, function(id, post){
//     console.log(`Username : ${dets.username} UserID : ${id} Posts : ${post}`);
//   });
// });
// 1sec + 1sec jab dono aa jayenge tab final function chal jayega aur log ho jayega
// getUser ke andar getUserPosts ko islie call kiya hai cause pahele user ki details laao fir post lana

// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)
function loginUser(username, cb) {
  console.log("Logging In User...");
  setTimeout(() => {
    let user = { username: username, Id: 0 };
    cb(user);
  }, 1000);
}

function fetchPermissions(userId, cb) {
  console.log("Fetching Premissions...");
  setTimeout(() => {
    let permissions = ["Remove", "Block", "Mute"];
    cb(userId, permissions);
  }, 1000);
}

function loadDashboard(permissions, cb) {
  console.log("Loading Deshboard...");
  setTimeout(() => {
    cb();
  }, 1000);
}

loginUser("Solo", function (userData) {
  fetchPermissions(userData.Id, function (userPermissions) {
    loadDashboard(userPermissions, function () {
      console.log("Dashboard loaded ✔");
    });
  });
});



// All above are 'Callback Hell' or 'ChristmasTree Problem', iss problem ka solution hai promises