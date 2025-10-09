import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2nd use of useRef
function App() {
  const [count, setCount] = useState(0)
  const btnRef1 = useRef();//Making refernce of any element 

  useEffect(() => {
    console.log("Rerendering... Click Count");
    btnRef1.current.style.backgroundColor = "blue";//Giving properties to that refernce
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef1} onClick={() => setCount((count) => count + 1)}>
          {/* Above using btnRef to refer above element, It will button color to blue aka DOM manipluation without using actual(real) DOM*/}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       <button onClick={() => {btnRef1.current.style.display="none"}}>Change Me</button> 
       {/* Above regiving properties to btnRef1 and using it(btnRef1.current) refer above element, it will hide button on click*/}
    </>
  )
}

export default App
