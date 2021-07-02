import React, { useContext } from "react";
import { CookieManager } from "./CookieManager";

const Home = (props) => {
	const { token, userid } = useContext(CookieManager);

	return (
		<div>
			<h6>{token}</h6>
			<h6>{userid}</h6>
		</div>
	);
}
 
export default Home;