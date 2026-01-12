import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  // UserContext file se wrap kar diya hai App ko and ab App children hai UserContext ka isse as a prop access karna padega UserContext ke andar jaakar
  <UserContext>
    <App />
  </UserContext>,
)
