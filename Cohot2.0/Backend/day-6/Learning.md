=> When we use database server.js file now has two works : 1. Server creata kana, 2. DB se connect karna

=> Cluster -> Storage + Proccesor, It is combination of 2 things, in free tier in mongodb atlas we get 512mb storage(RAM) and shared cpu(processor) and we can choose any server location like america, india etc

=> Cloud -> We store our database on cloud for cloud service we use 'MongoDB Atlas'

=> MongoDB Atlas is a company that provide noSQL database servers across the globe, MongoDB Atlas ne puri duniya mai db server create kar rakhe hai and hum india ke kisi server mai chota sa free cluster create kar rahe hai for our application and we store our database on that cluster and one cluster can contain more than one databases(Ek cluster ke andar multiple database ho sakte hai) 


=> How to create db :-
1. First login atlas and create a project
2. Than create a cluster    
3. Select region(Mumbai, North Virgina, etc)
4. Now we get a pop up(If no go to Database Access) that ask us to create database user, after this we will get a password and username with using this credentials we can connect to database
5. Navigate to 'DATABASE' > 'Cluster' and connect db to 'Compass' after that you will get a Connection String 

=> For security of database we use two layer security -> 1. Network Access Layer : In this layer we list IP Address that can to connect to database, 2. Database Access Layer: There are three roles in this I. Database admin, II. Read and Write to any database, III. Only read any database

=> MongoDB Compaass :- GUI tool to view database 
1. Click on 'Add new connection', This Connection String will connect Compass to MongoDB Database's Cluster that allocated in mumbai region 
2. Add Connection String in URI

=> Connection of server and database(Located in mumbai region)
1. npm i mongoose
2. mongoose.connect("URI") as we know URI connect compass to cluster but whenever we write mongoose.connect("URI/db_name") it will connect express server to database if that db_name database not created then it will automatically create that database name as db_name, 
ex: I. mongoose.connect("mongodb+srv://solo_db_user:iWRqMq6KfIAElUc9@cluster0.fhvqrv6.mongodb.net/"), this has no use for connection server to database, II. mongoose.connect("mongodb+srv://solo_db_user:iWRqMq6KfIAElUc9@cluster0.fhvqrv6.mongodb.net/day-6") day-6 is database name
3. .connect() method will return a promise cause we are conecting our local machine server to mumbai based database and we dont now how much time it will take to establish the connection 

=> Never ever push your URI, credentials on  the github put them in .env and put .env in .gitignore 