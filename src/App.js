import './App.css';
import SideBar from './components/sideBar/SideBar';
import TopNav from './components/topNav/TopNav';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div>
       <TopNav/>
       <SideBar/>
       <Dashboard/>
    </div>
  );
}

export default App;
