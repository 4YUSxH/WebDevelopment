import './App.css'

function App() {
  const handelOnChange = (dets) =>{
    console.log(dets.target.value);
  }

  const handelOnClick = () =>{
    console.log("Heading is clicked");
  }
  return (
    <>
      <input onChange={handelOnChange} type="text" value="" />

      <h1 onClick={handelOnClick}>Click on this and see console</h1>
    </>
  )
}

export default App
// Its like a event handling but in react and all are Synthetic Events