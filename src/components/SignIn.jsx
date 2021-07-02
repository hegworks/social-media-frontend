import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import './styles/signin.scss'
import { Button, TextField } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { CookieManager } from "./CookieManager";

const SignInButton = styled(Button)({
	height: 50,
	borderRadius: 10,
	border: "none",
	fontSize: 20,
	fontWeight: 500,
	cursor: "pointer"
});

const SignInTextField = styled(TextField)({
	height: 50,
	fontSize: 18
});

const SignIn = props => {
	// states
	const [creds, setCreds] = useState("");
	const [password, setPssword] = useState("");

	// react-router history
	const history = useHistory();
	// signin funciton from CookieManager
	const { signin } = useContext(CookieManager)

	const handleSubmit = async e => {
		e.preventDefault();
		const user = {
			credential: creds,
			password: password
		};
		try {
			const response = await axios.post("http://localhost:8880/api/auth/login", user);
			signin(response.data.token)
			console.log(response.data.token)
			// history.push("/home");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="login">
			<div className="login-Wrap">
				<div className="login-left">
					<h2 className="desc">Welcome to
						<span> SMA </span>
					</h2>
					<h3>
						Connect with your friends around the wor.
					</h3>
				</div>
				<div className="login-right">
					<form onSubmit={handleSubmit} className="loginBox">
						<SignInTextField
							id="standard-basic"
							label="Credentials"
							type="text"
							value={creds}
							name="creds"
							placeholder="Your email or username"
							onChange={event => setCreds(event.target.value)}
						/>
						<SignInTextField
							id="standard-basic"
							label="Password"
							type="password"
							value={password}
							name="password"
							placeholder="Your password"
							onChange={event => setPssword(event.target.value)}
						/>
						<SignInButton type="submit" variant="contained" color="primary"> Submit </SignInButton>
						<p>
							Don't have an account? <Link to="/signup">Sign Up here</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
