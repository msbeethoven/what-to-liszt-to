import axios from "axios";
import React, { useEffect, useState } from "react";

// let epochs = ['medieval', 'renaissance', 'baroque', 'classical', 'early romantic', 'romantic', ' late romantic', '20th century', 'post-war', '21st century']

function Mood() {
  const [epochs, setEpochs] = useState([
    "medieval",
    "renaissance",
    "baroque",
    "classical",
    "early romantic",
    "romantic",
    " late romantic",
    "20th century",
    "post-war",
    "21st century",
  ]);

  const handleEpochTypeChange = (e) => (console.clear(), console.log(epochs[e.target.value]));

  //   useEffect(() => {
  //     async function getComposers() {
  //       const response = await axios(`https://api.openopus.org/composer/list/epoch/${epochs}.json`);
  //       const body = await response.json();
  //       setEpochs(body.composers.map()
  // )
  //     }
  //   })

  // const [data, setEpochs] = useState({composers: []});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(`https://api.openopus.org/composer/list/epoch/${epochs}.json`);

  //     //setEpochs(result.data);
  //   };
  //   fetchData();
  // }, [])

  return (
    <div className="Mood">
      <p>What are you in the Mood for?</p>
      <label for="epoch">Epoch:</label>
      <select onChange={(e) => handleEpochTypeChange(e)}>
        {epochs.map((epoch, key) => 
          <option value={key}>{epoch}</option>
        )}
      </select>
    </div>
  );
}

export default Mood;
