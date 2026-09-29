<!-- Google OAuth -->

# Refer: https://github.com/ankurdotio/Difference-Backend-video/tree/main/025-googleoauth

# Intro: 
    Its an authentication method show as "Contiue with google"

# Flow: 
    1. Client/User -> Server (/auth/google)
    2. Client -> Redirect to Google
    3. Client -> Google (Authorization Request)
    * If client grant the permission *
    4. Google -> Clinet (Auth code provided to Client)
    5. Client -> Server (/auth/google/callback) // Clinet send auth code to server
    6. Server -> Google (Send code to google)
    7. Google -> Server (Google provide Client data to Server)
    8. Server -> Clinet (Token provided to Client)

Imp: Google doesnot send client's data to client, it send auth code to client so that client cant change/alter the data sent by google, It ensure data integrity

Client sent auth code to server and server sent that auth code to google and google verify the code and give client's data to server

# Prerequits: 
    1. Client ID
    2. Client Secret
You can generate these using "Google Cloud Console"

These two thing are generated cause google wants to verify who is asking for user's data, its obvious that google cant share data to anyone hence verifcation is required

# PassportJs: 
    Its an authentication middleware with more than 500 strategies
    You can implement google, github, azure, etc authentication strategies with this
    It made implmentation easier 

# Dependencies: 
    npm install express passport passport-google-oauth20 jsonwebtoken dotenv