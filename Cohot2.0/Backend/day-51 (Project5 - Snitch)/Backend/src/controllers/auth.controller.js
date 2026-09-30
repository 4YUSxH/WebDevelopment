import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

const sendTokenResponse = async (user, res, message) => {
  const token = jwt.sign({ id: user.id }, config.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token)

  res.status(200).json({
    message,
    success: true,
    user: {
      id: user.id,
      email: user.email,
      contact: user.contact,
      fullname: user.fullname,
      role: user.role,
    },
  });
};

export const registerController = async (req, res) => {
  const { email, contact, password, fullname, role, isSeller } = req.body;

  try {
    const isUserAlreadyExists = await userModel.findOne({
      $or: [{ email }, { contact }],
    });
    if (isUserAlreadyExists) {
      return res.status(400).json({
        message: "Registration could not be completed",
      });
    }

    const user = await userModel.create({
      email,
      contact,
      password,
      fullname,
      role: isSeller ? "seller" : "buyer",
    });

    await sendTokenResponse(user, res, "User registered successfully")

  } catch (err) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
