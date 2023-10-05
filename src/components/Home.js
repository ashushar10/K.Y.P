import React from 'react';
import NavDrilldown from './Navbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { BackdropBasic, BackgroundImageBasic, CardClickable, SingleSelectableCard } from './BackG';
import {Card, CardHeader, CardTitle, CardBody} from '@patternfly/react-core';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import {Button} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import InsightsIcon from '@mui/icons-material/Insights';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import TaskTwoToneIcon from '@mui/icons-material/TaskTwoTone';
import pat from '../utils/Pasted image.png'
// import pat from '../utils/img.jpg'
import GradeIcon from '@mui/icons-material/Grade';
import banner from '../utils/estate_section_banner.png'
import roadmap from '../utils/roadmap.svg'
import impact from '../utils/impact.svg'
import sysD from '../utils/system-design.png'
 
function Home() { 
    return (
        <div>
            <div style={{clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",backgroundImage: `url(${banner})`, color: 'white', height: 'auto', padding: '4rem'}}><div style={{fontSize: '1.5rem'}}>Buisness Owner • Developer • QE • DevOps </div><div style={{fontSize: '3rem'}}>Make your future work better!!</div>
            {/* <Button variant='="tertiary' style={{fontSize: '1rem'}} size="lg"> 
      Get started <ArrowRightIcon/>
    </Button>{' '} */}
            </div>
            <div style={{padding: '3rem', margin: 'auto', justifyContent: 'center'}} >
            <Box>
    <Grid container style={{}} spacing={1}>
        <Grid spacing={3} item xs={6}>
    
        <img style={{ height: '400px', width: '650px'}} src={impact}/>

      </Grid>
      <Grid style={{}}  item xs={6}>
        <Card style={{textAlign: "left", height: '400px', width: '650px', padding: '2rem 0'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
        <div style={{fontSize: '2rem', fontWeight: '500'}}>Impact on Red Hat overall strategy</div>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>
  
<span style={{fontWeight: '350', fontSize: '1.1rem'}}>It provides value to the Redhat console and RHSM web portal by providing an API suite, and many external customers use them for automation.
  </span>
</CardBody>
      </Card>
      </Grid>
     
 
   
   
      </Grid>
      <Grid container style={{}} spacing={1}>
      
      <Grid spacing={2} style={{paddingTop: '3.5rem'}}  item xs={6}>
        <Card style={{textAlign: "left", height: '400px', width: '650px', padding: '2rem 0'}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
     <div style={{fontSize: '2.2rem', fontWeight: '500'}}>Roadmap</div>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>
     
<span style={{fontWeight: '350', fontSize: '1.1rem'}}>It is the output of a strategic planning process. It defines the goals of the detailed work and show the time frame for achievement, with the given resources and capacity. It is a  useful tool for communicating plans to stakeholders and tracking progress against your objectives.

How TeamNado defines it?

TeamNado follows a practice of a bi-weekly session with the PMs, Rich Jerrido and Shane McDowell. In which, they talk about the upcoming work and business use cases. This is recorded session which can be viewed later.</span>
</CardBody>
      </Card>
      </Grid>
     
      <Grid  item xs={6}>
    
    <img style={{height: '400px', width: '650px'}} src={ roadmap}/>

  </Grid>
   
   
      </Grid>
      </Box>

            </div>
        {/* <div style={{textAlign: "left", paddingBottom: '0.7rem'}}>
            <span style={{backgroundColor: "black", color: "white", fontSize: '1.6rem', padding: '0.2rem'}}> LET’S SHARE YOUR FUTURE PLANS </span>
            <div>
        <span style={{backgroundColor: "black", color: "white", fontSize: "2.6rem",padding: '0.2rem'}}>
    
 and Let us Help You Succeed… </span></div>
</div><div>
    <Box>
    <Grid container spacing={2}>
        <Grid spacing={2} item xs={4}>
        <Card style={{textAlign: "left"}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
    <BusinessIcon fontSize='large'/>
   
          <CardTitle>IT Project Management Services</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>The appropriate IT Project Management structure is critical for the success of every organization. It could be a full Project management methodology setup or simply outsourcing the task to us.</CardBody>
      </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{textAlign: "left"}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
    <SearchIcon fontSize='large'/>
    
          <CardTitle>Enterprise Resource planning</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>ERPs play a vital role in providing a backbone to any organization in this digital age. We offer a range of services to help your organization maximize ERP benefits whether it is Oracle, SAP, Microsoft and Odoo.</CardBody>
      </Card>
      </Grid>
      <Grid item xs={4}>
      <Card style={{textAlign: "left"}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}><InsightsIcon fontSize='large'/>
          <CardTitle>Devops Transformation Services</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>We help the adoption of DevOps practices & shift your culture towards operationalizing Software Development.
DevOps proved to increase your business agility, reduce Time to Market in a cost-effective cadence.</CardBody>
      </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{textAlign: "left"}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
    <MailOutlineTwoToneIcon fontSize='large'/>
   
          <CardTitle>IT Support services</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>The appropriate IT Project Management structure is critical for the success of every organization. It could be a full Project management methodology setup or simply outsourcing the task to us.</CardBody>
      </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{textAlign: "left"}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
    <ThumbUpAltTwoToneIcon fontSize='large'/>
    
          <CardTitle>Enterprise Resource planning</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>ERPs play a vital role in providing a backbone to any organization in this digital age. We offer a range of services to help your organization maximize ERP benefits whether it is Oracle, SAP, Microsoft and Odoo.</CardBody>
      </Card>
      </Grid>
      <Grid item xs={4}>
      <Card style={{textAlign: "left"}} id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
   
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}><TaskTwoToneIcon fontSize='large'/>
          <CardTitle>IT support</CardTitle>
        </CardHeader>
        <CardBody style={{fontWeight: '300'}}>We help the adoption of DevOps practices & shift your culture towards operationalizing Software Development.
DevOps proved to increase your business agility, reduce Time to Market in a cost-effective cadence.</CardBody>
      </Card>
      </Grid>
      
      </Grid>
      </Box>
        </div> */}
        <div> <div style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",backgroundImage: `url(${banner})`, color: 'white', height: 'auto', padding: '1rem'}}><div style={{fontSize: '3rem'}}>Dependency chart</div>
         </div>
         <img style={{ height: '100%', width: '100%'}} src={sysD}/>
         </div>
          
        </div>
    );
}
 
export default Home;