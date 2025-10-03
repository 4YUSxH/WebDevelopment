import Child from './Child.jsx'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleclick(){
    setCount(count+1);
  }
  
  return (
    <>
      <Child updatevalue={handleclick}text = "Click Me">
        <h1>{count}</h1>
      </Child>
    </>
  )
}

export default App
