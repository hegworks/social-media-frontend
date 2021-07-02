import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useHistory } from "react-router";

const SignUp = props => {
	// states
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const history = useHistory();

	// functions
	// const handleSubmit = (event) => {
	// 	// TODO: check if empty

	// 	// make requst body
	// 	const reqBody = {
	// 		username: username,
	// 		firstName: firstName,
	// 		lastName: lastName,
	// 		email: email,
	// 		password: password
	// 	};

	// 	// send request
	// 	fetch(
	// 		"http://localhost:8880/api/auth/register",
	// 		{
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json"
	// 			},
	// 			body: JSON.stringify(reqBody)
	// 		}
	// 	).then(response => {console.log(response)}
	// 	).then(data => console.log(data))
	// 	.catch(err => console.log(err))
		
	// 	//TODO: use .then to handle fail and success
	// }
		
	const handleSubmit = async e => {
		e.preventDefault();
		const user = {
			username: username,
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password
		};
		try {
			await axios.post("http://localhost:8880/api/auth/register", user);
			history.push("/signin");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<h1>Welcome to SMA</h1>
			<h2>Create an account</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={username}
					name="username"
					placeholder="Username"
					onChange={event => setUsername(event.target.value)}
				/>
				<input
					type="text"
					value={firstName}
					name="firstname"
					placeholder="First Name"
					onChange={event => setFirstName(event.target.value)}
				/>
				<input
					type="text"
					value={lastName}
					name="lastname"
					placeholder="Last Name"
					onChange={event => setLastName(event.target.value)}
				/>
				<input
					type="text"
					value={email}
					name="email"
					placeholder="Email"
					onChange={event => setEmail(event.target.value)}
				/>
				<input
					type="password"
					value={password}
					name="password"
					password
					placeholder="Password"
					onChange={event => setPassword(event.target.value)}
				/>
				<button>Submit</button>
			</form>
			<h2>
				Already Signed Up? <Link to="/signin">Sign In here</Link>
			</h2>
		</div>
	);
};

export default SignUp;
	/* 
	handleSubmit(event) {
		// TODO: check if empty

		// make requst body
		const reqBody = {
			username: username,
			firstName: firstname,
			lastName: lastname,
			email: email,
			password: password
		};

		// send request
		fetch(
			"http://localhost:8880/api/auth/register",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(reqBody)
			}
		)/* .then(response => {
				console.log("GOT HEREEEE")
				console.log("got response: " + response.json());
				this.setState({resp: response.json()})
			}
		).then(data => <h1>{data}</h1>)
		
			//TODO: use .then to handle fail and success */
