import React, { useState } from 'react'

function Wash(prop) {
    const [user, setUser] = useState("Male")
    let changeme = () =>{
        if(user === "Male") setUser("Female");
        else setUser("Male")        
    };
    let color = (prop.user === "male") ? "blue" : "pink";
  return (
    <div className='gender'>
      <h1 style={{background : color}}>{user}</h1>
      <button onClick={changeme}>Change Gender</button>
    </div>
  )
}

export default Wash
