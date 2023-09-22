import React from 'react';
import NavDrilldown from './Navbar';
import {Card, CardHeader, CardTitle, CardBody, CardFooter} from '@patternfly/react-core';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import Multicolorordered from './PChart';
import GradeIcon from '@mui/icons-material/Grade';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import InsightsIcon from '@mui/icons-material/Insights';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import TaskTwoToneIcon from '@mui/icons-material/TaskTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import MultiColorChart from './LiCharts';
import { NewReleases, Troubleshoot } from '@mui/icons-material';
import {Button} from '@patternfly/react-core';
import AssessmentIcon from '@mui/icons-material/Assessment';
import banner from '../utils/estate_section_banner.png'
function BuisnessOwner() { 
    return (
        <div style={{background: 'white'}}>
        <div style={{backgroundImage: `url(${banner})`,color: 'white', height: 'auto', padding: '1rem', }}><div style={{textAlign: 'left', padding: '2rem'}}><div style={{fontSize: '1.8rem'}}>Hi, User</div><div style={{fontSize: '1.5rem'}}>Buisness Owner</div></div>
        </div>    <div style={{padding: '1rem', background: 'white'}}>
            <div style={{textAlign: "left",fontSize: '1.4rem', paddingBottom: '1rem' , justifyContent: 'flex'}}>
             <span ><GradeIcon style={{position: 'relative', top: '8px'}}fontSize='large'/></span> <span style={{fontWeight: '500'}} >Important Use cases    </span> 
             <span><Link to="#" style={{ fontWeight: '300', paddingLeft: '2rem'}}>Learn more use cases</Link></span>
           
            </div>
           <Box>
    <Grid container spacing={2}>
        <Grid item xs={3}>
        <Card isClickable style={{textAlign: "center", border: '0.5px solid #D3D3D3'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
  
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}><div style={{fontSize: '1.2rem'}}>Need | Requirements</div>
        <span style={{fontWeight: '350'}}>Overview</span>
</CardBody>
      </Card>
      </Grid>
      <Grid item xs={3}>
        <Card isClickable style={{textAlign: "center", border: '0.5px solid #D3D3D3'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
  
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}><div style={{fontSize: '1.2rem'}}>Roadmap | map</div>
        
<span style={{fontWeight: '350'}}>Project map</span></CardBody>
      </Card>
      </Grid>
      
      <Grid item xs={3}>
        <Card isClickable style={{textAlign: "center", border: '0.5px solid #D3D3D3'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
  
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}><div style={{fontSize: '1.2rem'}}>Impact on Red hat Overall strategy</div>
        
<span style={{fontWeight: '350'}}> Performance impact</span></CardBody>
      </Card>
      </Grid>
     
      <Grid item xs={3}>
        <Card isClickable style={{textAlign: "center", border: '0.5px solid #D3D3D3'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
  
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}><div style={{fontSize: '1.2rem'}}>Timelines | Timeframe</div>
        
<span style={{fontWeight: '350'}}> Timelines and timeframes</span></CardBody>
      </Card>
      </Grid>
   
   
      </Grid>
      </Box>
           </div>
           
           <div style={{textAlign: 'left', padding: '1rem'}}>
           <div style={{ color: "black", fontSize: "1.4rem",padding: '0.2rem'}}>
    
           Get to know more our capabilities</div>
           
            <div>
            <Box>
    <Grid container spacing={2}>
        <Grid item xs={4}>
        <Card  style={{textAlign: "left", border: '0.5px solid #D3D3D3'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
    <NewReleasesIcon fontSize='large'/>
    
          <CardTitle>Feature Releases</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>ERPs play a vital role in providing a backbone to any organization in this digital age. We offer a range of services to help your organization maximize ERP benefits whether it is Oracle, SAP, Microsoft and Odoo.</CardBody>
        <CardFooter>
<Button variant='secondary' style={{fontSize: '1rem'}} > 
      Get started <ArrowRightIcon/>
    </Button>{' '}
</CardFooter>
      </Card>
      </Grid>
      <Grid item xs={4}>
        <Card  style={{textAlign: "left", border: '0.5px solid #D3D3D3'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}><InsightsIcon fontSize='large'/>
          <CardTitle>Existing solutions</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>We help the adoption of DevOps practices & shift your culture towards operationalizing Software Development.
DevOps proved to increase your business agility.</CardBody>
<CardFooter>
<Button variant='secondary' style={{fontSize: '1rem'}} > 
      Get started <ArrowRightIcon/>
    </Button>{' '}
</CardFooter>
      </Card>
      </Grid>
      
      <Grid item xs={4}>
        <Card  style={{textAlign: "left", border: '0.5px solid #D3D3D3'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
    <AssessmentIcon fontSize='large'/>
   
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>The appropriate IT Project Management structure is critical for the success of every organization. It could be a full Project management methodology setup or simply outsourcing the task to us.</CardBody>
        <CardFooter>
<Button variant='secondary' style={{fontSize: '1rem'}} > 
      Get started <ArrowRightIcon/>
    </Button>{' '}
</CardFooter> </Card>
      </Grid>
      <Grid item xs={4}>
        <Card  style={{textAlign: "left", border: '0.5px solid #D3D3D3'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
    <MonitorHeartIcon fontSize='large'/>
    
          <CardTitle>Monitoring/Alerts</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>ERPs play a vital role in providing a backbone to any organization in this digital age. We offer a range of services to help your organization maximize ERP benefits whether it is Oracle, SAP, Microsoft and Odoo.</CardBody>
        <CardFooter>
<Button variant='secondary' style={{fontSize: '1rem'}} > 
      Get started <ArrowRightIcon/>
    </Button>{' '}
</CardFooter>
      </Card>
      </Grid>
      <Grid item xs={4}>
        <Card  style={{textAlign: "left", border: '0.5px solid #D3D3D3'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}><TroubleshootIcon fontSize='large'/>
          <CardTitle>troubleshooting</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>We help the adoption of DevOps practices & shift your culture towards operationalizing Software Development.
DevOps proved to increase your business agility.</CardBody>
<CardFooter>
<Button variant='secondary' style={{fontSize: '1rem'}} > 
      Get started <ArrowRightIcon/>
    </Button>{' '}
</CardFooter>
      </Card>
      </Grid>
      
    

   
   
      </Grid>
      
      </Box>
      </div>
      </div>
      <div style={{textAlign: 'left', padding: '1rem'}}>
      <div style={{ color: "black", fontSize: "1.4rem",padding: '0.2rem'}}>
    
    Metrics Overview</div>
    
        <Box><Grid container spacing={2}>
        <Grid item xs={3}> <Multicolorordered/></Grid> <Grid item xs={9}>   <MultiColorChart/></Grid></Grid></Box>
       
         
      </div>
            {/* <Multicolorordered/>
            <MultiColorChart/> */}
         
    
        
        </div>
    );
}
 
export default BuisnessOwner;