<!-- Day - 1 -->

# Sandbox Service: 

1. This service will manage(creation and deletion) pods for each user

2. sandbox-service.yml: 
    - livenessProbe -> These are health check apis where kubernetes hit for checking pod is live or dead means pod is working or not
    
    - readinessProbe -> It tell kubernetes that server is ready to serve or not

<!-- Day - 2 -->

# template folder: 

1. This folder contain react template and we've created an image of template so that pods can use this run this image 

# sandbox/server/src/kubernetes: 

1. @kubernetes/client-node: This npm package lets you control and manage a Kubernetes cluster directly from your Node.js or TypeScript application using JavaScript code, instead of running kubectl commands manually

2. pod.js: Creating pods 

3. service.js: Creating service component so that traffic can transfer to pods

4. k8s/rbac.yml: Kubernetes do not provide access to a pod for creating another new pods or services but we want to do this, for this we create a file name as rbac.yml we will provide permission to sandbox pod so that it can create new pods and services

# Security Problems: 

A user can access different user's container while using his terminal provided for accessing and making changes only in his container but that's and ideal condition user can also be a hacker

1. gVisor and Firecracker are technologies used to isolate applications from the host system, but they work differently, use gVisor for small scale and Firecracker for big scale projects

# Always use new images after updating the code: 

Create new image with new tag and that image to deployment

# http-proxy-middleware: 

http-proxy-middleware package is used to forward HTTP requests from one server to another server