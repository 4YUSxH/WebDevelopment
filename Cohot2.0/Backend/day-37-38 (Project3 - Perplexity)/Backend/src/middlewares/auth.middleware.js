import jwt from "jsonwebtoken";
import redis from "../config/cache.js";

export const identifyUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({
      message: "Token not provided",
      success: false,
      err: "Token not provided",
    });
  }

  const isTokenBlacklisted = await redis.get(token)
  if(isTokenBlacklisted){
    return res.status(401).json({
      message: "Invalid token",
      success: false,
      err: "Invalid token"
    })
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
