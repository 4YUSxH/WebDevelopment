// Below code is default built in error handler provided by the express.js that prevent sever from crashing
// It will throw an error but in HTML formate
export const registerUser1 = async (req, res, next) => {
    try {
        throw new Error("server encounter an error while registering a user")
    } catch (err) {
        err.status = 400 // Status code
        next(err) // Passing error/control to errorHandler middleware
        // next() It will pass control to next normal middleware
    }
    // This will throw an error with status code 500 because you hard coded status in middleware(You will find old middleware code in comment)
}   

// Each controller has 'next' parameter even if you use or not use them, like they are always present in controller, if you want to use them write next in parameter and use

export const registerUser2 = async (req, res, next) => {
    try {
        throw new Error("Password is too weak")
    } catch (err) {
        err.status = 400
        next(err)
    }
}   