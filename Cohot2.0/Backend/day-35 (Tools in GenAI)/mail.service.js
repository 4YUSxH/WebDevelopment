import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

// Creating transporter that establish communication between web server and smtp server
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GOOGLE_USER,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    clientId: process.env.GOOGLE_CLIENT_ID,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
});

// Verifying connection between web sever and smtp server is established or not
transporter
  .verify()
  .then(() => {
    console.log("Email transporter is ready to send emails");
  })
  .catch((err) => {
    console.error("Email transporter verification failed: ", err);
  });

export const sendEmail = async ({ to, subject, html, text="" }) => { // text is optional
  const mailOptions = {
    from: process.env.GOOGLE_USER,
    to,
    subject,
    html,
  };

  const details = await transporter.sendMail(mailOptions);
  console.log("Email sent", details);
  return "email sent successfully, to" + to
};
