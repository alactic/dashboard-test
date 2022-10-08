import React, { useState } from 'react';
import { Group1, Group2, Group3, Group4, Group5, Group6 } from '../../../shared/icons';
import Logo from '../../../shared/icons/logo';
import "./SideBar.css";

const SideBar = () => {
  const [hover, setHover] = useState(1);
  const [active, setActive] = useState(1);

    return (
      <div className="sidebar-container">
        <div className="logo">
          <Logo/>
          <span className="todo">TO-DO</span>
        </div>
        <div>
          {[Group1,Group2,Group3,Group4,Group5,Group6].map((Val, i) => (
            <div className={`${active === i+1 && 'active'} group`} onMouseOver={()=>setHover(i+1)} onClick={()=>setActive(i+1)}><Val colorState={active === i+1}/></div>
          ))}
         </div>
      </div>
    )
}

export default SideBar;