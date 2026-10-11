# Docker: 
    It is a open-source plateform used to create a lightweight common enviorment konwn as containers for the applications 

# Imgages: 
    It is a lightweight executable file that consists 1. Codebase, 2. Depedencies, 3. Node, 4. OS 

# Container: 
    Container is a executed/running instance of a image

# Implementation: 
    1. Creating a basic express server

    2. Now we have codebase, dependencies, node, os

    3. You can download dependencies using "npm install" if you have "package.json" and "package-lock.json"

    3. Creat docker file: dockerfile is blueprint of creating an image
        - FROM node:20-alpine -> Base image added, Node + Linux OS added 
        - COPY ./package.json . 
          COPY ./package-lock.json  . -> Copying dependencies file 
        - RUN npm install -> Installing dependencies
        - CMD ["node", "server.js"] -> Start server
    
    4. Run this commands
        - docker build -t <image_name> -> Creating image form dockerfile
        - docker run <image_name> -> Create container from image
        - docker run -p 8080:3000 <image_name> -> Port map
                      (host):(container) port numbers

    5. Stop and Delete container: 
        - docker ps -> List active container
        - docker stop <container_id>
        - docker rm <container_id>
        - docker ps -a -> List all the active + stopped containers

- Images are immutable if you made any mistake while creating dockerfile that you cant update the images using dockerfile
You can overwrite the whole image but you cant update some part of a image

- Imp: Docker containers are run in ISOLATED ENVIORMENT because it has its own OS hence it is a completely different enviorment, our local enviorment is different so we need to map port numbers

# Docker Stages: 
- Images are created in multiple stages, docker work in the most optimize way when you make changes any code it any pull those changes you've made not the whole 4 essentials again and again when you build the image

1. FROM node:20-alpine -> 1st Stage you will not change OS and Node frequently

2. COPY ./package-lock.json . -> 2nd Stage again less frequent changes
3. COPY ./package.json . -> 3rd less frequent changes

4. RUN npm install -> 4th stage less frequent

5. COPY . . -> 5th stage CodeBase has frequent changes 

Docker will only run 5th stage else stages are store in chache and docker will not run those intructions, less processing more efficient

Like if we download new dependencies then docker will continue instructions from 2nd stage to 5th

All the less frequent stages are stored in Cache in docker it wont run these command when user rewrite/build same image again and again 

# .dockerignore: 
    Write all the files you do not want to add into container such as .env, node_modules

# Docker Compose:

- It solves the most time taking process of updating images when any changes happened in code, It enables live runtime image updates when any changes happens in the code means there is no need to run "docker build . <image_name>" command again and again when changes happened in code

- We know most frequent changes happened in Codebase, we will link host machine's codebase with docker container's codebase for syncing live changes update

- docker-compose.yml

    services: // List all the services like frontend, backend, microservices 

    backend: 
        build: ./Backend // dockerfile path for creating image
        ports: 
            - "8080:3000" // Port mapping
        volumes: 
            - ./Backend: /app -> ./Backend ka pura code sync kardo container ke app folder ke sath jisme code ki saari files hai
        command: npx nodemon -L /app/server.js // this will reflect the changes
            - backend_node_modules: /app/node_modules // this node_modules folder will not sync hence mainted by docker container itself

    - run command "docker compose up" in day-65-II folder

