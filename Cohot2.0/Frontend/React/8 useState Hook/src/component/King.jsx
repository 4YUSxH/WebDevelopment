import React, { useState } from 'react'

function King() {
  const [king, setKing] = useState("Rishab")
  const changeking = () =>{
    console.log("King Changed")
    if(king === "Rishab") setKing("Aayu")
    else setKing("Rishab")
  }
  return (
    <div>
      <h1>{king}</h1>
      <button onClick={changeking}>Change King</button>
    </div>
  )
}

export default King
