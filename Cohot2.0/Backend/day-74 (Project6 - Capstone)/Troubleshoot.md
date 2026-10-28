
# Troubleshooting and deployment runbook

## What was fixed

### 1. Deployment stuck in `Progressing`

The Pod was `Running` but not `Ready`. The Deployment events showed that
the readiness and liveness probes could not connect to port `3000`.

The container logs showed that the old `sandbox:latest` image was crashing
inside `undici` while running Node 20:

```text
TypeError: Cannot read properties of undefined (reading 'bind')
Node.js v20.20.2
```

The container was also running `nodemon`, which is intended for development,
not for a Kubernetes production container.

The fix was:

- Add a `start` script that runs `node server.js`.
- Run `npm ci --omit=dev` in the Docker image.
- Run `npm start` instead of `npm run dev`.
- Use versioned image tags such as `sandbox:v1`, `sandbox:v2`, and so on.
- Add a startup probe and keep readiness and liveness probes separate.

### 2. JavaScript error: `IfNotPresent is not defined`

Kubernetes values inside a JavaScript object must be strings:

```js
imagePullPolicy: "IfNotPresent"
```

The Pod manifest also needed the Kubernetes field names:

```js
containers: [...]
ports: [...]
```

The Pod label was changed from `apps: "sandbox"` to `app: "sandbox"` so
that it matches the Service selector.

### 3. Delete a generated sandbox

The server now has a DELETE endpoint. It deletes the generated Pod and
Service using the `sandboxId` returned by the start endpoint.

```text
DELETE http://localhost/api/sandbox/<sandboxId>
```

## After making server code changes

Use a new image tag for every change. Do not rely on rebuilding an existing
`latest` tag because Kubernetes may continue using the image already loaded
on its node.

From the server directory:

```powershell
cd C:\Users\dkewa\Desktop\Capstone-2\sandbox\server

node --check src\app.js
node --check src\kubernetes\pod.js
node --check src\kubernetes\service.js

docker build --no-cache -t sandbox:v5 .
kubectl set image deployment/sandbox-deployment `
  main-sandbox-container=sandbox:v5
kubectl rollout status deployment/sandbox-deployment
```

Increment the tag for the next change (`sandbox:v6`, `sandbox:v7`, etc.).

For a `kind` cluster, load the image before updating the Deployment:

```powershell
kind load docker-image sandbox:v5
```

For Docker Desktop Kubernetes, the image is normally available directly to
the cluster. If the Pod reports `ImagePullBackOff`, check the active Docker
context and load the image into the cluster runtime before retrying.

## Diagnose the same Deployment problem

Run these commands:

```powershell
kubectl get deployment sandbox-deployment
kubectl get pods -l app=sandbox -o wide
kubectl describe deployment sandbox-deployment
kubectl describe pod -l app=sandbox
kubectl logs deployment/sandbox-deployment --tail=100
```

Check for:

- `READY` less than the desired replica count.
- `Readiness probe failed`.
- `Liveness probe failed`.
- `connection refused` on port `3000`.
- Application crash messages in the container logs.
- An old image tag in the Pod description.

If the application is healthy locally but the Pod has connection-refused
errors, confirm that the server listens on port `3000` and that the health
route exists:

```text
GET /api/sandbox/health
```

The expected response is HTTP `200`:

```json
{"message":"Sandbox API is healthy"}
```

## Access the API without a port

The NGINX Ingress routes `/api/sandbox` to `sandbox-service`, which forwards
traffic to the server on port `3000`.

Apply the routing resources if necessary:

```powershell
cd C:\Users\dkewa\Desktop\Capstone-2
kubectl apply -f .\k8s\sandbox-service.yml
kubectl apply -f .\k8s\ingress.yml
```

Test the API at:

```text
http://localhost/api/sandbox/health
```

Do not use port `3000` when going through Ingress:

```text
http://localhost/api/sandbox/start
```

## Create and delete a sandbox

Create one:

```text
POST http://localhost/api/sandbox/start
```

Save the `sandboxId` from the response, then delete it:

```text
DELETE http://localhost/api/sandbox/<sandboxId>
```

Manual cleanup, if the API is unavailable:

```powershell
kubectl delete pod sandbox-pod-<sandboxId>
kubectl delete service sandbox-service-<sandboxId>
```

## Confirm a rollout succeeded

```powershell
kubectl rollout status deployment/sandbox-deployment
kubectl get deployment sandbox-deployment
kubectl get pods -l app=sandbox
kubectl logs deployment/sandbox-deployment --tail=20
```

The successful state is:

```text
Deployment: READY 1/1, AVAILABLE 1
Pod:        Running, READY 1/1, RESTARTS 0
```

# Delete a sandbox

The start API returns the `sandboxId` used to name the generated Pod and
Service. Delete both resources with:

```text
DELETE http://localhost/api/sandbox/<sandboxId>
```

For example:

```text
DELETE http://localhost/api/sandbox/01a17e15-9bf2-759e-aa1b-3a05d909facc
```