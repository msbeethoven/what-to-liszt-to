import axios from "axios";
import React, { useEffect, useState } from "react";

function Mood() {
  const [epochs, setEpochs] = useState([
    "Select one...",
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
  const [selectedEpoch, setSelectedEpoch] = useState('');

  // const handleEpochTypeChange = (e) => (console.clear(), console.log(epochs[e.target.value]));

  async function fetchData() {
    const { data } = await axios.get(`https://api.openopus.org/composer/list/epoch/${selectedEpoch}.json`);
    //data.request.item = setSelectedEpoch(); need to change item ?
    console.log('epochs', epochs);
    console.log('data', data )
   // setFetchedData(data);
    //setSelectedEpoch()
    //setEpochs(data.request.item.split(','))
  }

  useEffect(() => {
    fetchData();
  }, [selectedEpoch]);

  function onChange(event) {
    //console.log(epochs[event.target.value])
    const value = epochs[event.target.value]
    console.log('value', value)
    setSelectedEpoch(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetchData();
    setSelectedEpoch(selectedEpoch);
  }

  // const handleChange = (e) => (console.log( epochs[e.target.value]));
  
  //console.log(epochs[e.target.value]) --> the epoch string

  //setEpochs will effect epochs.map (when you changed it to ['burzum', 'mayhem'], that's what it mapped over.) the second item in the useState is a function to update the original state, aka setState.

  return (
    <div className="Mood">
       <form onSubmit={handleSubmit} >
      <p>What are you in the Mood for?</p>
      <label htmlFor="epoch">Epoch:</label>
      <select onChange={onChange}>
        {epochs.map((epoch, key) => 
          <option value={key}>{epoch}</option>
        )}
      </select>
      <input type="submit" value="Choose"/>
      </form>
    </div>
  );
}

export default Mood;
