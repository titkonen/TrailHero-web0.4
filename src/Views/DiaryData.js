import React from 'react';
import firebase from '../firebase';

import { DataInput } from '../components/DataInput';
import '../components/DataInput.css';

function DiaryData() {
   const [bikedatas, setBikedatas] = React.useState([])
   const [newBikeDate, setNewBikeDate] = React.useState()
   const [newBikeKM, setNewBikeKM] = React.useState()
   const [newBikeTime, setNewBikeTime] = React.useState()
   const [newBikeRoute, setNewBikeRoute] = React.useState()
   const [newBikeModel, setNewBikeModel] = React.useState()

   React.useEffect(() => {
      const db = firebase.firestore();
      return db.collection('bike-data-diary').onSnapshot((snapshot) => {
         const bikeInfo = [];
         snapshot.forEach(doc => bikeInfo.push({ ...doc.data(), id: doc.id }));
         setBikedatas(bikeInfo);
      });
   }, []);

   const onCreate = () => {
      const db = firebase.firestore();
      db.collection('bike-data-diary').add({
         date: newBikeDate,
         km: newBikeKM,
         time: newBikeTime,
         route: newBikeRoute,
         bikemodel: newBikeModel
      });
   }

   return (
      <div>
         <ul>
            <h2 className="subheading">Add new data</h2>
            <input
               value={newBikeDate}
               className="input"
               required
               placeholder="Date"
               size="10"
               onChange={(event) => setNewBikeDate(event.target.value)}
            />
            <input
               value={newBikeKM}
               className="input"
               required
               placeholder="Length"
               size="7"
               onChange={(event) => setNewBikeKM(event.target.value)}
            />
            <input
               value={newBikeTime}
               className="input"
               required
               placeholder="Time"
               size="8"
               onChange={(event) => setNewBikeTime(event.target.value)}
            />
            <input
               value={newBikeRoute}
               className="input"
               required
               placeholder="Route"
               size="20"
               onChange={(event) => setNewBikeRoute(event.target.value)}
            />
            <input
               value={newBikeModel}
               className="input"
               required
               placeholder="Bike model"
               size="20"
               onChange={(event) => setNewBikeModel(event.target.value)}
            />
            <button
               onClick={onCreate}
               className="button"
            >ADD</button>

            <button
               onClick={onCreate}
               className="button"
            >Loader</button>

            {/* Array of Bike Data */}

            <h2 className="subheading">Bike data</h2>
            {bikedatas.map(bikedata => (
               <li
                  key={bikedata.date}
                  className="listmarker"
               >
                  {/* {bikedata.date} */}
                  <DataInput bikedata={bikedata} />
               </li>
            ))}
         </ul>

      </div>
   );
}

export default DiaryData;