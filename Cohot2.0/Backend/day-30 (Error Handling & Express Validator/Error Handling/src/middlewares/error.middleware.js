import dotenv from "dotenv";
dotenv.config()

// Error handling middlewares has 4 parameters
export const errorHandler1 = async (err, req, res, next) => {
    // res.status(500).json({
    //     message: err.message
    // }) This is hardcoded status code

    res.status(err.status).json({
        message: err.message,
        stack: err.stack // It show the file + line where error is occurred
    })
    // We only show stack in development not on production
}

export const errorHandler2 = async (err, req, res, next) => {
    const response = {
        message: err.message
    }
    console.log(process.env.NODE_ENVIRONMENT);
    
    if(process.env.NODE_ENVIRONMENT === "development"){
        response.stack = err.stack // it add stack to response when its app is in development 
    }

    res.status(err.status).json(response)
}