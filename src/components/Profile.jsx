import React, { useContext } from "react";
import { useParams } from "react-router";

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

	return (
		<div className="page">
			<Topbar />
			<div className="profile">
				<SideBar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img className="profileCoverImg" alt="" />
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">username goes here</h4>
							<span className="profileInfoDesc">description</span>
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
