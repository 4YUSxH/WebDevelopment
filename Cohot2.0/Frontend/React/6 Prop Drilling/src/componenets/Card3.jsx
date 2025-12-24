import React from 'react'

function Card3(props)  { // propes is just a name not a keyword and it is a object
    console.log(props); // This props object will contain all the attributes send by <Card3 /> from App.jsx
    return (
    <div className='bg-black text-white m-15 rounded px-20 py-10 w-fit'>
      <h1 className='text-2xl font-semibold'>{props.user}, {props.age}</h1>
    </div>
  )
}

export default Card3
