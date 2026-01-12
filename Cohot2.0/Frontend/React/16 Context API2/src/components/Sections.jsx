import React, { useContext } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import { provideTheme } from '../context/ThemeContext'

const Sections = () => {
  const [theme, setTheme] = useContext(provideTheme)
  return (
    <div>
      <Section1 />
      <Section2 />
      <p>Theme is {theme}</p>
    </div>
  )
}

export default Sections
