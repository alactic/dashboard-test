import React from 'react';
import Chart from '../../components/dashboard/chart/Chart';
import Schedule from '../../components/dashboard/schedule/Schedule';
import TaskBreakDown from '../../components/dashboard/taskBreakdown/TaskBreakDown';
import Tasks from '../../components/dashboard/tasks/Tasks';
import './Dashboard.css';

const Dashboard = () =>{
    return (
       <div className="dashboard-container">
          <div className="dashboard-content">
             <TaskBreakDown/>
             <Chart/>
             <Tasks/>
           </div>
          <Schedule/>
       </div>
    )
}

export default Dashboard;