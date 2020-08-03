import React from 'react';
import './App.css';
import firebase from './firebase';

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
import WelcomeView from './Views/WelcomeView';
import AboutView from './Views/AboutView';
import ContactsView from './Views/ContactsView';
import TestingView from './Views/TestingView';

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
            <li>
              <Link
                className="navigation"
                to="/about">About
              </Link>
            </li>
            <li>
              <Link
                className="navigation"
                to="/contacts">Contacts
              </Link>
            </li>
            {/* <li>
              <Link
                className="navigation"
                to="/testing">TESTING
              </Link>
            </li> */}
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/testing">
            <Testing />
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
      <div className="add-bikedata">
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
        <WelcomeView />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div>
      <div className="header">
        <h1 className="heading">Bike Info</h1>
        <div className="#">
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
        <div className="#">
          <MaintenanceData />
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <div className="header">
        <h1 className="heading">About</h1>
        <div className="lightgrey">
          <AboutView />
        </div>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <div className="header">
        <h1 className="heading">Contacts</h1>
        <div className="lightgrey">
          <ContactsView />
        </div>
      </div>
    </div>
  );
}

function Testing() {
  return (
    <div>
      <div className="header">
        <h1 className="heading">TestingView</h1>
        <div className="lightgrey">
          <TestingView />
        </div>
      </div>
    </div>
  );
}