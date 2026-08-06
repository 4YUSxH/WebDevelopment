import { useContext } from "react"
import { AuthContext } from "../auth.context"
import { login, register } from "../services/auth.api";

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

    return {
        handleLogin, handleRegister, user, loading
    }
}