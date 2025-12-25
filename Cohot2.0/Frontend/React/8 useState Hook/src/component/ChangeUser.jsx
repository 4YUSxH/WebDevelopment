import React, { useState } from 'react'

function ChangeUser() {
  const arr = ["Solo", "Shreya", "Neon", "Devx", "AsyncBro"]
  const [num, setNum] = useState(0);
  let changeuser = () =>{
   if(num < arr.length-1) setNum(num+1)
  };

  return (
    <div className='changeuser'>
      <h1>{arr[num]}</h1>
      <button onClick={changeuser}>Chaneg User</button>
    </div>
  )
}

export default ChangeUser
