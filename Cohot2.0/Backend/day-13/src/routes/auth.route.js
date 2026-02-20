const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  //   Getting data from db on the basis of email condition
  const isUserAlreadyExists = await userModel.findOne({ email });

  //   Checkign user exists or not with same email
  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User is already exists with this same email address",
    });
  }

  //   Storign user's data in db
  const user = await userModel.create({
    email,
    password,
    name,
  });

  //   Creating and signing token with jwesecret
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  //   Setting token in cookies
  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User Registered",
    user,
    token,
  });
});

// Dummy api for showing how server can read cookies data
authRouter.post("/protected",(req, res) => {
  const cookieData = req.cookies;
  console.log(cookieData);

  res.status(200).json({
    message: "Cookie fetched",
    cookieData
  })
})

// Login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (!userExists) {
    return res.status(404).json({
      message: "User doesn't exsits",
    });
  }

  const passwordMatched = user.password === password;

  if (!passwordMatched) {
    return res.status(200).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id
    },
    process.env.JWT_SECRET,
  );

  res.cookie("JWT_TOKEN", token)

  res.status(200).json({
    message: "Logged in",
    token
  })
});
module.exports = authRouter;
