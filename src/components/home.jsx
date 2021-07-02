import React, { useContext } from "react";
import { CookieManager } from "./CookieManager";
import Topbar from "./Topbar";

const Home = (props) => {
	const { token, userid } = useContext(CookieManager);

	return (
		<div>
			<Topbar />
			<h6>{token}</h6>
			<h6>{userid}</h6>
		</div>
	);
}

export default Home;