import axios from "axios";
import React, { useEffect, useState } from "react";

 let epochsList = ['medieval', 'renaissance', 'baroque', 'classical', 'early romantic', 'romantic', ' late romantic', '20th century', 'post-war', '21st century']

function Mood() {
  const [epochs, setEpochs] = useState([
    "medieval",
    "renaissance",
    "baroque",
    "classical",
    "early romantic",
    "romantic",
    "late romantic",
    "20th century",
    "post-war",
    "21st century",
  ]);
  const [fetchedData, setFetchedData] = useState('');

  // const handleEpochTypeChange = (e) => (console.clear(), console.log(epochs[e.target.value]));

  const handleEpochTypeChange = (e) => (epochs[e.target.value])

  const handleSubmit = e => {
    e.preventDefault();
    fetchData();
  }

    // useEffect(() => {
    //   async function getComposers() {
    //     const response = await axios(`https://api.openopus.org/composer/list/epoch/${epochs}.json`);
    //     const body = await response.json();
    //     console.log(body)
    //     setEpochs(body.composers.map())
       
    //   }
    // })

  // const [data, setEpochs] = useState({composers: []});

  async function fetchData() {
    const { data } = await axios.get(`https://api.openopus.org/composer/list/epoch/${epochs}.json`)
    console.log('data', data)
    setFetchedData(data);
    //setEpochs(data.request.item.split(','))
  }

  useEffect(() => {
    fetchData()
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(`https://api.openopus.org/composer/list/epoch/${epochs}.json`);
  //     console.log('setEpochs',result.data.request.item.split(','))
  //     setEpochs(result.data.request.item.split(','));
  //     //setEpochs(epochs)
  //   };
  //   fetchData();
  // }, [])

  //setEpochs will effect epochs.map (when you changed it to ['burzum', 'mayhem'], that's what it mapped over.) the second item in the u3seState is a function to update the original state, aka setState.

  return (
    <div className="Mood">
      <form onSubmit={handleSubmit}>
      <p>What are you in the Mood for?</p>
      <label for="epoch">Epoch:</label>
      <select onChange={(e) =>setEpochs(epochs[e.target.value])}>
        {epochsList.map((epoch, key) => 
          <option value={key}>{epoch}</option>
        )}
      </select>
      <input type="submit" value="Choose"/>
      </form>
    </div>
  );
}

export default Mood;
