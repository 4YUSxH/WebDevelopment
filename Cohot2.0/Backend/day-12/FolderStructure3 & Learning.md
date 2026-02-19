Day-10 and 11 are implemented in Day-9, Day-9 had takes 3 days to complete therefore this is Day-12

=> FolderStructure3: 2 new folders will be introduced
1. routes > auth.route.js 
In auth.routh.js file we use 'express.Router()' for creating route(api) in other files means app.js ke alawa kisi aur file mai api create karni ho to use hota hai

=> Authenticatio: 

I. Save user's data
In auth.route.js file
1. Create 'register' api
2. Save user's data in db
3. Export this file and use it in app.js
4. In app.js: app.use("/api/auth", authRouter) we have to use /api/auth prefix for hitting this api auth api means hit /api/auth/register

II. Create token with user's data and sign token with JWT_SECRET
1. npm i jsonwebtoken
In auth.route.js file
2. import jsonwebtoken
3. Go to jwtsecret.com for generating secure jwt secret, go for 256bits size for good security and less processing time
4. Create JWT_SECRET variable in .env
5. const token = jwt.sign( // Creating token and Signing token with jwtsecret
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
token = user's data + jwtsecret
Token is just a strign that contain user's data, paste token into www.jwt.io for seeing token's stored data
Token only created in two secnarios 1: when user register, 2: when user log in

III. Now after registeration whenever user request anything to server each req should contain token for this we use storages(cookies)
Cookies: Ye storage client side rahti hai par iska pura access(read & write) server ke paas rahta hai therefore this storage is used for sending token in each requests
1. npm i cookie-parse
2. import it in app.js and use as a middleware app.use(cookieParser)
In auth.route.js
3. res.cookie("jwt_token", token) // Setting cookie
Now to go to postman and click on cookies you will find a cookie name as 'jwt_token'

=> email: {
        type: String,
        unique: [true, "Here write error message and it will show in console"]
    },
Ek email se ek hi user create hoga 
When user hit this api it will show 500 internal server error to user but we dont show this server error to user therefore we write in auth.route.js for sending custom error to client, const isUserAlreadyExists = await userModel.findOne({ email });

=> findOne(): This method find data on the basis of any condition, ex: findOne({email}) db mai iss email(user dega req,body mai) ke basis par agar koi data mile to le aao 

=> We use /api before all the endpoints so that we can distinguish backend and frontend routing