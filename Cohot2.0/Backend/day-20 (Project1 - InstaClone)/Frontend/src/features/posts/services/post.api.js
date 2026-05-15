import axios from "axios"

export const getFeed = async () => {
    const response = await axios.get("http://localhost:3000/api/posts/feed", {withCredentials: true})

    return response.data
}