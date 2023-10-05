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
import { ExclamationTriangleIcon, FileContractIcon, FileAltIcon, InProgressIcon,RedoIcon ,InfrastructureIcon, UserCogIcon, VirtualMachineIcon} from '@patternfly/react-icons';
import { Icon } from '@patternfly/react-core';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import TaskTwoToneIcon from '@mui/icons-material/TaskTwoTone';
import star from '../utils/star.jpeg'
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

// componentDidMount(){
//   fetch('http://localhost:3002')
//   .then(response => response.json())
//   .then(console.log)
// }
function BuisnessOwner() { 
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
        <div style={{backgroundImage: `url(${banner})`,color: 'white', height: 'auto', padding: '1rem', }}><div style={{textAlign: 'left', padding: '2rem'}}><div ></div><div style={{fontSize: '2rem'}}>Buisness Owner</div></div>
        </div>    <div style={{padding: '1rem', background: 'white'}}>
            <div style={{textAlign: "left",fontSize: '1.4rem', paddingBottom: '1rem' , justifyContent: 'flex'}}>
             <span ><img src={star} style={{position: 'relative', top: '10px', height: '2.5rem'}}/></span> <span style={{fontWeight: '500'}} >Frequently visited  </span> 
             <span><Link to="#" style={{ fontWeight: '300', paddingLeft: '2rem'}}>All use cases</Link></span>
           
            </div>
            
             <Box>
    <Grid container spacing={2}>
    {CardsJson?.schema[0]?.BuisnessOwner[0].ImportantFeatures.map((c) => {
        return (
          
        <Grid key={c.id} item xs={3}>
        
        <Link target="_blank" rel="noopener noreferrer" style={{color: 'black', textDecoration: 'none'}} to={c.Link}>
        <Card   isClickable style={{textAlign: "center", border: '0.5px solid #D3D3D3'}} id="clickable-card-example-1" >

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
    
           Getting started as a <span style={{color: '#ee0000'}}>buisness owner</span></div>
           
            <div>
            <Box>
    <Grid container spacing={2}>
      {console.log(CardsJson?.schema[0]?.BuisnessOwner)}
    {CardsJson?.schema[0]?.BuisnessOwner.map((c,i) => { 
     
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
        ? <RedoIcon color='#ee0000' size='md'/>:   <FileAltIcon color='#ee0000' size='md'/> 
      }
        
    
    </Icon>
    {/* <ExclamationTriangleIcon color='#ee0000' size='lg'/>  */}
    
       <span style={{fontSize: '1.1rem', marginLeft: '0.5rem'}}> {c.Name}</span> </CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300', paddingTop: '0.5rem'}}>{c.data}</CardBody>
        <CardFooter>
          <Link target="_blank" rel="noopener noreferrer" to={c.Link}>
<Button variant='secondary'  style={{fontSize: '1rem'}} > 
      Get started <ArrowRightIcon/>
    </Button>{' '}
    </Link>
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