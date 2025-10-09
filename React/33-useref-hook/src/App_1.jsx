import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 1st use of useRef
function App() {
  const [count, setCount] = useState(0)

  // let a = 0; Ye work nahi karega cause jab jab state change hogi ye code pura chalega aur 'a' agian intialize ho  jayega
  const a = useRef(0);//It will slove above problem, ab 'a' ki valuue across rerenders persistence(unchanged) rahegi 

  useEffect(() => {
    // a++;
    a.current = a.current + 1;
    console.log("Rerendering... Click Count");//Jab jab state variable change hota hahi rerendering(repaint) hota hai
    // console.log(`Value of a is: ${a}`);
    console.log(`Value of a is: ${a.current}`);
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// count is {a.current} we can't display 'a' like this cause jab bhi rerender hoga component 'a' change nahi ho payega, useState is appropiate for this, for more go to "https://react.dev/reference/react/useRef"