import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { CookieManager } from "./CookieManager";

const Friend = ({fname, lname, uname}) => {
	return (
		<div>
			<h4>{fname} + {" "} + {lname} + {" "} + {uname}</h4>
			<hr />
		</div>
	)
}

const FriendsList = props => {
	const [friendsids, setFriendsids] = useState([]);
	const { userid } = useContext(CookieManager);
	
	
	const getFriends = async () => {
		console.log("getFriends is called");
		try {
			const url = "http://localhost:8880/api/users/" + userid;
			const response = await axios.get(url); // get followings
			setFriendsids(response.data.following) // set followings

			/*
			// turn followings from _id to user
			const friendsUsers = response.data.following.map(
				friend_id =>
				// SEND GET TO GET USERS
			)
			*/

			console.log(response.data);
		} catch (err) {
			console.log(err);
		}
	};
	
	useEffect(() => {
		getFriends()
		return () => {
			// cleanup
		}
	}, [])
	
	return (
		<div></div>
	);
};

export default FriendsList;
