import React from "react";
import Topbar from "./Topbar";
import SideBar from "./SideBar";
import "./styles/home.scss"
import Feed from "./Feed";

const Home = (props) => {
	return (
		<div className="home">
			<Topbar />
			<div className="homeContainer">
				<SideBar />
				<div className="feed">
					<Feed />
				</div>
			</div>
		</div>
	);
}

export default Home;