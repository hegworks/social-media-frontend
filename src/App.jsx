import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/home";

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
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
