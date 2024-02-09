import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import Menu from '../../components/menu/Menu';
import Home from "../home/Home";
import Users from "../users/Users";
import User from '../user/User';
import "../../styles/global.scss";

import { useNavigate } from 'react-router-dom';



// Adjust paths if needed

function Dashboard() {
  const location = useLocation();

  return (
    <div className="main" id="light">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
      {location.pathname === '/dashboard' && <Home />}
      {location.pathname === '/dashboard/' && <Home />}
      {location.pathname === '/dashboard/users' && <Users />}
      {location.pathname === '/dashboard/users/1' && <User />}
      {/* Add more conditional rendering for other sub-routes as needed */}
    </div>
    </div>
    </div>
  );
}

export default Dashboard;