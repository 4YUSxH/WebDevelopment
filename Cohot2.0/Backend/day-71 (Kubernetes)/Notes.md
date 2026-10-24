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

1. We mainly need to create deployment.yml, service.yml, and ingress.yml and apply them using commands for reflecting files into kubernetes

<!-- Kubernetes: Day-2 -->

1. A Pod can run multiple containers like main-server, redis, etc but we don't do this here, it is not recommanded

2. Delete pods: 
    a. kubectl delete pod express-deployment-5897776fc7-v4vtk
    Above command will delete pod after with grace-period 

    b. kubectl delete pod express-deployment-5897776fc7-v4vtk --grace-period=0 --force
    Above command will delete pod after without grace-period 

3. If you update .yml files then you need to use apply command for seeing changes, there is no real-time updates in kubernetes

# Commands

1. kubectl apply -f <path> : For applying changes in kubernetes

2. kubectl get pods : List all the active pods

3. kubectl delete pod <pod_name> : Delete pods

3. kubectl delete pod <pod_name> --grace-period=0 --force : Force delete pods with no grace time

4. kubectl top pods : List pods with resource usage, before run that we need Metric Server

# Metric Server: 

It is a component in Kubernetes, it does not installed by default we have to install it first, it monitor the resource usage of each pods

Watch .html sheryians notes for installation process, You'll find this in "Authscalling (HPA)" section

# Watch CLI Tool: 

This tool is used to run commands on the particular intervals

Command: while ($true) { Clear-Host; <your_command>; Start-Sleep -Seconds 2 }

Use above command in windows powershell

# Hey CLI Tool: 

This tool will send multiple requests to server, it is used for creating load on the server for testing auto scalling

Link: https://github.com/rakyll/hey

- Download the Windows 64-bit binary: hey_windows_amd64 from above link.

- Create a folder such as C:\Tools\hey.

- Rename the downloaded file to hey.exe.

- Move it into C:\Tools\hey.

- Open PowerShell and test it: cd C:\Tools\hey and .\hey.exe -h

- Test load: .\hey.exe -z 1m -c 100 http://localhost

- Run metric command "kubectl top pods" for monitoring resource consumptions of pods 

- Run "kubectl logs deployment/express-deployment --tail=100 -f" for seeing last 100 logs of server 

After running above command you will see logs, metrics, hammering by hey cli tool but currently we haven't implement any auto scalling so each pod will use all of its resource cpu and memory

# HPA (Horizontal Pod Autoscaler): 

This component will auto scale after the certain resource consumption 

command: kubectl autoscale deployment express-deployment \
         --min=3 \
         --max=10 \
         --cpu=50%
Enables auto scalling

command: kubectl get hpa
List hpa 

command: kubectl edit hpa
Edit hpa 

command: kubectl delete hpa <hpa_name> -n <namespace>
Delete hpa 

Pods will auto scale if cpu consumption exceeds 50, Minimum pods 3 and Maximum pods 10

This will automatically scaled Up and scaled Down pods based on load

Scale up will reflect instantly whereas Scale down take some times(5-15 mins) because kubernetes think traffic might come back 

How HPA works: HPA depend on Metric Server it fetched data from MS continuously and based on that data it add and remove pods 