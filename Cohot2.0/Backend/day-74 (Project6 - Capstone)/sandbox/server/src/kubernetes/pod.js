// Pod creation code that we used to write in yml

import { k8sCoreV1Api } from "./config.js";

export async function createPod(sandboxId) {
  // Consider this like deployment.yml
  const podManifest = {
    metadata: {
      name: `sandbox-pod-${sandboxId}`,
      labels: {
        app: "sandbox",
        sandboxId: sandboxId,
      },
    },
    spec: {
      containers: [
        {
          image: "template:v1",
          imagePullPolicy: "IfNotPresent",
          name: "sandbox-container",
          ports: [
            {
              containerPort: 5173,
              name: "http",
            },
          ],
          resources: {
            limits: {
              cpu: "500m",
              memory: "1Gi",
            },
            requests: {
              cpu: "250m",
              memory: "500Mi",
            },
          },
        },
      ],
    },
  };

  // Consider this like kubectl apply command
  const response = await k8sCoreV1Api.createNamespacedPod({
    namespace: "default",
    body: podManifest
  })

  return response
}
