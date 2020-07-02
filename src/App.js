import React from 'react';
import './App.css';
import firebase from './firebase';
import hero from './assets/hero-web.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components


// Views 
import MaintenanceData from './Views/MaintenanceData';
import InfoData from './Views/InfoData';
import DiaryData from './Views/DiaryData';

function App() {

  return (
    <Router>
      <div>
        <nav className="blue">
          <h3 className="logo">TrailHero</h3>
          <ul className="navigation">
            <li>
              <Link 
                className="navigation"
                to="/welcome">Welcome
              </Link>
            </li>
            <li>
              <Link 
                className="navigation"
                to="/">Bike Diary
              </Link>
            </li>
            <li>
              <Link 
                className="navigation"
                to="/maintenance">Bike Maintenance
              </Link>
            </li>
            <li>
              <Link 
                className="navigation"
                to="/info">Bike Info
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <BikeDiary />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/maintenance">
            <Maintenance />
          </Route>
        </Switch> 
      </div>   
    </Router>   
  );
}

export default App;

function BikeDiary() {
  
  return (
    <div>
      <div className="header">
        <h1 className="heading">BikeDiary</h1>
      </div>
      <div className="lightgrey">
        <DiaryData />  
      </div>
    
           
    </div>
  );
}

function Welcome() {

  return (
    <div>
      <div className="header">
        {/* EMPTY */}  
      </div>
      <div>
        <h1 className="heading-welcome">TrailHero</h1>
        <h2 className="subheading-welcome">Bike data and maintenance application</h2>
        <p className="content-about">TrailHero is bicycle data gathering and maintenance application. You can mark down easily your bicycle related data and keep update your bicycle maintenance schedules and task lists.</p>
          <img 
            src={hero}
            className="hero" 
            alt="Hero" 
          />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div>
      <div className="header">
        <h1 className="heading">Bike Info</h1>
          <div className="lightgrey">
            <InfoData />
          </div>  
      </div>
    </div>
  );
}

function Maintenance() {
  return (
    <div>
      <div className="header">
        <h1 className="heading">Maintenance</h1>
          <div className="lightgrey">
            <MaintenanceData />
          </div>
      </div>
    </div>
  );
}