import Nav from '../features/shared/components/Nav.jsx'
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
        <Nav />
        <Outlet />
    </>
  )
}

export default AppLayout
