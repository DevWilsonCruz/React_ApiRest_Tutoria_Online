import React, { useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import {NavBarDashboard} from "../components/index"
import "../css/dashboard.css"
const Dashboard = ({handleLogOut}) =>{
  const [navBarState,setNavbarState]=useState(true)
  const handleNavbarState=useCallback((state)=>{
    setNavbarState(state)
  },[])
  return(
    <>
    <NavBarDashboard handleNavBar={handleNavbarState} handleLogOut={handleLogOut}/>
    <div className={navBarState?"dashboard-container":"dashboard-container-expand"}>
      <Outlet />
    </div>
    </>
  )
}
export default Dashboard;