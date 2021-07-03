import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import "./style.scss";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Home from "./components/home";
import AddPost from "./components/AddPost";
import FollowRequest from "./components/FollowRequest";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Redirect from="/" to="/signin" exact />
						<Route path="/signin">
							<SignIn />
						</Route>
						<Route path="/signup">
							<SignUp />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/profile/:id">
							<Profile />
						</Route>
						<Route path="/addpost">
							<AddPost />
						</Route>
						<Route path="/flwreq">
							<FollowRequest />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
