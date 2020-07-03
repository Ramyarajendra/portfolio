import React, { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SideNav from './layouts/SideNav';
import About from './components/About';
import Experience from './components/Experience';
import { BrowserRouter } from 'react-router-dom';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Cert from './components/Cert';
import Education from './components/Education';
import Contact from './components/Contact';
import pic from './resources/abc.jpg'

function App() {
  useEffect(()=>{
    M.AutoInit()
  })
  return (
    <BrowserRouter>
      <div className='row no-margin grey darken-4' style={{ 'fontFamily':'Courier New' }} >
        <div className='col s3'>
          <SideNav/>
        </div>
        <div className='col s9 no-pad-left'>
            <div style={{'minHeight':'100vh', 'backgroundImage':`url(${pic})`,'background-position': 'center','background-repeat': 'no-repeat','background-size': 'cover'}}>
              <About/>
            </div>
            <div className='section' style={{'minHeight':'100vh'}}>
              <Experience/>
            </div>
            <div style={{'minHeight':'100vh'}}>
              <Education/>
            </div>
            <div className='section' style={{'minHeight':'100vh'}}>
              <Projects/>
            </div>
            <div className='section' style={{'minHeight':'100vh'}}>
              <Skills/>
            </div>
            <div className='section' style={{'minHeight':'100vh'}}>
              <Cert/>
            </div>
            <div className='section' style={{'minHeight':'100vh'}}>
              <Contact/>
            </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
