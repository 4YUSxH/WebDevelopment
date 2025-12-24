import React from 'react'

function Variable1() {
  let name = "Aayu"; // Always declare variables inside the function it is good practice
  let age = 21;
  let arr = ["Iron Man", "Capatain America", "Hulk", "SpiderMan"]; 
  let arr2 = [10, 20, 30, 40]; 

  return (
    <div>
      <h1>Name : {name}, Age : {age}</h1> {/* We can write JS code between {} */}  
      {arr.map((elem) => { {/* map */}
        return <h1>{elem}</h1>;
      })} 

      {arr2.filter((elem) => { {/* filter */}
        return elem>20;
      })} 
    </div>
  )
}

export default Variable1
