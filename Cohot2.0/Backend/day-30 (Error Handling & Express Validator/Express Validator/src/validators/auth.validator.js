import { body, validationResult } from "express-validator";

// Showing errors
const validate = (req, res, next) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    return next();
  }

  res.status(400).json({
    errors: error.array(),
  });
};
// In above code: we've created this function in global space so that it can be use for register, login, etc for showing errors

// Adding verification/checks conditions
export const registerValidator = [
  body("username").isString().withMessage("Username must be string"),
  body("email").isEmail().withMessage("Enter correct email"),
  body("password")
    .isLength({ min: 3, max: 10 })
    .withMessage("Password min length is 5 and max is 10"),

  // This function show to errors, it only show errors
  validate,
];

// isMongoId(): This method show whether the id that coming from client side is valid mongo id or not 
// .custom: Adding custom checks like regex