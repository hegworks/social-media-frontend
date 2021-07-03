import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { AccountBox, Dashboard, MeetingRoom } from "@material-ui/icons";

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
		history.push("/profile")
	}

	const handleDashbaordButtonClick = () => {
		history.push("/home")
	};

	const handleSignOutButtonClick = () => {
		signout()
		history.push("/signin");
	};

	return (
		<div className="sidebar-container">
			<div className="flex">
				<SideBarButton
					type="button"
					variant="contained"
					color="primary"
					onClick={handleProfileButtonClick}
				>
					<AccountBox className="icons" />
					Profile
				</SideBarButton>

				<SideBarButton
					type="button"
					variant="outlined"
					color="primary"
					onClick={handleDashbaordButtonClick}
				>
					<Dashboard className="icons" />
					Dashboard
				</SideBarButton>

				<SideBarButton
					type="button"
					variant="contained"
					color="secondary"
					onClick={handleSignOutButtonClick}
				>
					<MeetingRoom className="icons" />
					Sign Out
				</SideBarButton>

				<FriendsList />
			</div>
		</div>
	);
};

export default SideBar;
