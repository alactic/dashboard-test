import { useState } from 'react';
import './App.css';
import SideBar from './components/layout/sideBar/SideBar';
import TopNav from './components/layout/topNav/TopNav';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  const [sidebarToggle, setSideBarToggle] = useState(false);
  return (
    <div>
       <TopNav setSideBarToggle={setSideBarToggle} sidebarToggle={sidebarToggle}/>
       <SideBar sidebarToggle={sidebarToggle}/>
       <Dashboard/>
    </div>
  );
}

export default App;
