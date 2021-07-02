import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

class App extends React.Component{
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
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
