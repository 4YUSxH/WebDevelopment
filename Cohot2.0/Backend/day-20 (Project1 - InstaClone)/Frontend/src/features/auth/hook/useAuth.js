import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { getMe, login, register } from "../services/api.auth";

export const useAuth = () => {
    const context = useContext(AuthContext)

    const {user, setUser, loading, setLoading} = context

    // We aren't directly calling api, we call api via auth.api.js
    const handelLogin = async (username, password) => {
        setLoading(true) // Managing state layer

        const response = await login(username, password) // Managing api layer
        setUser(response.user)

        setLoading(false)
    }

    const handelRegister = async (username, email, password) => {
        setLoading(true)

        const response = await register(username, email, password)
        setUser(response.user)

        setLoading(false)
    }

    return{
        user, loading, handelLogin, handelRegister
    }
}