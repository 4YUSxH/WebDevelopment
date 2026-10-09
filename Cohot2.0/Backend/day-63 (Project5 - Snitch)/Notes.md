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

# Aggregation Pipeline: 
  - It used when we want to perform complex operations on the data and Want to reterive data from more than one collections

  ex- For checking cart checkout price we dont rely on frontside data we will caclutate it on the backend side and then we send those calculated price to frontend, this type of complex calculation or operation is efficiently done by aggregation pipeline

  if we use normal js code for this calculaton task we need to perform
    cartModel.findOne -> .populate("products") -> Js code for calculation -> final result
    
  if we use AP
    AP for calculation -> final result

  Query operations from js cost more time and bandwidth whereas Query operations that take place within the database are more efficient and takes less time 

  imp - AP always returns final resulant data in array's of object

# Lookup Operators in AP: 
  imp - Generally we dont apply ap on the array data we convert them into objects/collection using $unwind then apply further operations 

  - $match - We can filter data on the basis of any field that matches with input

  - $unwind - Create documents for each fields 

  - $lookup - Reterive data from different collection

  - etc

# Razorpay: 
* Backend - 

  - It is a payment aggregator

  - RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET are required in .env

  - npm i razorpay

  - razorpay accept currency's smallest unit, in INR case smallest unit will be 1 paise and all the trasactions are done in paises

  - 1. Api: /payment/create/order - when user intiate the payment then a order is created with status: pending

  - 2. Api: /payment/verify/order - when user completed the payment and we got razorpay orderId, productId, signature we verify the payment using razorpay's util function and set status: paid after a successful transaction



* Frontend -
  - npm i react-razorpay

  - call "/payment/create/order" api on when user click on the "Proceed to pay" button, this api will create the order and show UI for payment to the user

  - After payment you will receive the orderId, paymentId and signature from the razorpay

  - This is for the frontend part, now we have to store data of payment in our backend so we also have a history of payment and payment status, also it is helpful in managing inventory and stocks 

We store payment data in multiple stages so that if user wants to complaint we can know whether the problem was occured on our website, or razorpay side, or bank side, or if upi then UPI app side 