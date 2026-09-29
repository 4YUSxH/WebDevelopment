import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

const generateToken = async (req, res) => {
  const token = jwt.sign({ id: user.id }, config.JWT_SECRET);
};

export const registerController = async (req, res) => {
  const { email, contact, password, fullname, role } = req.body;

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
      role,
    });
  } catch (err) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
