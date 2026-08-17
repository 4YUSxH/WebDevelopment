import dotenv from "dotenv";
dotenv.config();

const errorHandler = (err, req, res, next) => {
    const response = {
        message: err.message,
    };

    if (process.env.NODE_ENV === "development") {
        response.stack = err.stack;
    }

    res.status(err.status || 500).json(response);
};

export default errorHandler;