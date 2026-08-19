import userModel from "../models/user.model.js";
import { sendEmail } from "../services/mail.service.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const registerController = async (req, res) => {
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

  const emailVerificatoinToken = jwt.sign(
    { email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  await sendEmail({
    to: email,
    subject: "Welcome to Perplexity",
    html: `
    <h1>Welcome ${username}</h1>
    <p>Thank you for registering with us. We are excited to have you on board!</p>
    <p>Please verify your email by clicking the link below:</p>
    <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificatoinToken}">Verify Email</a>
    <p>If you did not register, please ignore this email.</p>
    <p>If you need to resend the verification email, please click the link below:</p>
    <a href="http://localhost:3000/resend-verification">Resend Verification Email</a>
    <p>Best regards,</p>
    <p>The Perplexity Team</p>
    `,
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

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).json({
      message: "Login could not be completed",
      success: false,
      err: "Login could not be completed",
    });
  }

  if (!user.verified) {
    return res.status(400).json({
      message: "Please verify your email before logging in",
      success: false,
      err: "Email not verified",
    });
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(400).json({
      message: "Login could not be completed",
      success: false,
      err: "Login could not be completed",
    });
  }

  const token = jwt.sign(
    { username: user.username, id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User logged in successfully",
    success: true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};

export const getMeController = async (req, res) => {
  const userId = req.user.id

  const user = await userModel.findById(userId)

  res.status(200).json({
    message: "User fetched successfully",
    success: true, 
    user
  })
};

export const verifyEmailController = async (req, res) => {
  console.log("workign");
  
  const token = req.query.token;
  if (!token) {
    return res.status(400).json({
      message: "Token not provided",
      success: false,
      err: "Token not provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({ email: decoded.email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
        success: false,
        err: "Invalid credentials",
      });
    }

    user.verified = true;

    await user.save();

    const html = `
    <h1>Email Verifeid successfully!</h1>
    <p> you email has been verified successfully. You can now log in to your account.</p>
    <a href="http://localhost:3000/login">Click here to login</a>
    `;

    return res.status(200).send(html);
  } catch (err) {
    return res.status(400).json({
      message: "Invalid or expired token",
      success: false,
      err: "Invalid or expired token",
    });
  }
};
