import React from 'react';
import './App.css';
// import firebase from './firebase';

// For Auth imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./auth/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider } from './auth/Auth';
import PrivateRoute from "./auth/PrivateRoute";

// Views 
// import MaintenanceData from './Views/MaintenanceData';
// import InfoData from './Views/InfoData';
// import DiaryData from './Views/DiaryData';
import WelcomeView from './Views/WelcomeView';
import AboutView from './Views/AboutView';
import ContactsView from './Views/ContactsView';
import TestingView from './Views/TestingView';

function App() {

  return (
    <AuthProvider>
    <Router>
      <div>
        <nav className="blue">
          <h3 className="logo">TrailHero</h3>
          <ul className="navigation">
            {/* <li>
              <Link
                className="navigation"
                to="/welcome">Welcome
              </Link>
            </li> */}
            {/* <li>
              <Link
                className="navigation"
                to="/bikediary">Bike Diary
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
            </li> */}
            <li>
              <Link
                className="navigation"
                to="/login">Login
              </Link>
            </li>
            <li>
              <Link
                className="navigation"
                to="/signup">Sign up
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
           


            {/* <Route exact path="/signup" component={SignUp} /> */}


            <li>
              {/* <Link
                className="navigation"
                onClick={() => firebase.auth().signOut()}
                // to="/contacts"
                >Log out
              </Link> */}
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
        {/* <Route exact path="/"> */}
          {/* <Route exact path="/bikediary">
            <BikeDiary />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* <Route path="/info">
            <Info />
          </Route> */}
          {/* <Route path="/maintenance">
            <Maintenance />
          </Route> */}
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

        <div>
          <PrivateRoute exact path="/" component={Home} />
          {/* <PrivateRoute exact path="/" component={WelcomeView} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/signup" component={SignUp} />
        </div>



      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;

// function BikeDiary() {
//   return (
//     <div>
//       <div className="header">
//         <h1 className="heading">BikeDiary</h1>
//       </div>
//       <div>
//         <DiaryData />
//       </div>
//     </div>
//   );
// }

// function Info() {
//   return (
//     <div>
//       <div className="header">
//         <h1 className="heading">Bike Info</h1>
//         <div className="#">
//           <InfoData />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Maintenance() {
//   return (
//     <div>
//       <div className="header">
//         <h1 className="heading">Maintenance</h1>
//         <div className="#">
//           <MaintenanceData />
//         </div>
//       </div>
//     </div>
//   );
// }

function Welcome() {
  return (
    <div>
      <div className="header">
      <h1 className="heading">Welcome</h1>
      </div>
      <div>
        <WelcomeView />
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