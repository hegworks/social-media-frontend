import Topbar from "./Topbar";
import SideBar from "./SideBar";
import Feed from "./Feed";
import "./styles/profile.scss";
import { useParams } from "react-router";

const Profile = (props) => {
  const userid = useParams().id;
  console.log(userid)

  return (
    <div className="page">
      <Topbar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">username goes here</h4>
              <span className="profileInfoDesc">description</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed profileid={userid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile