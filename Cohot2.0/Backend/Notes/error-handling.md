# Error Handling in Express

# 1. What is Error Handling?

Errors can occur due to:

* Invalid user input
* Database failures
* Missing resources
* Authentication failures
* Unexpected server issues

Without proper error handling:

* The server may crash
* APIs may return inconsistent responses
* Debugging becomes difficult

---

# 2. Types of Errors in Express

### 1. Operational Errors

These are **expected errors** that occur during normal operation.

Examples:

* User not found
* Invalid password
* Unauthorized access
* Database connection failure

Example:

```js
if (!user) {
  return res.status(404).json({ message: "User not found" });
}
```

---

### 2. Programming Errors

These are **bugs in the code**.

Examples:

* Undefined variables
* Incorrect logic
* Syntax mistakes

Example:

```js
const user = await User.findById(idd); // idd is undefined
```

These errors should be **fixed during development**.

---

# 3. Default Error Handling in Express

Express has a **built-in error handler**.

If an error occurs and is passed to `next()`:

```js
next(error);
```

Express automatically sends a response.

Example:

```js
app.get("/test", (req, res, next) => {
  const error = new Error("Something went wrong");
  next(error);
});
```

However, the default handler:

* Sends HTML responses
* Exposes stack traces
* Is not suitable for production APIs

---

# 4. Custom Error Handling Middleware

In production applications, we create a **global error handler**.

### Syntax of Error Middleware

Error middleware has **four parameters**:

```js
(err, req, res, next)
```

Example:

```js
const errorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error"
  });

};
```

Register middleware at the **end of the application**:

```js
app.use(errorHandler);
```

---

# 5. Passing Errors to Middleware

Instead of handling errors in every route, we pass them to the global handler.

Example:

```js
app.get("/user/:id", async (req, res, next) => {

  const user = await User.findById(req.params.id);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;

    return next(error);
  }

  res.json(user);

});
```

Flow:

```
Route → next(error) → Error Middleware → Response
```

---

# 6. Handling Async Errors

Express does not automatically catch errors inside async functions.

Example of a problem:

```js
app.get("/users", async (req, res) => {
  const users = await User.find(); 
});
```

If the database fails, the server may crash.

### Solution: Async Wrapper

Create a reusable wrapper.

```js
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
```

Usage:

```js
app.get(
  "/users",
  asyncHandler(async (req, res) => {

    const users = await User.find();
    res.json(users);

  })
);
```

Now all errors automatically go to the error middleware.

---

# 7. Custom Error Class

For better structure, we create a **custom error class**.

Example:

```js
class AppError extends Error {

  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

}
```

Usage:

```js
if (!user) {
  throw new AppError("User not found", 404);
}
```

Benefits:

* Standardized error format
* Cleaner code
* Easier debugging

---

# 8. Environment-Based Error Responses

In development, we show detailed errors.

In production, we hide sensitive information.

Example:

```js
const errorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "development") {
    return res.status(statusCode).json({
      message: err.message,
      stack: err.stack
    });
  }

  res.status(statusCode).json({
    message: err.message || "Something went wrong"
  });

};
```

---

# 9. Recommended Folder Structure

A clean Express project structure:

```
src
│
├── middleware
│     ├── errorHandler.js
│     └── asyncHandler.js
│
├── utils
│     └── AppError.js
│
├── controllers
├── routes
├── models
```

This structure keeps **business logic separate from error logic**.

---

# 10. Best Practices

1. Use a **global error handler**
2. Avoid repetitive `try-catch` blocks
3. Use an **async wrapper for routes**
4. Create **custom error classes**
5. Never expose **stack traces in production**
6. Maintain **consistent API responses**

Example response format:

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "User not found"
}
```