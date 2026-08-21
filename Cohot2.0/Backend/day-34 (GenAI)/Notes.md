1. Langchain: 
- It is used for establishing structred communication between, Server and ASP(AI Service Provider)

- Like we use mongoose for communicating to MONGODB from Server

- @langchain/core @langchain/google-genai langchain :- packages required for communcating with asp and we are using gemini this time, with you want to use different asp such as mistral, antrophic, opeai, etc download their package

2. readline: This package is use for taking input using terminal

3. GenAI Codebase: 
- Flow :- User -> Server -> ASP(Google Gemini)
               <-        <-

- AI requests are stateless means ai cant store chat history hence it cant give you questions that previsouly asked

There is no depedency of one request(message) on other request(message) while requesting(messaging) to AI

We maintain chat hisotry on server side and after implementing this server send the while history to ai hence ai can now give refer/see previous messages

