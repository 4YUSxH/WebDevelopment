import { createContext, useState, useEffect } from "react";
import { login, register, getMe } from "./services/auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null) // null since no user logged-in in start
    const [loading, setLoading] = useState(false)

    const handelLogin = async (username, password) => {
        setLoading(true) // while user logged-in loading screenn will show, and this is not directly change UI

        try{ // try to set usre
            const response = await login(username, password) // this login function will return response.data
            setUser(response)
        }
        catch(err){ // if user not logged-in
            console.log(err);
        }
        finally{ // when user logged-in loading screen hide
            setLoading(false)
        }
    } 

    const handelRegister = async (username, email, password) => {
        setLoading(true)

        try{
            const response = await register(username, email, password)
            setUser(response)
        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{user, loading, handelLogin, handelRegister}}>
            {children}
        </AuthContext.Provider>
    )
} 