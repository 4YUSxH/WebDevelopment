import { useEffect } from "react"
import { useChat } from "../hooks/useChat"

const Dashboard = () => {
    const {intializeSocketConnection} = useChat()

    // Socket.io connection only be made when you user visit deshboard page
    useEffect(() => {
        intializeSocketConnection()
    }, [])

    return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
