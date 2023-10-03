import React from 'react';
import {Page, PageSidebar, PageSidebarBody, Nav, MenuContent, MenuItem, MenuList, DrilldownMenu, Menu, PageSection} from '@patternfly/react-core';
// import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';
import { BrowserRouter as Router, Route, Routes,useParams,useLocation, NavLink} from "react-router-dom";
import Qe from './QE';
import { ServicesIcon, HomeIcon,BlackTieIcon ,ProcessAutomationIcon,DevIcon, ServiceCatalogIcon} from '@patternfly/react-icons';
import { Icon } from '@patternfly/react-core';
import Ops from './Ops';
import Developer from './Developer';
import BuisnessOwner from './BusinessOwner';
import Home from './Home';
import WithIconRouterLink from './Header';
import { useEffect, useState } from "react";

import './Bar.css'
import Sup from './Support';
// import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';

function getNavLayer(menuId) {
  switch (menuId) {
    case 'rootMenu':
      return 1;
    case 'Menu-1':
      return 2;
    case 'Menu-2':
      return 3;
      case 'Menu-3':
        return 4;
        case 'Menu-4':
      return 5;

  }
}

const NavDrilldown = () => {

  const [activeMenuId, setActiveMenuId] = React.useState('Menu-2');
  const navLayer = getNavLayer(activeMenuId);
  

  const location = useLocation(); // once ready it returns the 'window.location' object
  // const [url, setUrl] = useState("/");
  // useEffect(() => {
  //   setUrl(location.pathname);
  // }, [location]);
  // const homeClass = location.pathname === "/" ? "active": "";
  // const DevClass = location.pathname === "/Developer" ? "active": "";
  // const OpsClass = location.pathname === "/Ops" ? "active": "";
  // const QEClass = location.pathname === "/Qe" ? "active": "";
  // const BOClass = location.pathname === "/BuisnessOwner" ? "active": "";

  const sidebar = <PageSidebar>
      <PageSidebarBody>

        <Nav>
          <Menu id="rootMenu"    >
            <MenuContent >
              <MenuList>
                {/* <MenuItem itemId="item-1" direction="down" description="SubMenu 1" >
                  Item 1
                </MenuItem> */}
                <NavLink className={({ isActive }) => "underline" + isActive ? " active" : ""} to="/">
                <MenuItem  >
                <Icon size='lg' style={{position: 'relative', top: '3px',right: '1px', marginRight: '10px'}}>
        <HomeIcon  size='md'/> 
    
    </Icon>
    <span>   Home</span>
               
                </MenuItem>
                </NavLink>
                <NavLink className={({ isActive }) => "underline" + isActive ? " active" : ""}to="/BuisnessOwner">
                <MenuItem  >
                <Icon size='lg' style={{position: 'relative', top: '3px',right: '1px', marginRight: '10px'}}>
        <BlackTieIcon  size='md'/> 
    
    </Icon>
    <span>   BuisnessOwner</span>
                </MenuItem>
                </NavLink>
                <NavLink className={({ isActive }) => "underline" + isActive ? " active" : ""} to="/Developer">
                <MenuItem >
                <Icon size='lg' style={{position: 'relative', top: '3px',right: '1px', marginRight: '10px'}}>
        <DevIcon  size='md'/> 
    
    </Icon>
                 <span>  Developer</span>
                </MenuItem>
                </NavLink>
                <NavLink  className={({ isActive }) => "underline" + isActive ? " active" : ""} to="/Qe">
                <MenuItem>
                <Icon size='lg' style={{position: 'relative', top: '3px',right: '1px', marginRight: '10px'}}>
        <ServiceCatalogIcon  size='md'/> 
    
    </Icon>
                  <span>   QE</span>
                </MenuItem>
                </NavLink>
                <NavLink  className={({ isActive }) => "underline" + isActive ? " active" : ""}to="/Ops ">
                <MenuItem>
                <Icon size='lg' style={{position: 'relative', top: '3px',right: '1px', marginRight: '10px'}}>
        <ProcessAutomationIcon  size='md'/> 
    
    </Icon>
                  <span>   DevOps</span>
                </MenuItem>

                </NavLink>
                <NavLink  className={({ isActive }) => "underline" + isActive ? " active" : ""}to="/Support">
                <MenuItem>
                <Icon size='lg' style={{position: 'relative', top: '5px',right: '1px', marginRight: '10px'}}>
        <ServicesIcon  size='md'/>
    
    </Icon>
              <span>  Support</span>
                </MenuItem>
                
                </NavLink>
                
              </MenuList>
            </MenuContent>
          </Menu>
        </Nav>
      </PageSidebarBody>
    </PageSidebar>;
console.log(navLayer)

  return <Page   sidebar={sidebar}>
    
      <PageSection>
      {location.pathname === "/Qe"
        ? <Qe />: location.pathname === "/Ops"?<Ops/>:location.pathname === "/Developer"?<Developer/>:location.pathname === "/BuisnessOwner"?<BuisnessOwner/>:location.pathname === "/Support"?<Sup/>:<Home/>
      }
      </PageSection>
    </Page>;
};
export default NavDrilldown;