import React from 'react';
import NavDrilldown from './Navbar';
import {Card, CardHeader, CardTitle, CardBody, CardFooter} from '@patternfly/react-core';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import {FileCodeIcon,PollHIcon, ExclamationTriangleIcon,FileAltIcon, FileContractIcon,  InProgressIcon,RedoIcon ,InfrastructureIcon, UserCogIcon, VirtualMachineIcon} from '@patternfly/react-icons';
import Multicolorordered from './PChart';
import GradeIcon from '@mui/icons-material/Grade';

import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import InsightsIcon from '@mui/icons-material/Insights';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import star from '../utils/star.jpeg'
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
import { useEffect, useState } from "react";
import CardsJson from "../Json/cards.json";
import sysD from '../utils/system-design.png'
import { Icon } from '@patternfly/react-core';
// componentDidMount(){
//   fetch('http://localhost:3002')
//   .then(response => response.json())
//   .then(console.log)
// }
function Developer() { 
console.log(CardsJson?.schema[0])
// const [data, setData] = useState([])
// const fetchJson = () => {
//   fetch("../Json/cards.json")
//   .then(response => {
//     return response.json();
//   }).then(data => {
//     setData(data);
//   });
// }
// useEffect(() => {
//   fetchJson()
// },[])

    return (
        <div style={{background: 'white'}}>
        <div style={{backgroundImage: `url(${banner})`,color: 'white', height: 'auto', padding: '1rem', }}><div style={{textAlign: 'left', padding: '2rem'}}><div ></div><div style={{fontSize: '2rem'}}>Developer</div></div>
        </div>    <div style={{padding: '1rem', background: 'white'}}>
            <div style={{textAlign: "left",fontSize: '1.4rem', paddingBottom: '1rem' , justifyContent: 'flex'}}>
             <span ><img src={star} style={{position: 'relative', top: '10px', height: '2.5rem'}}/></span>Most visited<span style={{fontWeight: '500'}} >   </span> 
             <span><Link to="#" style={{ fontWeight: '300', paddingLeft: '2rem'}}>View all</Link></span>
           
            </div>
            
             <Box>
    <Grid container spacing={2}>
    {CardsJson?.schema[0]?.Developer[0].ImportantFeatures.map((c) => {
        return (
          
        <Grid key={c.id} item xs={3}>
        
        <Link  target="_blank" rel="noopener noreferrer"  style={{color: 'black', textDecoration: 'none'}} to={c.Link}>
        <Card   isClickable style={{textAlign: "center", border: '0.5px solid #D3D3D3', lineHeight: '100%'}} id="clickable-card-example-1" >
        <CardHeader style={{fontSize: '1.2rem',fontWeight: '300'}} selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
{c.Name}
        </CardHeader>
      </Card>
      </Link>
      </Grid>
     
        )
    })}  
       


      </Grid>
      </Box>
      
       
           </div>
           
           <div style={{textAlign: 'left', padding: '1rem'}}>
           <div style={{ color: "black", fontSize: "1.4rem",padding: '1rem 0'}}>
    
           Getting started as a <span style={{color: '#ee0000'}}>developer</span></div>
           
            <div>
            <Box>
    <Grid container spacing={2}>
      {console.log(CardsJson?.schema[0]?.BuisnessOwner)}
    {CardsJson?.schema[0]?.Developer.map((c,i) => { 
     
        return (
       i > 0?
        <Grid key={c.id} item xs={4}>
        <Card  style={{textAlign: "left", border: '0.5px solid #D3D3D3', height: '250px', width: '500px'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
     <CardTitle>
    <Icon size='lg' style={{position: 'relative', top: '5px'}}>
    {c.Name === "Monitoring"
        ? <VirtualMachineIcon color='#ee0000' size='md'/>:c.Name === "Onboarding Plan"
        ? <FileContractIcon color='#ee0000' size='md'/>:c.Name === "Timeline"
        ? <InProgressIcon color='#ee0000' size='md'/>:c.Name === "Epic Dashboard"
        ? <InfrastructureIcon color='#ee0000' size='md'/>:c.Name === "Weekly Refinement"
        ? <RedoIcon color='#ee0000' size='md'/>: c.Name === "Project board"
        ? <PollHIcon color='#ee0000' size='md'/>:c.Name === "Developer Guide"
        ? <FileCodeIcon color='#ee0000' size='md'/>:  <FileAltIcon color='#ee0000' size='md'/> 
      }
    
    </Icon>
    {/* <ExclamationTriangleIcon color='#ee0000' size='lg'/>  */}
    
       <span style={{fontSize: '1.1rem', marginLeft: '0.5rem'}}> {c.Name}</span> </CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>{c.data}</CardBody>
        <CardFooter>
        {Array.isArray(c.Link) === true 
        ? 
        <div>
        <Link to={c.Link[0].Link} target="_blank" rel="noopener noreferrer" >
        <Button variant='primary' style={{fontSize: '1rem'}} > 
              {c.Link[0].Name} <ArrowRightIcon/>
            </Button>{' '}
            </Link> 
            <Link style={{paddingLeft: '3rem'}} to={c.Link[1].Link} target="_blank" rel="noopener noreferrer" >
            <Button variant='secondary' style={{fontSize: '1rem'}} > 
                  {c.Link[1].Name} <ArrowRightIcon/>
                </Button>{' '}
                </Link> 
                </div>
            :    <Link to={c.Link} target="_blank" rel="noopener noreferrer" >
        <Button variant='secondary' style={{fontSize: '1rem'}} > 
              Get started <ArrowRightIcon/>
            </Button>{' '}
            </Link> 
            
      }
      
</CardFooter>
      </Card>
      </Grid>
  : null
        )
      })}  
      
      
    

   
   
      </Grid>
      
      </Box>
      </div>
      </div>
      {/* <div style={{textAlign: 'left', padding: '1rem'}}>
      <div style={{ color: "black", fontSize: "1.4rem",padding: '0.2rem'}}>
    
    Metrics Overview</div>
    
        <Box><Grid container spacing={2}>
        <Grid item xs={3}> <Multicolorordered/></Grid> <Grid item xs={9}>   <MultiColorChart/></Grid></Grid></Box>
       
         
      </div> */}
            {/* <Multicolorordered/>
            <MultiColorChart/> */}
          <div><div style={{backgroundImage: `url(${banner})`,color: 'white', height: 'auto', padding: '0.5rem 1rem', }}><div style={{textAlign: 'left', padding: '2rem'}}><div ></div><div style={{fontSize: '2rem'}}>Dependency Chart</div></div>
        </div>
        
         <img style={{ height: '100%', width: '100%'}} src={sysD}/>
         </div> 
         
        </div>
    );
}
 
export default Developer;