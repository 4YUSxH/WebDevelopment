const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  const { email, username, password, bio, profileImage } = req.body;

  const userAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (userAlreadyExists) {
    return res.status(409).json({
      message:
        "User already exists" +
        (userAlreadyExists.email === email
          ? "Email already exists"
          : "Username alraedy exists"),
    });
  }

  const hash = await bcrypt.hash(password, 10)

  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash,
  });

  //   1. user ka data hoan chaiye, 2. data unique hona chaiye for below object
  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  //            key     value
  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
};

const loginController = async (req, res) => {
  const { username, email, password } = req.body;

  // User can login: username+password or email+password

  //   const { username(undefined), email, password } = req.body; when user input email
  //   const { username, email(undefined), password } = req.body; when user input username
  const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return res.status(200).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res.status(200).json({
    message: "User loggedIn Successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
};

module.exports = {
    registerController,
    loginController 
}