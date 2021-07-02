import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
	constructor() {
		super()
		this.state = {
			username: "",
			firstname: "",
			lastname: "",
			email: "",
			password: ""
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<div>
				<h1>Welcome to SMA</h1>
				<h2>Create an account</h2>
				<form>
					<input
						type="text"
						value={this.state.username}
						name="username"
						placeholder="Email or Username"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						value={this.state.firstname}
						name="firstname"
						placeholder="First Name"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						value={this.state.lastname}
						name="lastname"
						placeholder="Last Name"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						value={this.state.email}
						name="email"
						placeholder="Email"
						onChange={this.handleChange}
					/>
					<input
						type="password"
						value={this.state.password}
						name="password"
						password
						placeholder="Password"
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
				<h2>
					Do you have an account?
					<Link to="/signin">Sign In here</Link>
				</h2>
			</div>
		);
	}
}

export default SignUp;
