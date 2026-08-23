import userModel from "../models/user.model.js";
import { sendEmail } from "../services/mail.service.js";
import jwt from "jsonwebtoken";
import redis from "../config/cache.js";
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
    <a href="http://localhost:3000/api/auth/resend-verification">Resend Verification Email</a>
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

export const logoutController = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({
      message: "Token not provided",
      success: false,
      err: "Token not provided",
    });
  }

  res.clearCookie("token");

  await redis.set(token, Date.now.toString());

  return res.status(200).json({
    message: "User logout successfully",
    success: true,
  });
};

export const getMeController = async (req, res) => {
  const userId = req.user.id;

  const user = await userModel.findById(userId);

  res.status(200).json({
    message: "User fetched successfully",
    success: true,
    user,
  });
};

export const verifyEmailController = async (req, res) => {
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

    if (user.verified === true) {
      const html = `
      <h1>Email Already Verified!<h1>
      <p>Your email address has already been verified.<p>
      <p>You can log in to your account and continue using our service.<p>
      <p>You can log in to your account and continue using our service.<p>
      <a href="http://localhost:3000/api/auth/login">Log In to Your Account</a>
      `;
      return res.send(html);
    }

    user.verified = true;

    await user.save();

    const html = `
    <h1>Email Verifeid successfully!</h1>
    <p> you email has been verified successfully. You can now log in to your account.</p>
    <a href="http://localhost:3000/api/auth/login">Click here to login</a>
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

export const resendVerificationController = async (req, res) => {
  const { email } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message:
        "If the email is registered and not yet verified, a verification link has been sent",
      success: false,
      err: "Link sent",
    });
  }

  if (user.verified === true) {
    return res.status(400).json({
      message: "User is already verified",
      success: false,
      err: "User is already verified",
    });
  }

  const emailVerificationToken = jwt.sign(
    { email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  await sendEmail({
    to: email,
    subject: "Welcome to Perplexity",
    html: `
    <h1>Verify Your Email</h1>
    <p>Hello ${user.username},</p>
    <p>
      You requested a new verification email for your account.
    </p>
    <p>
      Please verify your email address by clicking the link below:
    </p>
    <p>
      <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">
        Verify Email
      </a>
    </p>
    <p>
      This verification link will expire after a limited period.
    </p>
    <p>
      If you did not request this email, you can safely ignore it.
    </p>
    <p>
      Best regards,<br>
      The Perplexity Team
    </p>
    `,
  });

  res.status(200).json({
    message: "Email verification link sent successfully",
    success: true,
  });
};
