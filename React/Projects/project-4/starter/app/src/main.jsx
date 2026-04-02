import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family:  'Inter', sans-serif;
  }
  
  html, body {
      width: 100%;
      height: 100%;
  }

  body{
    background-color: #323334;
    color: whitesmoke;
    min-height: 100vh;
  }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
