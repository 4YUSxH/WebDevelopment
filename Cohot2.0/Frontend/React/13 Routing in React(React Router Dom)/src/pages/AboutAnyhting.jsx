import React from 'react'
import { useParams } from 'react-router-dom'

const AboutAnyhting = () => {

    const param = useParams();
    console.log(param) // <Route path="/about/:anyvar" element={<AboutAnyhting />}/> iss route ki 'anyvar' ki valude deta hai as an object

  return (
    <div>
      <h1>About Anything Page</h1>
    </div>
  )
}

export default AboutAnyhting
