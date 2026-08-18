import userModel from "../models/user.model.js";
import { sendEmail } from "../services/mail.service.js";

export const registerController = async (req, res) => {
  console.log("WRokign");
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "Registration could not be completed",
      success: false,
      err: "Registration could not be completed",
    });
  }

  // We don't need to hash password because we already wrote .pre method in user schema
  const user = await userModel.create({
    username,
    email,
    password,
  });

  await sendEmail({
    to: email,
    subject: "Welcome to Perplexity",
    html: `<h1>Welcome ${username}</h1><p>Thank you for registering with us. We are excited to have you on board!</p>`,
  });

  res.status(201).json({
    message: "User registered successfully",
    success: true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};
