import React from "react"
import { Link } from "react-router-dom";

class SignIn extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome to SMA</h1>
				<form>
					<input type="text" placeholder="Email or Username" />
					<input type="text" placeholder="Password" />
					<button>Submit</button>
				</form>
				<h2>
					Don't have an account? <Link to="/signup">Sign Up here</Link>
				</h2>
			</div>
		);
	}
}

export default SignIn