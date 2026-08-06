import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
})

export const login = async (username, password) => {
    const response = await api.post("/login", {username, password})
    return response.data
}

export const register = async (username, email, password) => {
    const response = await api.post("/register", {username, email, password})
    return response.data
}

export const getMe = async () => {
    const response = await api.get("/get-me")
    return response.data
}