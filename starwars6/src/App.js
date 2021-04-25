import React from 'react';
import Home from './Home';
import Logo1 from './logo';
import Footer from './Footer';
import Nextpage from './Nextpage';
import Finaldisp from './Finaldisp';
import image from './images/background.png';
import './App.css';
import {Route} from "react-router-dom";


function App() {
  return (
    <div
    style={{backgroundImage:`url(${image})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    width:'100vw',
    height:'100vh'
  }}>
    <Logo1/>
    <Footer /> 
       <Route exact path='/' component={Home}/>
       <Route exact path='/:id' component={Nextpage}/>
       <Route path={"/:id/:id1/"} component = {Finaldisp} />

  </div>
  
  );
}

export default App;
