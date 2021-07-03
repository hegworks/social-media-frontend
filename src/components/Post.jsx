import "./styles/post.scss"
import React, { useContext, useState } from "react"
import { Avatar } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { ThumbUpAlt, MoreVert, Favorite } from "@material-ui/icons"
import { CookieManager } from "./CookieManager"
import { useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

const PostAvatar = styled(Avatar)({
  width: 32,
  height: 32,
  margin: 5
})


const Post = ({ post }) => {
  const { userid } = useContext(CookieManager)
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8880/api/users/${post.userid}`);
      setUser(res.data);
    }
    fetchUser()
  }, [post.userid])

  useEffect(() => {
    setIsLiked(post.likes.includes(userid))
  }, [userid, post.likes])

  const likeHandler = () => {
    try {
      axios.put("http://localhost:8880/api/posts/" + post._id + "/like", { userid: userid })
    } catch (err) {
      console.log(err)
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user._id}`} >
              <PostAvatar src={`http://localhost:8880/${user.profilePicture}`} />
            </Link >
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.createdAt}</span>
          </div >
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div >
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={`http://localhost:8880/${post.media}`} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite
              className="likeIcon"
              onClick={likeHandler}
            />
            <ThumbUpAlt
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like this..</span>
          </div>
          <div className="postBottomRight">
          </div>
        </div>
      </div >
    </div >
  )
}

export default Post