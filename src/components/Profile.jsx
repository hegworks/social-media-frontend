import react, { useContext, useEffect, useState } from "react";
import Topbar from "./Topbar";
import SideBar from "./SideBar";

import { CookieManager } from "./CookieManager";
import "./styles/profile.scss";
import axios from "axios";
import { ConsoleWriter } from "istanbul-lib-report";

const Profile = (props) => {
  const { userid, token } = useContext(CookieManager);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const config = {
        headers: { Authorization: "Bearer " + token }
      };
      const bodyParameters = {
        userid: userid
      };
      const res = await axios.get("http://localhost:8880/api/posts/userposts/all", bodyParameters, config)
        .then(console.log)
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      )
    }
    fetchPosts()
  }, [token, userid])

  return (
    <div className="profile">
      {userid}
      <Topbar />
      <SideBar />
    </div>
  )
}

export default Profile