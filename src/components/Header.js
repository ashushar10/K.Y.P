import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button, Brand } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
// import logo from './logo.svg'
// import pfIcon from './pf-logo.svg';
import {RedhatIcon} from '@patternfly/react-icons';
import { Icon } from '@patternfly/react-core';
import logo from './../utils/img.jpg';

const WithIconRouterLink = () => (
  <Masthead id="icon-router-link" >
   
    <Icon size='xl' style={{position: 'relative', top: '5px',right: '3px'}}>
        <RedhatIcon color='#ee0000' size='lg'/> 
    
    </Icon>


  
    <MastheadMain style={{marginLeft:'auto'}}>
    <MastheadContent style={{marginRight: '2rem', fontWeight: '500', fontSize: '1.5rem'}}>
      <span>RHSM API</span>
    </MastheadContent>
      <MastheadBrand  >
        <Brand  src={logo} alt="PatternFly" heights={{ default: '4.5rem' }} />
       
      </MastheadBrand>
    </MastheadMain>
   
  </Masthead>
)
export default WithIconRouterLink;