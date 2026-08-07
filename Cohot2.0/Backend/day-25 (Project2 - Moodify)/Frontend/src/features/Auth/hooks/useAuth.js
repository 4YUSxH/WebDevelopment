import { useContext } from "react"
import { AuthContext } from "../auth.context"
import { getMe, login, register, getMe } from "../services/auth.api";

export const useAuth = () => {
    const {user, setUser, loading, setLoading} = useContext(AuthContext)

    const handleLogin = async (username, password) => {
        setLoading(true)
        const response = await login(username, password)
        setUser(response.user)
        setLoading(false)
    }

    const handleRegister = async (username, email, password) => {
        setLoading(true)
        const response = await register(username, email, password)
        setUser(response.user)
        setLoading(false)
    }

    const handleGetMe = async () => {
        setLoading(true)
        const response = await getMe()
        setUser(response.user)
        setLoading(false)
    }

    return {
        handleLogin, handleRegister, handleGetMe, user, loading
    }
}