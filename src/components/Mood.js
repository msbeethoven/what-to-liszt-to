import axios from "axios";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import ComposerResults from "./ComposerResults";
import { useIsMount } from "./useIsMount"

let SELECT_ONE = 'Select one...';

function Mood() {
  const [epochs, setEpochs] = useState([
    SELECT_ONE,
    "Medieval",
    "Renaissance",
    "Baroque",
    "Classical",
    "Early Romantic",
    "Romantic",
    "Late Romantic",
    "20th Century",
    "Post-War",
    "21st Century",
  ]);
  const [selectedEpoch, setSelectedEpoch] = useState(SELECT_ONE);
  const [writers, setWriters] = useState([]); //named writers so as to not get confused with API's composers attribute
  const [isSelectOne, setSelectOneStatus] = useState(true);
  //if select one is the epoch (!selectedEpoch? ''? ), then do not render


  // const handleEpochTypeChange = (e) => (console.clear(), console.log(epochs[e.target.value]));

  async function fetchData() {
    const { data } = await axios.get(
      `https://api.openopus.org/composer/list/epoch/${selectedEpoch}.json`
    );
    console.log("what is this", selectedEpoch);
    console.log("epochs", epochs);
    if (selectedEpoch !== SELECT_ONE) {
      let bab = data.composers;
      console.log("data", bab);
      setWriters(bab);
      console.log("unsolved", writers);
    } 
  }

  useEffect(() => {
    fetchData();
  }, [selectedEpoch]);
  
  function onChange(event) {
    console.log('event in onChange', event)
    //console.log(epochs[event.target.value])
    const value = epochs[event.target.value];
    setSelectedEpoch(value); //name of epoch
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();
    fetchData();
    setSelectedEpoch(selectedEpoch);
  };

  // const handleChange = (e) => (console.log( epochs[e.target.value]));

  //console.log(epochs[e.target.value]) --> the epoch string

  //setEpochs will effect epochs.map (when you changed it to ['burzum', 'mayhem'], that's what it mapped over.) the second item in the useState is a function to update the original state, aka setState.
  // const isMount = useIsMount();
  // useEffect(() => {
  //   if (isMount) {
  //     console.log('first');
  //   } else {
  //     <ComposerResults whatever ={writers} />
  //     console.log('the rest ')
  //   }
  // })
  
  return (
    <div className="Mood">
      <form onSubmit={handleSubmit}>
        <a href="/">What are you in the Mood for?</a>
        <br/>
        <label htmlFor="epoch">Epoch:</label>
        <select onChange={onChange}>
          {epochs.map((epoch, key) => (
            <option key={key} value={key}>{epoch}</option>
          ))}
        </select>
        {selectedEpoch === SELECT_ONE ? (
          console.log('girl i said not to')
        ) : (
          <ComposerResults whatever={writers} />
        )}
        {/* {isMount ? <p>k</p> : <ComposerResults whatever={writers} />} */}

        <input type="submit" value="Choose" />
      </form>
    </div>
  );
}

export default Mood;
