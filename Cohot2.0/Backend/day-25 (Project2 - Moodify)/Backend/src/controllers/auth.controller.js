const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const redis = require("../config/cache");

const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  const isAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (isAlreadyExists) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username: username,
    email: email,
    password: hash,
  });

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "3d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
            id: user._id,
            username: user.username,
            email: user.email,
        }
  });
};

const loginController = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  }).select("+password");
  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const isPassworkMatch = await bcrypt.compare(password, user.password);
  if (!isPassworkMatch) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "3d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User loggedIn successfully",
    user: {
            id: user._id,
            username: user.username,
            email: user.email,
        }
  });
};

const getMeController = async (req, res) => {
    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message: "User fetched successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        }
    })
};

const logoutController = async (req, res) => {
    const token = req.cookies.token

    res.clearCookie("token")

    await redis.set(token, Date.now.toString())

    res.status(200).json({
        message: "User loggedOut successfully"
    })
};

module.exports = {
  registerController,
  loginController,
  getMeController,
  logoutController,
};
