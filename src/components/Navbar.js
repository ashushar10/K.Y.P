import React from 'react';
import {Page, PageSidebar, PageSidebarBody, Nav, MenuContent, MenuItem, MenuList, DrilldownMenu, Menu, PageSection} from '@patternfly/react-core';
// import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';
import { BrowserRouter as Router, Route, Routes,useParams,useLocation, NavLink} from "react-router-dom";
import Qe from './QE';
import Ops from './Ops';
import Developer from './Developer';
import BuisnessOwner from './BusinessOwner';
import Home from './Home';
import WithIconRouterLink from './Header';
import { useEffect, useState } from "react";
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import './Bar.css'
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
                <HomeIcon style={{position: 'relative', top: '5px', right: '2px'}}/>
                  Home
                </MenuItem>
                </NavLink>
                <NavLink className={({ isActive }) => "underline" + isActive ? " active" : ""}to="/BuisnessOwner">
                <MenuItem  >
                <BusinessIcon style={{position: 'relative', top: '5px', right: '2px'}}/>
                  Buisness Owner
                </MenuItem>
                </NavLink>
                <NavLink className={({ isActive }) => "underline" + isActive ? " active" : ""} to="/Developer">
                <MenuItem >
                    <CodeIcon style={{position: 'relative', top: '6px', right: '3px'}}/>
                  Developer
                </MenuItem>
                </NavLink>
                <NavLink  className={({ isActive }) => "underline" + isActive ? " active" : ""} to="/Qe">
                <MenuItem>
                <EngineeringIcon style={{position: 'relative', top: '5px', right: '2px'}}/>
                  QE
                </MenuItem>
                </NavLink>
                <NavLink  className={({ isActive }) => "underline" + isActive ? " active" : ""}to="/Ops ">
                <MenuItem>
                    <IntegrationInstructionsIcon style={{position: 'relative', top: '5px', right: '3px'}}/>
                  DevOps
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
        ? <Qe />: location.pathname === "/Ops"?<Ops/>:location.pathname === "/Developer"?<Developer/>:location.pathname === "/BuisnessOwner"?<BuisnessOwner/>:<Home/>
      }
      </PageSection>
    </Page>;
};
export default NavDrilldown;