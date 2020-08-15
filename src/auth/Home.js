import React from "react";
// import app from "./base";
import hero from '../assets/hero-web.jpg';
import firebase from '../firebase';
import { Button } from 'react-bootstrap';
import './Auth.css';

const Home = () => {
   return (
      <div>




         <h1 className="heading-welcome">Home</h1>
         <h1 className="subheading-center">Welcome to the TrailHero!</h1>
         <p className="content-about">TrailHero is bicycle data gathering and maintenance application. You can mark down easily your bicycle related data and keep update your bicycle maintenance schedules and task lists.</p>

         {/* <button 
            onClick={() => firebase.auth().signOut()}
         >Sign out</button> */}

         <div className="mt-48 mb-48 text-center">
            <Button
               variant="primary"
               onClick={() => firebase.auth().signOut()}
            >Sign out
            </Button>
         </div>
         


         <img
            src={hero}
            className="hero"
            alt="Hero"
         />

      </div>
   );
};

export default Home;