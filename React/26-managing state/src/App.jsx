import React, { useState } from 'react'

function App() {
  var [a,b] = useState(69);//69 is intial value and we can use intial value(69) using 'a' and b is a function that update the value of 'a'
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={()=>b(a+1)}>Click Me For Updating</button>
      {/* 'b' is a updater function, firstclick = 70 than a = 70, secondclick = 71 than a = 71, and soo on */}
    </div>
  )
}

export default App

//React ka naam react islie hai, kyunki wo react karta hai jab bhi state change hoti hai, aur yahi main model hai pure react ka, yahi uska heart hai aur yahi uska kaam karne ka tarika hai.  
// 'a' ki state(value) change hone par react react karega aur saari jagah 'a' ki state(value) change kar dega.