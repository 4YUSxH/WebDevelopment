import React, { useContext } from 'react'
import { provideTheme } from '../context/ThemeContext'

const Footer = () => {
  const [theme, setTheme] = useContext(provideTheme)
  return (
    <div className='footer'>
      <h1>This is Footer</h1>
      <p>Theme is {theme}</p>
    </div>
  )
}

export default Footer