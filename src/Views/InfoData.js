import React from 'react';
import firebase from '../firebase';

import './Views.css';
import { ReadBikeBasicInfo } from '../components/ReadBikeBasicInfo';

function InfoData() {
   const [basicinfos, setBasicInfos] = React.useState( [] )
   const [newBikeModel, setNewBikeModel] = React.useState()
   const [newSerialNumber, setNewSerialNumber] = React.useState()
   const [newPurchaseDate, setNewPurchaseDate] = React.useState()
   const [newPurchasePlace, setNewPurchasePlace] = React.useState()
 
   // Bike Basic info 
   React.useEffect(() => {
      const db = firebase.firestore();
      return db.collection('bike-basic-info').onSnapshot((snapshot) => {
      const perustieto = [];
      snapshot.forEach(doc => perustieto.push({...doc.data(), id: doc.id }));
      setBasicInfos(perustieto);
      });
   }, []);

   const saveAll = () => {
      const db = firebase.firestore();
      db.collection('bike-basic-info').add({ 
        model: newBikeModel, 
        serialnumber: newSerialNumber,
        purchasedate: newPurchaseDate,
        purchaseplace: newPurchasePlace
      });
    }

   return(
      <div>
         <h2 className="subheading-info">Add new bike information</h2>
         <div className="row ml-16"> 
           <div className="column">
            <label className="labelname">Bike model</label><br></br>
            <input
              value={newBikeModel}
              className="input"
              required
              placeholder= "Bike model"
              size="20"
              onChange={(event) => setNewBikeModel(event.target.value)}
            /> 
          </div>  
           
          <div className="column">
            <label className="labelname">Serial number</label><br></br>
            <input
              value={newSerialNumber}
              className="input"
              required
              placeholder= "Serial number"
              size="20"
              onChange={(event) => setNewSerialNumber(event.target.value)}
            /> 
          </div>  

          <div className="column">
            <label className="labelname">Purchase Date</label><br></br>
            <input
              value={newPurchaseDate}
              className="input"
              required
              placeholder= "Purchase Date"
              size="20"
              onChange={(event) => setNewPurchaseDate(event.target.value)}
            />    
          </div> 

          <div className="column">
            <label className="labelname">Purchase Place</label><br></br>
            <input
              value={newPurchasePlace}
              className="input"
              required
              placeholder= "Purchase Place"
              size="20"
              onChange={(event) => setNewPurchasePlace(event.target.value)}
          /> 
          </div>

          <div className="column">
            <button className="button" onClick={saveAll}>Save</button>
          </div>
            
         </div>

      <div className="grey">
        <h2 className="subheading-info">My bikes</h2> 
        <div className="grey ml-16">

          {basicinfos.map(basicinfo => (
              <li 
                key={basicinfo.model}
                className="listmarker"
              >
              <ReadBikeBasicInfo basicinfo={basicinfo} />
              </li>
          ))}
        </div>
      </div>
      

    </div>
   );
}

export default InfoData;