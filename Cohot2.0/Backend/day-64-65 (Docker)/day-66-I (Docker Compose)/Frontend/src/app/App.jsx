import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [users, setUser] = useState([])

  useEffect(() => {
    axios.get("/api/users")
    .then(response => {setUser(response.data)})

  }, [])
  console.log(users)
  
  return (
    <>
    <h1>Users</h1>
    {users.map((user) => {
      return <li key={user.id}>{user.name}</li>
    })}
    </>
  )
}

export default App
