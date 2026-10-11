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

    