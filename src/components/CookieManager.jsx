import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";

export const CookieManager = React.createContext(null)
const cookies = new Cookies();

const CookieManagerProvider = (props) => {
	// states
	const [token, setToken] = useState(null)
	const [userid, setUserid] = useState(null)

	useEffect(() => {
		const savedToken = cookies.get("token")
		const savedUserid = cookies.get("userid")
		console.log("savedtoken in cookie: " + savedToken);
		console.log("savedUserid in cookie: " + savedUserid);
		if (savedToken && savedUserid) {
			setToken(savedToken)
			setUserid(savedUserid)
		}
		return () => {
			setToken(null);
			setUserid(null);
		}
	}, [])

	const signin = (tok, uid) => {
		console.log("got to signin")
		console.log("tok: " + tok);
		console.log("uid: " + uid);

		setToken(tok)
		setUserid(uid)
		console.log("token in state: " + token)
		console.log("userid in state " + userid)

		cookies.set("token", tok,	{ maxAge: 2 * 60 * 60 })
		cookies.set("userid", uid, { maxAge: 2 * 60 * 60 })

		console.log("token in cookie: " + cookies.get("token"));
		console.log("userid in cookie: " + cookies.get("userid"));
	}

	const signout = () => {
		console.log("got to signout");
		setToken(null);
		setUserid(null)
		cookies.remove("token")
		cookies.remove("userid")
	};

	return (
		<CookieManager.Provider
			value={
				{
					token,
					userid,
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