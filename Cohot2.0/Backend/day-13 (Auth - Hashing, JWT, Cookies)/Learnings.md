=> Cookie storage client side hoti hai server iss storage mai kuch bhi read and write kar sakta hai.

=> Never store sensitive data in token like user's contact details, password, etc because we will store that token in cookies, generally we only store user._id in token

=> Only user can see cookies data from browser, and agar tumhe feel ho raha hai ki cookies se data leak ho jayega to tum chutiye ho cause cookie sirf uss specific client ke browser par hi save hogi aur ye tabhi leak ho sakta hai jab pura computer system hi compromised hai LOL

=> authRouter.post("/login", async (req, res) => { })
1. It is a function
2. More specifically it is a fat arrow function
2. More specifically it is a callbacck
3. More specifically it is a controller(wo callback jo /login api hit hone par hi execute ho)

=> Login api: When user want new token ex: want to access site in different device or browser etc
In auth.route.js: Agar email and password correct hai to new token create karke dedo client ko bas itna hi logic likhna hai 
1. authRouter.post("/login", async (req, res) => { }) // Create api
2. const {email, password} = req.body
3. const userExists = await userModel.findOne({ email }); // Check whether user exists or not  
4. if (!userExists) {
    return res.status(404).json({
      message: "User doesn't exsits",
    });
  } // Agar user exists nahi karta to api res bhejdo 
5. const passwordMatched = user.password === password; // Password ki condition check karo user input pass aur db mai stored pass same hona chaiye
6. if (!passwordMatched) {
    return res.status(200).json({
      message: "Invalid password",
    });
  } // Pass match nahi hua api res bhejdo
7. const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  ); // Token bana do cause dono condition satisfied hai
8. res.cookie("JWT_TOKEN", token) // Cookie mai store kardo token
9. res.status(201).json({
    message: "Logged in",
    token
  }) // Final api res bhejdo

=> Hashing: In the case of databreach(dataleak) it is helpful to keep safe all the stored passwords if we save those password using hashing algorithm
Plain text -> Hashing algo -> Hash string
1. With same plain text input we will get same hash string output
2. You cant convert Hash string into Plain text

Hashing implementation is in 'Hashing.md' file