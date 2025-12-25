import Men from './components/Men'
import Women from './components/Women'

function App() {
  // Conditional Rendering Code
  let user1 = {
    name : "Aayu",
    gender : "male"
  }
  let user2 = {
    name : "Aparna",
    gender : "female"
  }

  // Function Code
  let buttonfnc = () => {
    console.log("Button Is Clicked 🙌")
  }
  let divfnc = (a) => {
    console.log("Div Button Is Clicked 🙌", a)
  }
  return (
    <div>
      {user1.gender === "male" ? <Men /> : <Women />} {/* This is Conditional Rendering */}
      {/* {user2.gender === "male" ? <Men /> : <Women />} */}

      <button onClick={buttonfnc}>Click Me</button>
      {/* <button onClick={buttonfnc()}>Click Me</button> This will not work cause buttonfcd directly called it is in JS{}*/}

      <div className='btn' onClick={() => {       {/* We can also use like this */}
        divfnc(10);                               {/* We can pass Arguements */} 
      }}>Click Me</div>
    </div>
  )
}

export default App
