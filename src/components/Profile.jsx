import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios"
import { CookieManager } from "./CookieManager";
import Topbar from "./Topbar";
import SideBar from "./SideBar";
import Feed from "./Feed";
import AddPost from "./AddPost";

import "./styles/profile.scss";

const Profile = props => {
  const urluserid = useParams().id;
  console.log(urluserid);

  const { userid } = useContext(CookieManager);
  console.log(userid);

  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8880/api/users/${urluserid}`);
      setUser(res.data);
    }
    fetchUser()
  }, [urluserid])

  return (
    <div className="page">
      <Topbar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" alt="#152238" />
              <img
                className="profileUserImg"
                src={`http://localhost:8880/${user.profilePicture}`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div>{userid === urluserid && <AddPost />}</div>
          <div className="profileRightBottom">
            <Feed profileid={urluserid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
