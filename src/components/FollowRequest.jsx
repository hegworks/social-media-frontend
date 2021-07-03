import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { CookieManager } from "./CookieManager";

const FollowRequest = props => {
	const [followRequests, setFollowRequests] = useState([]);
	const [requestUsers, setRequestUsers] = useState([]);

	const { userid } = useContext(CookieManager);

	// turn users to conponets
	const usersToComps = usrs => {
		console.log(usrs);
		usrs.map(usr => <div>{usr.name}</div>);
	};

	// turn ids to users
	const idsToUsers = ids => {
		// GET eachid and return its user:
		const users = ids.map(async eachid => {
			try {
				const url = "http://localhost:8880/api/users/" + eachid;
				const response = await axios.get(url); // get user
				const awaitedData = await response.data;
				console.log(awaitedData);
				return awaitedData; // return user
			} catch (err) {
				console.log(err);
			}
		});
		setRequestUsers(users);
		console.log(users);
		usersToComps(users);
	};

	// get array of follow requests
	useEffect(() => {
		const getFollowRequests = async () => {
			console.log("getFollowRequests is called");
			try {
				const url = "http://localhost:8880/api/users/" + userid;
				const response = await axios.get(url); // get follow requests
				const awaitedReqs = await response.data.requests;
				setFollowRequests(awaitedReqs); // set follow requests
				idsToUsers(awaitedReqs); // to turn ids to users
				console.log(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		getFollowRequests();
	}, [userid]);

	return <div></div>;
};

export default FollowRequest;
