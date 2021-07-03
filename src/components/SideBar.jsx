import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import { CookieManager } from "./CookieManager";
import FriendsList from "./FreindsList";

import './styles/SideBar.scss'

const SideBarButton = styled(Button)({
	height: 50,
	borderRadius: 0,
	border: "none",
	fontSize: 14,
	fontWeight: 500,
	cursor: "pointer"
});

const SideBar = props => {
	const history = useHistory();
	const { signout } = useContext(CookieManager);

	const handleProfileButtonClick = () => {

	}

	const handleDashbaordButtonClick = () => { };
	
	const handleSignOutButtonClick = () => {
		signout()
		history.push("/signin");

	};

	return (
		<div className="sidebar-container">
			<SideBarButton
				type="button"
				variant="contained"
				color="primary"
				onClick={handleProfileButtonClick}
			>
				Profile
			</SideBarButton>

			<SideBarButton
				type="button"
				variant="contained"
				color="primary"
				onClick={handleDashbaordButtonClick}
			>
				Dashboard
			</SideBarButton>

			<SideBarButton
				type="button"
				variant="contained"
				color="secondary"
				onClick={handleSignOutButtonClick}
			>
				Sign Out
			</SideBarButton>

			<FriendsList />
		</div>
	);
};

export default SideBar;
