import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Build from '@material-ui/icons/Build';
import Info from '@material-ui/icons/Info';
import Schedule from '@material-ui/icons/Schedule';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import './About.css';


function AboutView() {

   return (
      <div>
         <Container>
            <Row>
               <h2 className="subheading-center">TrailHero data and maintenance</h2>
               <p className="content-about">TrailHero is bicycle data gathering and maintenance application. You can mark down easily your bicycle related data and keep update your bicycle maintenance schedules and task lists.</p>
         
            </Row>
            <Row>
               <h3 className="subheading-center">Features</h3>
            </Row>
            <Row>
               <Col className="#">
               <Schedule className="icons" color="primary" style={{ fontSize: 80 }} /><br></br>
                  <div className="icons-text">
                     Mark down all by usage data
                  </div>
               </Col>
               <Col>
               <DirectionsBikeIcon className="icons" color="primary" style={{ fontSize: 80 }} /><br></br>
                  <div className="icons-text">
                     Mark down all bike components
                  </div>   
               </Col>
               <Col>
               <Build className="icons" color="primary" style={{ fontSize: 80 }} /><br></br>
                  <div className="icons-text">
                     Keep track bike maintanence schedule
                  </div>   
               </Col>
               <Col>
                  <Info className="icons" color="primary" style={{ fontSize: 80 }} /><br></br>
                  <div className="icons-text">
                     Mark down all bike info
                  </div>
               </Col>



            </Row>
         </Container>
        
      </div>
   );
}

export default AboutView;