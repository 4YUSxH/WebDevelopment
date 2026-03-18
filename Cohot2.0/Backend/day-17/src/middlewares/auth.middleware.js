const jwt = require("jsonwebtoken");

const identifyUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
  // Sever will identify which user is requesting using token

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  // Creating new property name as req.user whic contain decoded 
  // Attach data to req (e.g., req.user = decoded) in middleware; next() only passes control, not data.  
  req.user = decoded

  // Forwards control to next controller/anothermiddleware from this middleware  
  next()
};

module.exports = identifyUser