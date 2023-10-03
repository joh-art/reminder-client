import React from 'react';
import './DashBoard.css';
import Main from '../Components/Main/Main';
import SideBar from '../Components/Sidebar/SideBar';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sideBar">
      <SideBar />
      </div>
      <div className="main-content">
      <Main />
      </div>
    </div>
  );
}

export default Dashboard;
