import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import axios from "axios"
import { CookieManager } from "./CookieManager";
import "./styles/feed.scss"

const Feed = ({ profileid }) => {
  const [posts, setPosts] = useState([])
  const { userid } = useContext(CookieManager)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = profileid
        ? await axios.get("http://localhost:8880/api/posts/userposts/" + profileid)
        : await axios.get("http://localhost:8880/api/posts/timeline/" + userid)
      setPosts(res.data)
    }
    fetchPosts()
  }, [userid, profileid])

  return (
    <div className="feed">
      <div className="feedwrapper">
        {/* {(profileid === userid) && <AddPost />} */}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed