import React from 'react';
import PropTypes from 'prop-types';
import DP from "../../../assets/images/dp.svg"
import { ArrowDown, Bell, SearchIcon, LogoIcon } from '../../../shared/icons';
import './TopNav.css';

const TopNav = ({setSideBarToggle, sidebarToggle}) => {
    return (
      <div className="topnav-container">
          <div className="topnav-content">
              <div className="logo" onClick={()=>setSideBarToggle(!sidebarToggle)}><LogoIcon/></div>
            <div className="search-content">
                <span className="search-items">
                    <input className="search-input" placeholder="Search anything..."/>
                    <span className="search-icon"><SearchIcon/></span>
                </span>
            </div>
            <div className="items">
                <span className="notification-item"><Bell/><span className="notification">2</span></span>
                <div className="dp"><img src={DP} alt="profile"/></div>
                <ArrowDown/>
            </div>
          </div>
      </div>
    )
}
TopNav.propTypes = {
    setSideBarToggle: PropTypes.func,
    sideBarToggle: PropTypes.bool
  };

export default TopNav;