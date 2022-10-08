import React from 'react';
import { CompleteTaskIcon, DoneTaskIcon, GraphIcon, NewGraph, DoneGraph, NewTaskIcon } from '../../../shared/icons';
import './TaskBreakDown.css';

const TaskBreakDown =()=> {
    return (
        <div className="task-breakdown-container">
    <div className="cards">
                  <div className="task-card">
                     <div className="title-items">
                        <div className="task-title">
                           <span className="task-icon center"><CompleteTaskIcon/></span>
                           Task Completed
                        </div>
                        <div className="task-count">08</div>
                     </div>
                     <div className="graph-more">
                        <div>
                           <GraphIcon/>
                        </div>
                        <div>
                           <div className="more"><span className="more-count">10+</span> more</div>
                           <div className="from">from last week</div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="task-card">
                     <div className="title-items">
                        <div className="task-title">
                           <span className="task-icon center"><NewTaskIcon/></span>
                           New Task
                        </div>
                        <div className="task-count">10</div>
                     </div>
                     <div className="graph-more">
                        <div>
                           <NewGraph/>
                        </div>
                        <div>
                           <div className="more"><span className="more-count">10+</span> more</div>
                           <div className="from">from last week</div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="task-card">
                     <div className="title-items">
                        <div className="task-title">
                           <span className="task-icon center"><DoneTaskIcon/></span>
                           Project Done
                        </div>
                        <div className="task-count">10</div>
                     </div>
                     <div className="graph-more">
                        <div>
                           <DoneGraph/>
                        </div>
                        <div>
                           <div className="more"><span className="more-count">10+</span> more</div>
                           <div className="from">from last week</div>
                        </div>
                     </div>
                     </div>
             </div>
        
        </div>
    )
}

export default TaskBreakDown;