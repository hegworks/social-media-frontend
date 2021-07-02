import React, { useContext } from "react";
import { CookieManager } from "./CookieManager";

const Home = (props) => {
	const { token } = useContext(CookieManager);

	return (
		<h1>{token}</h1>
	);
}
 
export default Home;