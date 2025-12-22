import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>, // StrictMode is used in production
)

// createRoot(document.getElementById('root')).render(App()) Above code can be interpreted as this and we saw it previously, App is a functinal component as we can call it or use it as self closing tag both are same
