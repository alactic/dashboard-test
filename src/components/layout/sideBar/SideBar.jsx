import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Group1, Group2, Group3, Group4, Group5, Group6 } from '../../../shared/icons';
import Logo from '../../../shared/icons/logo';
import "./SideBar.css";

const SideBar = ({sidebarToggle}) => {
  const [active, setActive] = useState(1);

    return (
      <div className={`sidebar-container ${!sidebarToggle && 'hide-sidebar-mobile'}`}>
        <div className="logo">
          <div className="logo-icon"><Logo/></div>
          <span className="todo">TO-DO</span>
        </div>
        <div>
          {[Group1,Group2,Group3,Group4,Group5,Group6].map((Val, i) => (
            <div className={`group ${active === i+1 && 'active'}`} onClick={()=>setActive(i+1)}><Val colorState={active === i+1}/></div>
          ))}
         </div>
      </div>
    )
}

SideBar.propTypes = {
  sideBarToggle: PropTypes.bool
};

export default SideBar;