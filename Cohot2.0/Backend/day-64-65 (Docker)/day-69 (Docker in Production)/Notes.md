During development there will be two images(frontend, backend) but in Production there will be a single fullstack image

<!-- Performing bind mount -->
volumes:
    - ./Backend: /app # this will ignore .dockerignore file(lol irony) hence no it will copy all the files of Backend folder to app which is not good it will create dependencies errors because host machine will use different node and OS, it will overwrite the files
    # Link/Sync host machine Backend folder codebase with container app folder codebase

    - backend_node_modules: /app/node_modules
    # Docker will replace current node_modules folder(Added by the previous instruction) with Image's node_modules folder it will remove dependencies OS error

    # We already told docker to not read node_modules folder in .dockerignore file but Bind Mounts completely ignore this file, hence .env file also copied into container

    # Imp: We can copy .env file to container but it shouldn't copy into image, Because images are uploaded on AWS or online for development purpose whereas Container is local it is only available on Docker Desktop

# Now you cannot access frontend because you are using Vite:
Vite only accept traffic from same machine where it is running

    Frontend > vite.config.js -> host: "0.0.0.0",
    Above line tell vite, vite now you can accept traffic from any machine

# target: "http://localhost:3000" -> target: "http://backend:3000",

There is no backend's localhost exists, Because both services are running in different container now we have to transfer request to backend service container hence using "backend"(service name given in docker-compose.yml)

# Add this field if vite live code updation is not working: 
Frontend > vite.config.js > 
                            watch: {
                                usePolling: true
                            },

# Above concepts are for local development, there is different approach for production while working with AWS

<!-- Docker use in Production -->

1. Frontend > terminal: npm run build > dist > Copy to Backend name as pubilc > Serve public folder

- Now public folder contains html, css, js aka frontend of our application
- We need to automate above flow using docker
- After this Backend will server Frontend as well as APIs
- These public folder contains 3 files we can host it on cloudflare or s3 and use them from there or use our backend server if application is small

- Frontend & Backend: dockerfile -> Development
- Root folder: docker-compose.yml -> Development
- Root folder: dockerfile -> Production

# Multistage build in docker: 
    - dokcerfile - FROM keyword means new image stage created

    - We created two seprated images using docker-compose.yml for backend and frontend previously but this approach is only for development now we are seeing production 

    - Backend + Frontend dist folder which is copied in Backend folder name as public is enough to host a Fullstack application

    - create dockerfile in root folder

    - See dockerfile for further understanding

    - After this we can store this single fullstack image on AWS ECR and ECS for production