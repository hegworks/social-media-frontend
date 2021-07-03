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
				<Feed />
			</div>
		</div>
	);
}

export default Home;