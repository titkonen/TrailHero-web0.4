import React from 'react';
import firebase from '../firebase';
import { Container, Row, Col } from 'react-bootstrap';

export const ReadMaintenance = ({ maintenanceinfo }) => {
   const [frontfork, setFrontFork] = React.useState(maintenanceinfo.frontfork); // frontFork
   const [rearshock, setRearShock] = React.useState(maintenanceinfo.rearshock); // rearShock 

   const [frontwheel, setFrontWheel] = React.useState(maintenanceinfo.frontwheel); // frontWheel
   const [rearwheel, setRearWheel] = React.useState(maintenanceinfo.rearwheel); // rearWheel
   const [fronttire, setFrontTire] = React.useState(maintenanceinfo.fronttire); // frontTire
   const [reartire, setRearTire] = React.useState(maintenanceinfo.reartire); // rearTire

   const [frontbrake, setFrontBrake] = React.useState(maintenanceinfo.frontbrake); // frontBrake
   const [rearbrake, setRearBrake] = React.useState(maintenanceinfo.rearbrake); // rearBrake

   const [rearderailleur, setRearDerailleur] = React.useState(maintenanceinfo.rearderailleur); // rearDerailleur
   const [shifters, setShifters] = React.useState(maintenanceinfo.shifters); // shifters
   const [crankset, setCrankset] = React.useState(maintenanceinfo.crankset); // crankset
   const [cassette, setCassette] = React.useState(maintenanceinfo.cassette); // cassette
   const [chain, setChain] = React.useState(maintenanceinfo.chain); // chain

   console.log('Read Maintenance');

   // Updates data identicating right id and add new updated values.
   const onUpdate = () => {
      const db = firebase.firestore()
      db.collection('maintenance').doc(maintenanceinfo.id).set({
         ...maintenanceinfo,
         frontfork,
         rearshock,
         frontwheel,
         rearwheel,
         fronttire,
         reartire,
         frontbrake,
         rearbrake,
         rearderailleur,
         shifters,
         crankset,
         cassette,
         chain
      })
      console.log(frontfork);
   }

   // Deletes data with identicating right id
   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('maintenance').doc(maintenanceinfo.id).delete()
   }

   return (
      <div>
         <Container  className="container-position">
            <h2 className="subheading-info">My bike components</h2>
            <Row>
               <Col xs={6} sm={3}>
                  <label className="labelname">Front fork</label><br></br>
                  <input
                     value={frontfork}
                     className="input"
                     placeholder="Front fork"
                     size="20"
                     onChange={(event) => {
                        setFrontFork(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3}>
                  <label className="labelname">Rear shock</label><br></br>
                  <input
                     value={rearshock}
                     className="input"
                     placeholder="Rear shock"
                     size="20"
                     onChange={(event) => {
                        setRearShock(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3}>
                  <label className="labelname">Front wheel</label><br></br>
                  <input
                     value={frontwheel}
                     className="input"
                     placeholder="Front wheel"
                     size="20"
                     onChange={(event) => {
                        setFrontWheel(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3}>
                  <label className="labelname">Rear wheel</label><br></br>
                  <input
                     value={rearwheel}
                     className="input"
                     placeholder="Rear wheel"
                     size="20"
                     onChange={(event) => {
                        setRearWheel(event.target.value);
                     }}
                  />
               </Col>
            </Row>
            <Row>
               <Col xs={6} sm={3}>
                  <label className="labelname">Front tire</label><br></br>
                  <input
                     value={fronttire}
                     className="input"
                     placeholder="Front tire"
                     size="20"
                     onChange={(event) => {
                        setFrontTire(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3}>
                  <label className="labelname">Rear tire</label><br></br>
                  <input
                     value={reartire}
                     className="input"
                     placeholder="Rear tire"
                     size="20"
                     onChange={(event) => {
                        setRearTire(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3}>
                  <label className="labelname">Front brake</label><br></br>
                  <input
                     value={frontbrake}
                     className="input"
                     placeholder="Front brake"
                     size="20"
                     onChange={(event) => {
                        setFrontBrake(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3}>
                  <label className="labelname">Rear brake</label><br></br>
                  <input
                     value={rearbrake}
                     className="input"
                     placeholder="Rear brake"
                     size="20"
                     onChange={(event) => {
                        setRearBrake(event.target.value);
                     }}
                  />
               </Col>
            </Row>
            <Row>
               <Col xs={6} sm={3}>
                  <label className="labelname">Rear derailleur</label><br></br>
                  <input
                     value={rearderailleur}
                     className="input"
                     placeholder="Rear derailleur"
                     size="20"
                     onChange={(event) => {
                        setRearDerailleur(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3}>
                  <label className="labelname">Shifters</label><br></br>
                  <input
                     value={shifters}
                     className="input"
                     placeholder="Shifters"
                     size="20"
                     onChange={(event) => {
                        setShifters(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3}>
                  <label className="labelname">Crankset</label><br></br>
                  <input
                     value={crankset}
                     className="input"
                     placeholder="Crankset"
                     size="20"
                     onChange={(event) => {
                        setCrankset(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3}>
                  <label className="labelname">Cassette</label><br></br>
                  <input
                     value={cassette}
                     className="input"
                     placeholder="Cassette"
                     size="20"
                     onChange={(event) => {
                        setCassette(event.target.value);
                     }}
                  />
               </Col>
            </Row>
            <Row>
               <Col xs={6} sm={6} md={3}>
                  <label className="labelname">Chain</label><br></br>
                  <input
                     value={chain}
                     className="input"
                     placeholder="Chain"
                     size="20"
                     onChange={(event) => {
                        setChain(event.target.value);
                     }}
                  />
               </Col>
            </Row>
            <Row>
               <button className="button-update" onClick={onUpdate}>Update</button>
               <button className="button-delete" onClick={onDelete}>Delete</button>
            </Row>
         </Container>
      </div>
   )
}