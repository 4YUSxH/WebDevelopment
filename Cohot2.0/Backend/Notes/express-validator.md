# Express Validator — Final Notes

## Purpose:

* Ensure correct input format
* Prevent invalid data from reaching controllers
* Protect database and business logic from bad input

Validation must happen **before controller execution**.

---

# 2. Installation

```bash
npm install express-validator
```

Import required functions:

```js
import { body, param, query, validationResult } from "express-validator"
```

---

# 3. Request Flow with Validation

```
Client Request
      ↓
Validation
      ↓
Controller
      ↓
Database
      ↓
Response
```

Validation acts as a **gatekeeper** before business logic.

---

# 4. Basic Validation Example

Route with validation rules.

```js
import { body } from "express-validator"

app.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  registerController
)
```

Validation rules:

* `body("email")` → validates request body field
* `isEmail()` → checks email format
* `isLength()` → checks minimum length

---

# 5. Accessing Validation Errors

Use `validationResult()` to check validation results.

```js
import { validationResult } from "express-validator"

const errors = validationResult(req)

if (!errors.isEmpty()) {
  return res.status(400).json({
    errors: errors.array()
  })
}
```

Example response:

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "path": "email"
    }
  ]
}
```

---

# 6. Validating Different Request Parts

### Request Body

```js
body("email")
```

---

### URL Parameters

```js
param("id").isMongoId()
```

Example route:

```
GET /user/:id
```

---

### Query Parameters

```js
query("page").isInt()
```

Example request:

```
GET /users?page=2
```

---

# 7. Common Validators

Required field:

```js
body("name").notEmpty()
```

Email format:

```js
body("email").isEmail()
```

Minimum length:

```js
body("password").isLength({ min: 8 })
```

Numeric value:

```js
body("age").isNumeric()
```

Custom message:

```js
body("email")
  .isEmail()
  .withMessage("Valid email required")
```

---

# 8. Sanitization

Sanitization modifies input data before processing.

Example:

```js
body("email").trim().normalizeEmail()
```

Functions:

* `trim()` → removes extra spaces
* `normalizeEmail()` → standardizes email format

---

# 9. Validation Middleware

Create middleware to handle validation errors.

```js
import { validationResult } from "express-validator"

export const validate = (req, res, next) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    })
  }

  next()
}
```

Purpose:

* Separate validation logic from controllers
* Maintain clean controller code

---

# 10. Reusable Validation Rules

Create validation files for modular structure.

Example:

```js
import { body,validationResult } from "express-validator"

export const registerValidation = [

  body("name").notEmpty().withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email required"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),

  (req, res, next) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {

      const error = new Error("Validation failed")
      error.statusCode = 400
      error.details = errors.array()

      return next(error)

    }

    next()

  }

]
```

---

# 11. Route Implementation

```js
router.post(
  "/register",
  registerValidation,
  registerController
)
```

Execution order:

```
Validation 
      ↓
Controller
```

---

# 12. Folder Structure

```
src
│
├─ validators
│     └─ authValidator.js
├─ controllers
├─ routes
```

Structure improves maintainability and reusability.

---

# 13. Best Practices

1. Validate requests before controller execution
2. Keep validation separate from business logic
3. Use middleware for validation errors
4. Provide clear error messages
5. Apply sanitization to clean input data
6. Never rely only on client-side validation

Server-side validation is mandatory for secure APIs.
