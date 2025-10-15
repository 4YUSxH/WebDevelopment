import { useState } from 'react'
import './App.css'
import Show from './Show.jsx'

function App() {
  const [count, setCount] = useState(0)
  console.log("App Comp");

  return (
    <>
      <Show></Show>      
    </>
  )
}

export default App

// Context API: Used for data centralization
// Required 3 things: 1). Context, 2). Provider, 3). useContext