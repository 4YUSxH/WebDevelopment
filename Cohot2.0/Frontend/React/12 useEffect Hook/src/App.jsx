import React, { useEffect, useState } from 'react'
import App2 from './App2'
import App3 from './App3'
import Usecase1 from './Usecase1'

const App = () => {
  const [num1, setNum1] = useState(0)
  useEffect(function(){
    console.log("Har baar UI ke change hone par chalega")
  })

  return (
    <div>
      <h1>App</h1>
      <h1>{num1}</h1>
      <button onClick={() => {setNum1(num1+1)}}>Increase Num1</button>

      <br /><br />

      <App2 />

      <br /><br />

      <App3 />

      <br /><br />

      <Usecase1 />
    </div>
  )
}

export default App
