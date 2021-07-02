import React, { useState } from "react";
import Cookies from "universal-cookie";

export const CookieManager = React.createContext(null)
const cookies = new Cookies();

const CookieManagerProvider = (props) => {
	// states
	const [token, setToken] = useState("")

	const signin = (tok) => {
		console.log("got to signin")

		setToken(tok)

		cookies.set(
			"token",
			token,
			{ maxAge: 2 * 60 * 60 }
		)
	}

	return (
		<CookieManager.Provider
			value={
				{
					token,
					signin
				}
			}
		>
			{props.children}
		</CookieManager.Provider>
	 )
}
 
export default CookieManagerProvider;