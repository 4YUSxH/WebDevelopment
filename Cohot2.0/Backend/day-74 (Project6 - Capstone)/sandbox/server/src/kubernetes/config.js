// This file configures the Kubernetes client and creates a CoreV1Api instance to interact with Kubernetes resources such as Pods, Services, ConfigMaps, and Namespaces

import * as K8sAPI from "@kubernetes/client-node"

const kc = new K8sAPI.KubeConfig()
kc.loadFromDefault()

export const k8sCoreV1Api = kc.makeApiClient(K8sAPI.CoreV1Api)