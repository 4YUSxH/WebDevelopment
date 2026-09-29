import { config } from "dotenv";
import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import morgan from "morgan";

config();

const app = express();

app.use(morgan("dev"));

// Initializing Passport Middleware
app.use(passport.initialize());

// Configure Passport to use Google OAuth 2.0 strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (_, __, profile, done) => {
      // Here, you would typically find or create a user in your database
      // For this example, we'll just return the profile
      return done(null, profile);
    },
  ),
);

// Route to initiate Google OAuth flow
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

// Callback route that Google will redirect to after authentication
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false, // PassportJs use session based authentication If you dont want to use session make it false
    failureRedirect: "/",
  }),
  (req, res) => {
    console.log(req.user);
    res.send("Google authentication successful");

    // Generate a JWT for the authenticated user
    // Send the token to the client
  },
);

app.listen(3000, () => {
  console.log("Running");
});
