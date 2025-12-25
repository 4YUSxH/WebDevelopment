import React, { useState } from 'react'

function Queen() {
    const [queen, setQueen] = useState("Aprana")
      const chnagequeen = () =>{
        console.log("Queen Changed")
        if(queen === "Aprana") setQueen("Disha");
        else setQueen("Aprana")
      }
  return (
    <div>
      <h1>{queen}</h1>
      <button onClick={chnagequeen}>Change Queen</button>
    </div>
  )
}

export default Queen
