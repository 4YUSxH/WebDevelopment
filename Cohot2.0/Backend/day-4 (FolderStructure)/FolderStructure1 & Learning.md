Backend folder structure is kinda complex we will learn it step by step along with time.

Start with 'src' folder in Root folder and create app.js(src > app.js)
app.js -> This file contain two works 1. Server create karna, 2. Server ko config karna e.g. using middleware

Create server.js in root folder
server.js -> main work server ko start karna

module.exports = app // Export app.js file

const app = require("./src/app") // Import app.js file in server.js

-----------------------------------------------------------------------------

We can create custom command for 'npx nodemon server.js' using package.json 
{
  "name": "day-4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "npx nodemon server.js" // When we type 'npm run dev' in terminal this comman will execute
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.2.1"
  }
}

-----------------------------------------------------------------------------

app.delete("/notes/:index", (req, res) => {
    notes.splice(req.params, 1)
})
:index is dynamic user will hit this api with any index value 

request.para -> URL mai jis index value se api hit hua hai wo value isme store hota hai, value could be string, number etc, conclustion: request.param ki help se single data(small data) ko client side se server side transfer kar sakte hai 

-----------------------------------------------------------------------------

app.delete("/notes/:index", (req, res) => {
    console.log(req.params);
    
    delete notes[req.params.index]

    res.send("Note deleted successfully")
})
In backend when we use 'delete' mathod tab koi bhi data generally completely delete nahi hota hai wo uss data ko 'null' se replace ho jata hai 

:index -> if you put any random string or number greater than length of array nothing will happens(no changes), code chalega par kuch delete nahi hoga cause delete karne ke liye hai hi nahi 

-----------------------------------------------------------------------------

PUT vs PATCH -> Use PUT when you want to update whole data, Use PATCH when you want to update some fields, Ex: 
{
  "name" : "Aayu"
  "age" : "21"
}
If you want to only 'name' use PATCH , if you want to update both 'name' and 'age' fields use PUT

-----------------------------------------------------------------------------

Deployment issue related to github file structure -> Main directory > day-1, day-2, day-3, so on
                                                     On render.com while uploading server you will see a inpute name as 'Root directory' fill that input with your folder name which folder you want to deploy like day-2 etc
Using this we can upload server using a specific folder, for more info watch "Backend Day-88 REST API" last section 

-----------------------------------------------------------------------------

Why do we need DB(DataBase) -> 
In this day-4 small task code when we restart server all the previous stored changes vanish, for storing these data we need database