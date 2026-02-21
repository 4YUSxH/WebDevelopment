=> Authentication = Pata karna ki user kon hai, means kis user ne server par request ki hai(Watch: Img1)

=> Authentication Implementation:
1. User sabse pahele register karega using /register api and registration ke time user uska data(username, email, password) send karga jo req.body mai hoga and server iss data ko DB mai save kar lega
2. After 1 step server token create karega and uss token mai user ka data(generally userId) hoga aur ye token server store nahi karta isse user ko response mai send kar dega and cookies mai store kar dega ye token

After completing registration ab jab bhi user request karega usse ye token send karna hoga with each request and it is mandetory, server ke paas cookie storage ka access(read, write) hota hai aur humne token wahi store kiya hai islie server direct cookies storage mai store token ko read kar lega aur token mai user ka data hai jisse user identify ho jayga server ko (Watch: Img2)

=> auth.route.js: This file only handel authentication(register, login, logout) routes(apis)

=> express.Router(): app.js file ke bahar kisi dusri file mai api create karne mai help karta hai 

=> app.use("/api/auth", authRoute): express.Router() se create hui jitni bhi apis hai unhe intregate karna padta hai app se sath and .use() ka use karte hai intragartion ke liye, '/api/auth': Jitni bhi apis create hogi authRoute ki help se unn apis ko call karne ke liye /api/auth prefix lagana jaruri hai 

=> jwt.sign({Here pass data that is unique and it is user's data as object}, process.env.JWT_SECRET, {expiresIn: "1h"})

=> expiresIn: User ka token kitne time tak valid rahega or user ko kitne time baad firse token regenerate(Login) karna hoga

=> const decoded = jwt.verify(token, process.env.JWT_SECRET): This verify the token means token jo aaya hai request mai wo humare hi server ne hi create kiya tha kya, agar token genuine hai to ye jo token mai data hoga usse return kar dega 