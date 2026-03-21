import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <img src='public\images\brand_logo.png' alt='logo'></img>
        <ul className='nav-links'>
            <li>menu</li>
            <li>location</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        <button className='nav-btn'>Login</button>
    </nav>
  )
}

export default Navbar
