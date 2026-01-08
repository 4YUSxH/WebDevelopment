import React from 'react'
import Child from './Child'

const Parent = () => {
    function func1(getData){
        console.log(`Data send by Child ${getData}`)
    }
  return (
    <div>
      <Child fnc={func1} />
    </div>
  )
}

export default Parent
