import React from "react";
import { NotificationsNone } from "@material-ui/icons/";

import "./topbar.css";

const Header = () => {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="top__left">
          <span className="logo">pramata</span>
        </div>
        <div className="top__right">
          <div className="topbar__iconContainer">
            <NotificationsNone />
            <span className="topbar__iconBadge">2</span>
          </div>
          {/* <div className="topbar__iconContainer">
            <NotificationsNone />
            <span className="topbar__iconBadge">2</span>
          </div>
          <div className="topbar__iconContainer">
            <NotificationsNone />
            <span className="topbar__iconBadge">2</span>
          </div> */}
          <img
            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
            alt=""
            className="top__avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
