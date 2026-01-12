import React from 'react'

const Navbar = (prop) => {
  // prop mai h1 aaya hai 
  return (
    <div className='h-20 w-full bg-emerald-600 text-2xl'>
      <h1>This is a Navbar</h1>
      {prop.children}
    </div>
  )
}

export default Navbar
