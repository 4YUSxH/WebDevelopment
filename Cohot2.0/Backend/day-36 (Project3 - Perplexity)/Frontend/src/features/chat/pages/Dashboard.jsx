import { useEffect } from "react"
import { useChat } from "../hooks/useChat"

const Dashboard = () => {
    const {intializeSocketConnection} = useChat()

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
