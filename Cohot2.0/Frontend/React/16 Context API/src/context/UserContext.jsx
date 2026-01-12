import React, { createContext } from 'react'

export const UserDataContext = createContext()
const UserContext = (prop) => {
    let data = "Aayu"
    return (
        <UserDataContext.Provider value={data}>
            {prop.children}
        </UserDataContext.Provider>
  )
}

export default UserContext
