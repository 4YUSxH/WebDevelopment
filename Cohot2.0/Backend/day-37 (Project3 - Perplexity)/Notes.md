<!-- Day-34 -->
1.  userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});
// This code piece run before saving the user into database

2. userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};
// Above code will add comparePassword method in userSchema/userModel, whenever we find user from userSchema this method will also accessible.
Ex - const user = userModel.findOne({email})
     user.comparePassword("plain_text_password").then(isMatch => {})

3. 
// JS longHand
- const user = await userModel.create({
    username: username,
    email: email,
    password: password
});

// JS shorthand it is same as {username: username, ...}, Both are same thing 
- const user = await userModel.create({
    username,
    email,
    password
});

4. Implementing nodemailer: 
- Create new project on google cloud console
- Select created project

- Enable gmail API: API's and Services > Library > Search - Gmail > Click > Enable
- OAuth consent screen > Get Stared > Select App name > Enter User support email > Next > Audience - External > Contact Info > Finish

- Create credentials: API's and Services > Credentials > Create credentials > OAuth client ID > Application type - Web application > Add Authorised redirect URIs - URI1:-http://localhost, URI2:-https://developers.google.com/oauthplayground, Add domain(Production) URL also if available > Create > Save:- Client ID and Client secret in .env

- Generate refresh token: https://developers.google.com/oauthplayground/ > Click on gear icon > Tick mark right on "Use your own OAuth credentials" > Past Client ID & Client Secret > Close PopUp > Search:- Gmail API in left box > Gmail API v1 > https://mail.google.com/ > Console > Credentials > Select:- Web client > Audience > Add test user email(Choose that email address that you choose before) > Authorize email(Server can read & write in that email id) > Exchange authorization code for tokens > Copy refresh token
- npm i nodemailer

For implementing nodemailer we need these 4: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, GOOGLE_USER, in above steps we are generating those 4 things

5. Web servers ---> SMTP Servers
WS - is not able to send email
SMTP -  Simple Mail Transfer Protocol servers are able to send mails
- Web server communicate with SMTP server for sending mails, and Transporter is used for establishing communication between WS ans SMTP Server

WS ---> Transporter ---> SMTP
We provide mail data in html formate to transporter and transporter tells smtp server to send a mail

- Now those 4 keys are use for using google's smtp servers, we cant use smtp servers without any credentials cause they are not free 

6. Verification flow:
   - We send token with verification link
   - User click on that link 
   - After click req is send to server and server verify token, token store user'data
   - When token is verified we change verified:true 

<!-- Day35 -->

7. LangChain: It is a framework that helps developers build AI applications by connecting LLMs like GPT with tools, APIs, databases, and their own data.

- npm install @langchain/google-genai langchain

- model: "gemini-3.7-flash", // Selecting appropriate ai model, In ai.service.js  

8. GenAI: Generating new content on the basis of old data, content-video, audio, image, text, code

9. AI Service Provider:
   - Train the LLM
   - Hosting the LLM
   - Providing an APIs to access the LLM
These all three tasks required lots of resources such as money, time, storage, etc
Popular ex- OpenAI, Google, Microsoft, Anthropic, etc

<!-- Day-36 -->

1. While performing any kind of hydration the loading state will be true

2. Link vs Navigate
- Link - User has to click on link tag for redirection and it is a html <a> tag

- Navigate - It will prgramatically redirect the user without clicking

3. Socket.io in Frontend(Client) side: In this part we are connecting user with server via socket.io for establishing connection

- npm i socket.io-client
- Intialize socket server at client side

- chat.service.js - Intializing socket.io connection with backend
- useChat.js - Creating custom hook which return intialization code that we've created before in chat.service.js
- Dashboard.jsx - Establishing connection between frontend and backend on this page, when user loggedIn use will connected to backend via socket

<!-- Day-37 -->
1. Use small models for tiny tasks such as generating title for chat, so that we can minimize our pricing

2. SystemMessage: It is used for giving Instructions to ai such as "create title based on user's message"