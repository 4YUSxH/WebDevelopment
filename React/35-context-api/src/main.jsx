import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Context from './contexts/Context.jsx' // import the Context wrapper

createRoot(document.getElementById('root')).render(
  <Context>
    <App />
  </Context>
)
