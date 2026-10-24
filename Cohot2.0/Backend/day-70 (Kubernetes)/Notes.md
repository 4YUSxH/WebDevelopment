<!-- Kubernetes: Day-1 -->

# Defination: 

Kubernetes (K8s) is a container orchestration system. It manages how your Docker containers run — making sure the right number are running, restarting them when they crash, routing traffic between them, and scaling them up when load increases. You describe what you want in YAML files and Kubernetes makes it happen

# Uses

1. It is mainly used for automatic horizontal scaling, its automatically spin up and spin down multiple servers based on load on application, it also automate the deployment and management of containerized applications, and provide high availability and efficient resource utilization

2. Automate the deployment: While deploying new versions of an application we need to down whole server before pushing code to production and this cause downtime, when we use kubernetes for this then there is now place for any downtime while pushing code to production because it transfer traffic to new versions of application from the old version after the successful transfer it will spin down all the old versions servers

# Kubernetes Components

1. Cluster: A cluster in Kubernetes is a group of computers (machines) that work together to run and manage your application

2. Pod: A Pod is the smallest deployable unit in Kubernetes. It contains one or more containers that run your application

3. Deployment: A Deployment in Kubernetes manages your Pods, You tell it what image to run, what resources each pod needs, and makes sure the desired number of application instances are running. If a pod crashes, Deployment creates a new one. If you update the image, it does a rolling update with zero downtime

Basically - What image run, How many resources a pod need, maxReplicas, MinReplica

MinReplica = 2 -> Two Pods are always in running condition in any case
MaxReplica = 10 -> Upto 10 pods can be created during the loaded application

4. Replica Set: A ReplicaSet is the component that guarantees N copies of your pod are always running. If a pod crashes, ReplicaSet creates a replacement. If you have too many pods, it deletes extras. You almost never create a ReplicaSet directly — a Deployment creates and manages a ReplicaSet for you, and also handles rolling updates and rollbacks on top of it

5. Service: Pods are temporary — they crash and restart with new IP addresses. A Service gives you a stable endpoint that never changes. It finds pods using label selectors and load balances traffic across all matching pods automatically. When a pod is added or removed, the Service updates its list instantly

6. Ingress: An Ingress resource is a set of HTTP routing rules written in YAML. It says things like: "traffic for express.local/ should go to express-service" or "traffic for express.local/auth should go to auth-service". The Ingress itself does nothing — it only works when an Ingress Controller is installed to read and act on these rules, It mainly transfer traffic to its destination

7. Ingress Controller: The Ingress Controller is a pod running nginx inside your cluster. It watches all Ingress resources and configures itself to route traffic according to those rules. Without the controller, your ingress.yaml is just a config file sitting there doing nothing. The controller is what makes it actually work

# Implementing Kubernetes(K8S) for Local Deployment: 

There is no production(AWS/Cloud Provider) involved for now

1. We mainly need to create deployment.yml, service.yml, and ingress.yml