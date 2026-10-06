# config.js: 
    - This file contain all the enviormental variables code
    - config.js acts as a centralized configuration file
    - Now intruder cant change enviorment variables because intruder have to make changes in this file

# Proxy Set-Up: Only part of Development(vite server)
    - vite.config.js: 
        server: {
    proxy: {
      "/api": {
        // Froward api starts with /api
        target: "http://localhost:3000", // To this
        changeOrigin: true,
        secure: false, // 'http' clients can also make requests
        // secure: true, // only 'https' clients can make requests
      },
    },
  },

  - auth>service>auth.api.js:
        baseURL: "http://localhost:3000/api/auth",
        TO
        baseURL: "/api/auth",
    It will automatically takes host and port from frontend server 
 
    -
Browser
   |
   | /api/auth/user
   ↓
Vite :5173
   |
   | proxy
   ↓
Express :3000
   |
   ↓
MongoDB

Browser is making requests to 5173 port and that port transferring requests to 3000, hence no cross origin request means no cors error

The main reason of using proxy is development convenience

You can use CORS package if you want

# Google OAuth Flow:  
  - When use click on "Continue with google" button he will redirect to /api/auth/google and this api take him to server and server again redirect user to google server for selecting account and take permission from user

  - After permission grant user redirect to /google/callback and now user is on server and user has auth code and passport.authenticate() this middleare sent user's auth to google for verification and google return data to server in req.user and this middleware transfer control using next() to googleCallbackController on in this controller we can perform register and login  

# Never desturucture properties while using useSelector: 
  good way: const products = useSelector(state => state.product.allProducts)

  bad way: const {allProducts} = useSelector(state => state.product)

# Attributes: 
  attributes: {
    type: Map,
    of: String
  }
  attributes is a Mongoose Map where the keys can be dynamic, but all values must be strings.

# FormData: 
  We have to use formData while working with files in axiox, it forward files from frontend to frontend, Objects are not supported in formData use JSON.stringfy(obj) to convert them into string

# Dao File: 
  - A DAO (Data Access Object) file is a design pattern used in software development to abstract and encapsulate all access to a data source. The DAO provides an interface for performing CRUD (Create, Read, Update, Delete) operations on the underlying database or data storage system without exposing the details of the database implementation to the rest of the application.

  - Basically it centralize all the CRUD operations related to database so its become easy to debugg code related to database, only dao file interact with database in good codebase means controller cant interact with database directly they have to use dao files for that

# Comparing Mongoose IDs: 
// item.product.toString() === productId &&
// item.variant?.toString() === variantId

  - we need to convert the product and variant IDs to strings for comparison because they are stored as ObjectIds in the database. The `toString()` method is used to convert them to string format, allowing for accurate comparison with the provided `productId` and `variantId` parameters.

