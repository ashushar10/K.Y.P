import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button, Brand } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
// import logo from './logo.svg'
// import pfIcon from './pf-logo.svg';
import logo from './../utils/img.jpg';

const WithIconRouterLink = () => (
  <Masthead id="icon-router-link">
    <MastheadToggle>
      <Button variant="plain" onClick={() => {}} aria-label="Global navigation">
        <BarsIcon />
      </Button>
    </MastheadToggle>
    <MastheadMain>
      <MastheadBrand >
        <Brand src={logo} alt="PatternFly" heights={{ default: '3.5rem' }} />
       
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <span>Content</span>
    </MastheadContent>
  </Masthead>
)
export default WithIconRouterLink;