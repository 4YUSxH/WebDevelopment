import express, { urlencoded } from "express"
import morgan from "morgan"
import { v7 as uuid } from "uuid";
import {createPod} from "./kubernetes/pod.js"
import {createService} from "./kubernetes/service.js"

const app = express()

app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(morgan("dev"))

app.get("/api/sandbox/health", (req, res) => {
    res.status(200).json({
        status: "Ok"
    })
})
app.get("/api/sandbox/ready", (req, res) => {
    res.status(200).json({
        status: "Ready"
    })
})

app.post("/api/sandbox/start", async (req, res) => {
    const sandboxId = uuid()

    await Promise.all([createPod(sandboxId), createService(sandboxId)])

    return res.status(201).json({
        message: "Sandbox environment created successfully",
        sandboxId,
        previewUrl: `http://${sandboxId}.preview.localhost`
    })
})

export default app