import { RouterProvider } from "react-router-dom"
import { router } from "./app.routes"
import "./features/shared/global.scss"
import { AuthProvider } from "./features/auth/auth.context"

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App