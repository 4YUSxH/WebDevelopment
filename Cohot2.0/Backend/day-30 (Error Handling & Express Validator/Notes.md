<!-- Error Handelling -->
1. Use .js while using import in path

2. Built-in error handler in express throw an error with HTML formate but we need JSON for sending response

3. Error handling prevent server from crashing 

4. next(err): Passing error/control to errorHandler middleware
   next(): It will pass control to next normal middleware

5. err.status(): Used to show status code on client side

6. err.stack: In which file and line error was occurred

7. Always use error handling middleware in last in app.js

Note: We don't show error on client side for preventing this use 'Environment(.env)', show error only in development and not on production

How to setup environment: 
1. import dotenv, but when you use import dotenv will only work in that file, we will fix it later so that all file can access dotenv variables
2. create a variable NODE_ENVIRONMENT=development
3. Add condition if(NODE_ENVIRONMENT==="development") in middleware it show stack only in development not on production 

<!-- Express Validator -->
1. It used to verify data before saving data into database, cause DB operation required more resources such as time, money, etc

2. There are several methods like isEmail(), isString(), etc in express-validator 

3. body: Which data you want to verify/check, body("username"), body("email"), etc

3. withMessage: Which message you want to show when data is not verified 

4. Using arary you check multiple fields like [body("username"), body("email"), ...etc]

5. Create validate function check whether error isEmpty or not, if empty than return next() means all good, if not empty means there are errors show errors in array form