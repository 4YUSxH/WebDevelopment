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