import React, { useContext } from 'react'
import { provideTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [theme, setTheme] = useContext(provideTheme)
  return (
    <div className='nav'>
      <button onClick={() => {
        if(theme === "light") setTheme("dark")
          else setTheme("light")
      }}>Change Theme</button>
      <h1>This is Navbar</h1>
      <p>Theme is {theme}</p>
    </div>
  )
}

export default Navbar
