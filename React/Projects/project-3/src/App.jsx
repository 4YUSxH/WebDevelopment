import { useState } from 'react'
import './App.module.css'
import Home from './components/Home'
import Play from './components/Play'

const App = () => {  
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {isPlaying ? <Play /> : <Home startGame={() => setIsPlaying(true)}/>}
    </>
  )
}

export default App
