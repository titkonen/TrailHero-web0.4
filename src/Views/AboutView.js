import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutView() {

   return (
      <div>
         <Container>
            <Row>
               <h2 className="subheading-center">TrailHero data and maintenance</h2>
               <p className="content-about">TrailHero is bicycle data gathering and maintenance application. You can mark down easily your bicycle related data and keep update your bicycle maintenance schedules and task lists.</p>
         
            </Row>
            <Row>
               <h3 className="#">Features</h3>
            </Row>
            <Row>
               <Col>
                  Mark down all by usage data
               </Col>
               <Col>
                  Mark down all bike components
               </Col>
               <Col>
                  Keep track bike maintanence schedule
               </Col>
               <Col>
                  Mark down all bike info
               </Col>



            </Row>
         </Container>
        
      </div>
   );
}

export default AboutView;