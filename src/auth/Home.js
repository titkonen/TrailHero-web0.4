import React from "react";
// import app from "./base";
// import hero from '../assets/hero-web.jpg';
import firebase from '../firebase';
// import { Button } from 'react-bootstrap';
import './Auth.css';
import '../App.css';

// For Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Views 
import MaintenanceData from '../Views/MaintenanceData';
import InfoData from '../Views/InfoData';
import DiaryData from '../Views/DiaryData';
import NotesData from '../Notes/Notes';

const Home = () => {
   return (
      <Router>
         <div>
            <nav className="sub-navigation">
            {/* <h3 className="logo">TrailHero</h3> */}
            <ul className="sub-navigation-links">
               {/* <li>
               <Link
                  className="sub-navigation-links"
                  to="/welcome">Welcome
               </Link>
               </li> */}
               <li>
               <Link
                  className="sub-navigation-links"
                  to="/bikediary">Data Diary
               </Link>
               </li>
               <li>
               <Link
                  className="sub-navigation-links"
                  to="/maintenance">Maintenance
               </Link>
               </li>
               <li>
               <Link
                  className="sub-navigation-links"
                  to="/notes">Notes
               </Link>
               </li>
               <li>
               <Link
                  className="sub-navigation-links"
                  to="/info">Info
               </Link>
               </li>
               {/* <li>
               <Link
                  className="navigation"
                  to="/about">About2
               </Link>
               </li> */}
               {/* <li>
               <Link
                  className="navigation"
                  to="/contacts">Contacts2
               </Link>
               </li> */}
               <li>
               <Link
                  className="sub-navigation-links"
                  onClick={() => firebase.auth().signOut()}
                  // to="/contacts"
                  >Log out
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
         {/* SWITCHER */}
            <Switch>
         {/* <Route exact path="/"> */}
            <Route exact path="/bikediary">
               <BikeDiary />
            </Route>
            {/* <Route path="/welcome">
               <Welcome />
            </Route> */}
            <Route path="/info">
               <Info />
            </Route>
            <Route path="/maintenance">
               <Maintenance />
            </Route>
            <Route path="/notes">
               <NotesData />
            </Route>
            {/* <Route path="/about">
               <About />
            </Route> */}
            {/* <Route path="/contacts">
               <Contacts />
            </Route> */}
            {/* <Route path="/testing">
               <Testing />
            </Route> */}
         </Switch>


            {/* <h1 className="heading-welcome">Home</h1> */}
            {/* <h1 className="subheading-center">Welcome to the TrailHero!</h1>
            <p className="content-about">TrailHero is bicycle data gathering and maintenance application. You can mark down easily your bicycle related data and keep update your bicycle maintenance schedules and task lists.</p> */}

            {/* <button 
               onClick={() => firebase.auth().signOut()}
            >Sign out</button> */}

            {/* <div className="mt-48 mb-48 text-center">
               <Button
                  variant="primary"
                  onClick={() => firebase.auth().signOut()}
               >Sign out
               </Button>
            </div> */}
            


            {/* <img
               src={hero}
               className="hero"
               alt="Hero"
            /> */}

         </div>
      </Router>
   );
};

export default Home;

function BikeDiary() {
   return (
     <div>
       <div className="header">
         <h1 className="heading">BikeDiary</h1>
       </div>
       <div>
         <DiaryData />
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

function Notes() {
   return (
     <div>
       <div className="header">
         <h1 className="heading">Notes</h1>
         <div className="#">
           <NotesData />
         </div>
       </div>
     </div>
   );
}