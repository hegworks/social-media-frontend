import React, { useContext, useState } from "react";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { CookieManager } from "./CookieManager";
import './styles/topbar.scss';
import { Button, Container, TextField, Avatar, Divider, Box, Input } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import axios from "axios";

const TopbarButton = styled(Button)({
  justifyContent: "left",
  display: "flex",
  alignItems: "center"
});

const TopbarAvatar = styled(Avatar)({
  width: 32,
  height: 32,
  margin: 5
});

const Items = ({ value, link, image }) => {
  return (
    <TopbarButton
      variant="outlined"
      color="default"
      fullWidth
      type="submit"
      href={link}
    >
      <TopbarAvatar src={"http://localhost:8880/" + image} />
      {value}
    </TopbarButton>
  );
};

const Topbar = props => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();
    const input = e.target.value;
    setSearchValue(input);

    if (input !== "") {
      try {
        const response = await axios.get("http://localhost:8880/api/users/search/" + input);
        setList(
          response.data.map((user) => {
            return (
              <Items
                key={user._id}
                value={user.firstName + " " + user.lastName + " (" + user.username + ")"}
                link={user._id}
                image={user.profilePicture}
              />
            )
          })
        )
        console.log(list)
      } catch (err) {
        console.log(err);
      }
    } else {
      setList([]);
    }
  };

  return (
    <div className="topbar">
      <div className="stickypart">
        <div className="topbarLeft">
          <span className="logo">
            SMA
          </span>
        </div>
        <div className="topbarMiddle">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for a person."
              className="searchInput"
              id="search"
              label="Search"
              name="search"
              autoComplete="search"
              value={searchValue}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="topbarEnd" />
      </div>
      <Container maxWidth="sm">
        {list}
      </Container>
    </div>
  )
}

export default Topbar;