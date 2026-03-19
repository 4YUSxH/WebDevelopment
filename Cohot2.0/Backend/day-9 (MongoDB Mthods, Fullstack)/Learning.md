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

=> Re-rendering React UI -> Whenever any state(setstate()) is changes that component's whole UI gets re-render hence the whole code re-run and APIs being called again and again, for stopping Api calling on re-rendering we use useEffect with empty dependency array, Calling Api once elimate the extra burden on site whenever re-render happen

-----------------------------------------------------------------------------

=> axios.post("http://localhost:3000/api/notes", {This position for request.body}).then((res) => {console.log(res)})

-----------------------------------------------------------------------------

=> Deployment -> We host our website on backend server url using wildcard route ex: http://localhost:3000/
1. npm run build: Run this command in frontend terminal this convert whole react project into html, css and js files in 'dist' folder
2. In backend folder create 'public' folder and move that all three files with exact folder strucutre as it is in dist  from dist to public
3. Create wildcard route in app.js app.use('*name', (req, res) => {res.send("This is wildcard)}) it is a middleware that will handel apis that we have not created ex: http://localhost:3000/dfsjhl 
4. In response send index.html file, res.sendfile("file_absolute_path"), use "path" package for hiding absolute path,
   res.sendFile(path.join(__dirname, "..", "/public/index.html")) // __dirname: Path of current working directory
5. app.use(express.static("./public")), Now this public folder is publically available we can access it ex: http://localhost:3000/index-BffdtEXD.js, in same way we can access any public folder files




// In index.html
<script type="module" crossorigin src="/assets/index-BffdtEXD.js"></script> // Index req Js
<link rel="stylesheet" crossorigin href="/assets/index-DPWrEUms.css"> // Index req Css
Ye two line request karti hai backend par ki ye files mujhe response mai send kardo inki request kuch aesi dikhti hai 1. http://localhost:3000/assets/index-BffdtEXD.js, 2. http://localhost:3000/assets/index-DPWrEUms.css, aur humne humare server ko aese wildcard route ke lite program kiya hai ki index.html response mai bhej dena islie inn dono ki request mai bhi response mai index.html file chali jayegi jisse css and js file nahi jayegi aur page mai sird html hoga, for sending correct file when index request we use a middleware app.use(express.static("./public"))

app.use(express.static("./public")) // Jo bhi public folder ki files(html, css, js) hai unko publically avialable karwa deti hai hence inn files ko koi bhi access kar sakta hai, ab jab index se css js file ki req 1. http://localhost:3000/assets/index-BffdtEXD aati hai to http://localhost:3000 yaha tak to server ka url hai /assets/index-BffdtEXD yaha se middleware check karega assests ke andar index-BffdtEXD.js file hai ya nahi hogi to res mai send kar dega aur req aage forward nahi karega aur agar nahi milli file to req ko aage forward kar dega aur wo request aage wildcard route mai handel ho jayegi, same for css 

Backend ki url par frontend load karwa diya jisse do server(for frontend and backend) buy karne ki need hai sirf backend ko deploy karo frontend sath mai hi deploy ho jayega, ye primary and const effective way hai par aur bhi ways hote hai fullstack deployment ke 