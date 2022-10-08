import React, { useState } from 'react';
import "./Chart.css";

const Chart = () => {
    const [selected, setSelected] = useState(3)
   return (
       <div className="chart-container">
           <div className="task-down-title">
              <div className="task-down">Task Done</div>
              <div className="freq-items">
                  <div className={`freq ${selected === 1 && 'active'}`} onClick={()=>setSelected(1)}>Daily</div>
                  <div className={`freq ${selected === 2 && 'active'}`} onClick={()=>setSelected(2)}>Weekly</div>
                  <div className={`freq ${selected === 3 && 'active'}`} onClick={()=>setSelected(3)}>Monthly</div>
              </div>
           </div>
       </div>
   )
}

export default Chart