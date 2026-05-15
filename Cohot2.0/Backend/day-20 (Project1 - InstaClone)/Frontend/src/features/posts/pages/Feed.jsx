import { useEffect } from "react";
import Post from "../components/Post";
import { usePost } from "../hook/usePost";
import "../style/feed.scss";

const Feed = () => {
  const {feed, handelGetFeed, loading} = usePost()
  useEffect(() => {
    handelGetFeed()
  }, [])
  
  if(loading || !feed) return <main><h1>Loading</h1></main>

  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          {feed.map((post, key) => {
            return <div key={key}><Post profileImage={post.user.profileImage} username={post.user.username} imgUrl={post.imgUrl} caption={post.caption} isLiked={post.isLiked}/></div>
            
          })}
        </div>
      </div>
    </main>
  );
};

export default Feed;
