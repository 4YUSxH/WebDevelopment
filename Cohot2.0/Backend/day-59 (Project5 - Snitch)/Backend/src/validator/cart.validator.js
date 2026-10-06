import { param, body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateAddToCart = [
  param("productId").isMongoId().withMessage("invalid product ID"),
  param("variantId").optional().isMongoId().withMessage("Invalid variant ID"),
  body("quantity")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1"),

  validate,
];
