import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useHistory } from "react-router";

import './styles/signup.scss'
import { Button, TextField } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

const SignUpButton = styled(Button)({
	height: 50,
	borderRadius: 10,
	border: "none",
	fontSize: 20,
	fontWeight: 500,
	cursor: "pointer"
});

const SignUpTextField = styled(TextField)({
	height: 50,
	fontSize: 18
});

const SignUp = props => {
	// states
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const history = useHistory();

	// functions
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
		<div className="signup">
			<div className="signup-wrap">
				<div className="signup-left">
					<h2 className="desc">Join
						<span> our community </span>
					</h2>
					<h3>
						We hope you enjoy your stay :)
					</h3>
				</div>
				<div className="signup-right">
					<form onSubmit={handleSubmit} className="signupBox">
						<SignUpTextField
							id="standard-basic"
							label="Username"
							type="text"
							value={username}
							name="username"
							placeholder="Your username"
							onChange={event => setUsername(event.target.value)}
						/>
						<SignUpTextField
							id="standard-basic"
							label="First name"
							type="text"
							value={firstName}
							name="firstname"
							placeholder="Your first name"
							onChange={event => setFirstName(event.target.value)}
						/>
						<SignUpTextField
							id="standard-basic"
							label="Last name"
							type="text"
							value={lastName}
							name="lastname"
							placeholder="Your last name"
							onChange={event => setLastName(event.target.value)}
						/>
						<SignUpTextField
							id="standard-basic"
							label="Email"
							type="text"
							value={email}
							name="email"
							placeholder="Your email"
							onChange={event => setEmail(event.target.value)}
						/>
						<SignUpTextField
							id="standard-basic"
							label="Password"
							type="password"
							value={password}
							name="password"
							password
							placeholder="Your password"
							onChange={event => setPassword(event.target.value)}
						/>
						<SignUpButton type="submit" variant="contained" color="primary">
							Submit
						</SignUpButton>
						<p>
							Already Signed Up? <Link className="link" to="/signin">Sign In here</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
