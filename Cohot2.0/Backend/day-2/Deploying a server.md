Dont push node_modules and .env files on github use .gitignore for preventing those files form pushing

Create a directory on github and add it on render.com 

Build comman -> npm i, as we do not push our node_modules(contain express code) to github, for downloading node_modules while deploying a server we have to run this command

Start command -> node serve.js, for starting a server

It will setup enviorment for server when server is live render will give to a URL
https://deploying-a-server-axwq.onrender.com