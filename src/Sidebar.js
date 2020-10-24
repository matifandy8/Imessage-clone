import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user.photo} className="sidebar__avatar" />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>

        <IconButton variant="outlined" className="sidebar__inputButton">
          <RateReviewIcon />
        </IconButton>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
