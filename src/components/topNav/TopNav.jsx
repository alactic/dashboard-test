import React from 'react';
import { ArrowDown, Bell, ProfileDp, SearchIcon } from '../../shared/icons';
import './TopNav.css';

const TopNav = () => {
    return (
      <div className="topnav-container">
          <div className="topnav-content">
            <div className="search-content">
                <span className="search-items">
                    <input className="search-input" placeholder="Search anything..."/>
                    <span className="search-icon"><SearchIcon/></span>
                </span>
            </div>
            <div className="items">
                <span className="notification-item"><Bell/><span className="notification">2</span></span>
                <div className="dp"><ProfileDp/></div>
                <ArrowDown/>
            </div>
          </div>
      </div>
    )
}

export default TopNav;