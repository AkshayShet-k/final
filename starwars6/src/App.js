import React from 'react';
import './Home';
import './logo';
import './Footer';
import './Highlight';
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
    <Logo/>
    <Footer /> 
       <Route exact path='/' component={Home}/>
       <Route exact path='/:id' component={Highlight}/>

  </div>
  
  );
}

export default App;
