import React, { useContext } from "react";
import { CookieManager } from "./CookieManager";
import Topbar from "./Topbar";
import SideBar from "./SideBar";
import "./styles/home.scss"

const Home = (props) => {
	const { token, userid } = useContext(CookieManager);

	return (
		<div className="home">
			<Topbar />
			<h6>{token}</h6>
			<h6>{userid}</h6>
			<SideBar />
		</div>
	);
}

export default Home;