import React from 'react'

function Button4(prop) {
  return (
    <div className='m-4 px-8 py-4 rounded bg-amber-600 w-fit h-10 font-semibold text-lg flex justify-center items-center'>
      {prop.content}
    </div>
  )
}

export default Button4
