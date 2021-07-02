import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";

export const CookieManager = React.createContext(null)
const cookies = new Cookies();

const CookieManagerProvider = (props) => {
	// states
	const [token, setToken] = useState(null)

	useEffect(() => {
		const savedToken = cookies.get("token")
		if (savedToken) {
			setToken(savedToken);
		}
		return () => {
			setToken(null);
		}
	}, [])

	const signin = (tok) => {
		console.log("got to signin")

		setToken(tok)

		cookies.set(
			"token",
			token,
			{ maxAge: 2 * 60 * 60 }
		)
	}

	const signout = () => {
		console.log("got to signout");

		setToken(null);

		cookies.remove("token");
	};

	return (
		<CookieManager.Provider
			value={
				{
					token,
					signin,
					signout
				}
			}
		>
			{props.children}
		</CookieManager.Provider>
	 )
}
 
export default CookieManagerProvider;