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
      email: user.email
    },
    process.env.JWT_SECRET,
  );

//   Setting token in cookies
  res.cookie("jwt_token", token)

  res.status(201).json({
    message: "User Registered",
    user,
    token 
  });
});

module.exports = authRouter;
