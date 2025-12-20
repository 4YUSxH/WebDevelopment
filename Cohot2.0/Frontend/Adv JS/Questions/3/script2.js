// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

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
