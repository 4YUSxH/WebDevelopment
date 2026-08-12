const jwt = require("jsonwebtoken")
const redis = require("../config/cache")

const identifyUser = async (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message: "Token is not provided"
        })
    }

    const isTokenBlacklisted = await redis.get(token)
    if(isTokenBlacklisted){
        return res.status(401).json({
            message: "Invalid credentials"
        })
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode);

        req.user = decode
        next()
    }catch(err){
        console.log(err);
    }
}

module.exports = identifyUser