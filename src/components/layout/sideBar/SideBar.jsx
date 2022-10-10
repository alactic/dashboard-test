import React, { useState } from "react";
import PropTypes from "prop-types";

import Logo from "../../../shared/icons/logo";
import "./SideBar.css";
import Group1 from "../../../shared/icons/group1";
import Group2 from "../../../shared/icons/group2";
import Group3 from "../../../shared/icons/group3";
import Group4 from "../../../shared/icons/group4";
import Group5 from "../../../shared/icons/group5";
import Group6 from "../../../shared/icons/group6";

const SideBar = ({ sidebarToggle }) => {
  const [active, setActive] = useState(1);

  return (
    <div
      className={`sidebar-container ${!sidebarToggle && "hide-sidebar-mobile"}`}
    >
      <div className="logo">
        <div className="logo-icon">
          <Logo />
        </div>
        <span className="todo">TO-DO</span>
      </div>
      <div>
        {[Group1, Group2, Group3, Group4, Group5, Group6].map((Val, i) => (
          <div
            key={i}
            className={`group ${active === i + 1 && "active"}`}
            onClick={() => setActive(i + 1)}
          >
            <Val colorState={active === i + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  sideBarToggle: PropTypes.bool,
};

export default SideBar;
