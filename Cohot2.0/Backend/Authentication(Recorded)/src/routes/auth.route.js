const express = require("express");
const authRoute = express.Router();
const userModel = require("../models/user.models");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// Post, /api/auth/register
authRoute.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  const user = await userModel.create({
    name,
    email,
    password: crypto.createHash("md5").update(password).digest("hex"),
  });

  jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User created successfully",
    user: {
      name: user.name,
      email: user.email,
    },
  });
});

// GET, /api/auth/get-me
// With the help of cookie we identify the user who is making the request and we send the user details in response
authRoute.get("/get-me", async (req, res) => {
  const token = req.cookies.jwt_token; // Extract the token from the cookie

  const decoded = jwt.verify(token, process.env.JWT_SECRET); // It will return user id which we have stored in the token while creating it

  console.log(decoded);

  const user = await userModel.findById(decoded.id); // Finding the user in the database using the id we got from the decoded

  //   This way server identifies the user who is making the request

  res.status(200).json({
    name: user.name,
    email: user.email,
  });
});

authRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (
    user.password !== crypto.createHash("md5").update(password).digest("hex")
  ) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("jwt_token", token);

  res.status(200).json({
    message: "Login successful",
    user: { name: user.name, email: user.email },
  });
});

module.exports = authRoute;
