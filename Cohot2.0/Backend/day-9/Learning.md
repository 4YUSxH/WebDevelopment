=> MongoDB Methods: 

1. Create -> This will create a new data in database
2. find -> This will return all the data from database in the form of array of objects
3. findByIdAndDelete -> This will delete specific id mentioned data in database  
4. findByIdAndUpdate -> This will update specific id mentioned data in database

-----------------------------------------------------------------------------

=> How to api from fronted without using Postman:
Use 'Axios' package for calling api, Axios is based on REST principles we can use all the REST mehtod with axios eg get, post, patch etc

-----------------------------------------------------------------------------

=> CORS(Cross-Origin Resource Sharing) : It is an error, Access to XMLHTTPRequest at 'http://localhost:3000/api/notes'(Backend) from origin 'http://localhost:5173'(Frontend) has beeen blocked by CORS policy.

Frontend and Backend part treated as different websites and we cannnot access different site without leaving orgin site, CORS policy provide security eg imagine you are using a browser and using net banking and you can transfer money using this netbanking site and suppose there is a hacker and uss hacker ne usne uski website par tumhe bula liya and uski website mai background mai ek script run kardi and ye script tumhare bank ke server par request karti hai ki iske account mai jitna bhi amount hai sab mere account mai transfer kardo, isike protection ke liye CORS policy hai
 
CORS policy implemanted on client(browser) side

Conclustion: Aap ek website par rahte hue dusri website par request nahi kar sakte 

Another ex: Bank site(bank.com) and Hacker site(xyz.com) you cannot request on bank.com at the same time using xyz.com, we cannot perform cross origin request

-----------------------------------------------------------------------------

=> Configuring server from accepting CORS: Dont use this in prduction in productin we only allow our backend site and frontend site for CORS but in development we allow any site for CORS

1. npm i cors
// In app.js
2. const cors = require("cors") 
3. app.use(cors()) // It is a middleware

-----------------------------------------------------------------------------

Re-rendering React UI -> Whenever any state(setstate()) is changes that component's whole UI gets re-render hence the whole code re-run and APIs being called again and again, for stopping Api calling on re-rendering we use useEffect with empty dependency array, Calling Api once elimate the extra burden on site whenever re-render happen

-----------------------------------------------------------------------------

axios.post("http://localhost:3000/api/notes", {This position for request.body}).then((res) => {console.log(res)})