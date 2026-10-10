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

Images are immutable if you made any mistake while creating dockerfile that you cant update the images using dockerfile
You can overwrite the whole image but you cant update some part of a image

Imp: Docker containers are run in ISOLATED ENVIORMENT because it has its own OS hence it is a completely different enviorment, our local enviorment is different so we need to map port numbers

Images are created in multiple stages 