// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

let userEmails = ["abc@gamil.com", "xyz@gamil.com", "lol@gamil.com"];

function sendEmail(email) {
  return new Promise((res, rej) => {
    let time = Math.floor(Math.random() * 5);

    setTimeout(() => {
      let prob = Math.floor(Math.random() * 10);
      if (prob <= 5) {
        res("✅ Email sent successfully to");
      } else {
        rej("❌ Failed to send email to");
      }
    }, time * 1000);
  });
}

// prom = sendEmail("kjsdha@wkd.com"); // For 1 email
// prom
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

async function sendEmails(userslist) { // For multiple emails
  let allReponses = userslist.map(function (email) {
    return sendEmail(email)
      .then(function (data) {
        return data;
      })
      .catch(function (err) {
        return err;
      });
  });
  let result = await Promise.all(allReponses);
  result.forEach(function(status, idx){
      console.log(`${status} ${userslist[idx]}`);
  })
}
sendEmails(userEmails);