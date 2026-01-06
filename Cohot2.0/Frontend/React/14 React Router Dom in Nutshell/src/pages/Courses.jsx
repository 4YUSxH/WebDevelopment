import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      {/* Ye content /courses/kodr or /courses/kodex ke sath bhi dikhai dega */}
      <div className="sale">
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
      </div>

      <Outlet/> {/* Nested Routing ke like courses ke children isse access ho jayenge */}
    </div>
  )
}

export default Courses
