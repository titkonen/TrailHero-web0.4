import React from 'react';
import '../App.css';
import { Container, Row } from 'react-bootstrap';


function ContactsView() {

   return (
      <div>
         <Container>
            <Row>
               <h2 className="subheading-center">Contact to TrailHero</h2>
            </Row>
            <Row>
               <p className="content-about">
               If you have support request <br></br>or questions around TrailHero services, <br></br>please email to: <b>TrailHeroCrew@gmail.com </b>
               </p>
            </Row>
         </Container>
      </div>
   );
}

export default ContactsView;