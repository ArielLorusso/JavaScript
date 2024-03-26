import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard" 
import { BigSidebar, Navbar, SmallSidebar } from "../components"
import { useState } from "react";
//import { createContext, useContext, useEffect, useState } from 'react';

const DashboardLayout = () => {
  // SET golbal values : User Sidebar DarkMode... temporally here, later server
  // User : 
  const user = {name:'jhon'}
  const [showSidebar,setShowSidebar] = useState(false) // React : useState
  const [isDarkTheme,setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    console.log('toggle DarkTheme') // F12 debug
  };
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  };
  
  const logourUser = async () => {
    console.log('logout User') // F12 debug
  };

  //const DashboardContext = createContext();

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar/>
          <div classname='dashboard-page'>
            <Outlet/>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
 