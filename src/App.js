// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavDrilldown from './components/Navbar.js'
import '@patternfly/react-core/dist/styles/base.css';
import Ops from './components/Ops';
import Qe from './components/QE';
import Developer from './components/Developer';
import BuisnessOwner from './components/BusinessOwner';

import Home from './components/Home';
import WithIconRouterLink from './components/Header';
import Footer from './components/Footer';
import Sup from './components/Support';


function App() {
  
  return (
    <div className="App">
      <WithIconRouterLink/>
      
  <Router>
    
  <NavDrilldown/>

       <Routes>
        
       <Route path="/" component={Home} />
         {/* <Route path="/" exact component={Checkout} /> */}
        <Route path="/Qe" component={Qe} />
         <Route path="/Ops" component={Ops} />
         <Route path="/Developer" component={Developer} />
         <Route path="/BuisnessOwner" component={BuisnessOwner} /> 
         <Route path="/Support" component={Sup} /> 
       
       </Routes>


     </Router>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
