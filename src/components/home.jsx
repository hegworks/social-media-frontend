import React, { useContext } from "react";
import { CookieManager } from "./CookieManager";
import Topbar from "./Topbar";
import SideBar from "./SideBar";
import "./styles/home.scss"
import Feed from "./Feed";

const Home = (props) => {
	const { token, userid } = useContext(CookieManager);

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