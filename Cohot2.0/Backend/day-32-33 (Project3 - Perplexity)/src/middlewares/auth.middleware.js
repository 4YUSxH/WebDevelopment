import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const identifyUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({
      message: "Token not provided",
      success: false,
      err: "Token not provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(400).json({
      message: "Invalid or expired token",
      success: false,
      err: "Invalid or expired token",
    });
  }
};
