import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useHistory } from "react-router";

const SignIn = props => {
	// states
	const [creds, setCreds] = useState("");
	const [password, setPssword] = useState("");

	// functions
	const handleSubmit = async e => {};

	return (
		<div>
			<h1>Welcome to SMA</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={creds}
					name="creds"
					placeholder="Email or Username"
					onChange={event => setCreds(event.target.value)}
				/>
				<input
					type="password"
					value={password}
					name="password"
					placeholder="Password"
					onChange={event => setPssword(event.target.value)}
				/>
				<button>Submit</button>
			</form>
			<h2>
				Don't have an account? <Link to="/signup">Sign Up here</Link>
			</h2>
		</div>
	);
};

export default SignIn;
