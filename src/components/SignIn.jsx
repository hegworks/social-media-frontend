import React from "react"
import { Link } from "react-router-dom";

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			creds: "",
			password: ""
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div>
				<h1>Welcome to SMA</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.creds}
						name="creds"
						placeholder="Email or Username"
						onChange={this.handleChange}
					/>
					<input
						type="password"
						value={this.state.password}
						name="password"
						placeholder="Password"
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
				<h2>
					Don't have an account?{" "}
					<Link to="/signup">Sign Up here</Link>
				</h2>
			</div>
		);
	}
}

export default SignIn