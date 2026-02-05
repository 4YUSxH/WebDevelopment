=> URI -> URI is same as normal URI
mongodb+srv://solo_db_user:<db_password>@cluster0.fhvqrv6.mongodb.net/
http://localhost:3000/

mongodb+srv : It is custom protocol developed by mongodb
solo_db_user : Username 
<db_password> : Password
@cluster0.fhvqrv6 : ClusterName.CluserID

Now you will understand when we connect express server to database why we run .connect("mongodb+srv://solo_db_user:<db_password>@cluster0.fhvqrv6.mongodb.net/db_name"), This will connect server to database name as db_name or it will create if db_name not found

-----------------------------------------------------------------------------

=> File Structure2 -> Follow FileStructure1 also 
In production we dont write db connection code in server.js, we only call that connectToDB() function in server.js, we write db connection code in database.js
1. src > config > database.js   

For creating 'Schema' we create a new folder name as 'models' and a file 'file_name.model.js'
2. src > model > file_name.model.js

-----------------------------------------------------------------------------

=> Schema -> Database has simple rules i will store your data but before that you have to tell me which type(format) of data you will store, and this process is called creation of 'Schema', and Schema is format and we will store our data in this format(Kis format mai data ko store karayenge usse schema kahenge), syntax below
const noteSchema = new mongoose.Schema({
    title : String,
    desc : String
})
If you try to store age, name etc in this schema's database it wont store cause we not defien schema for these extra data

-----------------------------------------------------------------------------

=> Model -> For performing any operations(CRUD) on database we have to create model, syntax below
const notesModel = mongoose.model("notes", noteSchema) // notes: Collection Name, noteSchema: Schema

Collection : Collection of data with same format(schema)
 
-----------------------------------------------------------------------------

=> Working with .env -> This will hide crucial informations
1. in env file, MONGO_URI = mongodb+srv://solo_db_user:<db_password>@cluster0.fhvqrv6.mongodb.net/, create varibale 
2. npm i dotenv
2. require("dotenv").config() in server.js, it will import all the variables
4. mongoose.connect(process.env.MONGO_URI), This is how we access variables