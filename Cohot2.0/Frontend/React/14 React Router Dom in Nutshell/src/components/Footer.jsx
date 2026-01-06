import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    // useNavigate() hook is used to redirect on any page when some event occurs like mousemove, click, etc
    const navigate = useNavigate() // Firstly variable mai store kar lena ye important hai

    return (
        <div className='footer'>
            <h3>Footer</h3>
            <button onClick={() => {
                navigate("/courses") // button click hone par /courses url page par redirect ho jayega 
            }}>Explore courses</button>
        </div>
    )
}

export default Footer