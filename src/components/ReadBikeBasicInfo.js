import React from 'react';
import firebase from '../firebase';

export const ReadBikeBasicInfo = ({ basicinfo }) => {
   const [serialnumber, setSerialnumber] = React.useState(basicinfo.serialnumber); // serialnumber 
   const [purchasedate, setPurchasedate] = React.useState(basicinfo.purchasedate); // purchasedate 
   const [purchaseplace, setPurchaseplace] = React.useState(basicinfo.purchaseplace); // purchaseplace 
   const [model, setModel] = React.useState(basicinfo.model); // model 

   // Updates data identicating right id and add new updated values.
   const onUpdate = () => {
      const db = firebase.firestore()
      db.collection('bike-basic-info').doc(basicinfo.id).set({ ...basicinfo, serialnumber, purchasedate, purchaseplace, model })
   }

   // Deletes data with identicating right id
   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('bike-basic-info').doc(basicinfo.id).delete()
   }

   return (
      <div className="row">
         <div className="column">
            <label className="labelname">Bike model</label><br></br>
           <input 
               value={model}
               className="input"
               placeholder= "Model"
               size="20"  
               onChange={(event) => {
                  setModel(event.target.value);
               }} 
            />
         </div>   
         <div className="column">
            <label className="labelname">Serial number</label><br></br>
            <input 
               value={serialnumber}
               className="input"
               placeholder= "Serial number"
               size="20"  
               onChange={(event) => {
                  setSerialnumber(event.target.value);
               }} 
            />
         </div>      
         <div className="column">
            <label className="labelname">Purchase Date</label><br></br>
            <input 
               value={purchasedate}
               className="input"
               placeholder= "Purchase Date"
               size="20"  
               onChange={(event) => {
                  setPurchasedate(event.target.value);
               }} 
            />
         </div>
         <div className="column">
            <label className="labelname">Purchase Place</label><br></br>
               <input 
                  value={purchaseplace}
                  className="input"
                  placeholder= "Purchase Place"
                  size="20"  
                  onChange={(event) => {
                     setPurchaseplace(event.target.value);
                  }} 
               />
         </div>

         <button className="button-update" onClick={onUpdate}>Update</button>
         <button className="button-delete" onClick={onDelete}>Delete</button>
      </div>  
   )
}