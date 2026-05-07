import AppRoutes from "./AppRoutes"
import "./style.scss"
import { AuthProvider } from "./features/auth/auth.context.jsx"

const App = () => {
  return (
    <>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
    </>
  )
}

export default App