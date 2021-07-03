import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile"
import Home from "./components/Home";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/signin">
							<SignIn />
						</Route>
						<Route path="/signup">
							<SignUp />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/profile">
							<Profile />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
