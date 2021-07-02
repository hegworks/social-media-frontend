import React, { useState } from "react";
import Cookies from "universal-cookie";

export const CookieManager = React.createContext(null)
const cookies = new Cookies();

const CookieManagerProvider = (props) => {
	// states
	const [token, setToken] = useState("")

	const signin = (tok) => {
		setToken(tok)
		console.log(token)
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