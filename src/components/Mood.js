import axios from "axios";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import ComposerResults from "./ComposerResults";
import { useIsMount } from "./useIsMount"

function Mood() {
  const [epochs, setEpochs] = useState([
    "Select one...",
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
  const [selectedEpoch, setSelectedEpoch] = useState("Select one...");
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
    if (selectedEpoch !== "Select one...") {
      let bab = data.composers;
      console.log("data", bab);
      let testArr = [];
      //bab.forEach((comp) => testArr.push(comp.complete_name ));
      //console.log("testarr", ...testArr);
      //return data.composers
      setWriters(bab);
      console.log("unsolved", writers);
    }

    
  }

  // const useIsMount = () => {
  //   const isMountRef = useRef(true);
  //   useEffect(() => {
  //     fetchData();
  //   }, [selectedEpoch]);
  //   return isMountRef.current;
  // };
// no render at all but a start 

  useEffect(() => {
    fetchData();
  }, [selectedEpoch]);



  
  function onChange(event) {
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
        <p>What are you in the Mood for?</p>
        <label htmlFor="epoch">Epoch:</label>
        <select onChange={onChange}>
          {epochs.map((epoch, key) => (
            <option key={key} value={key}>{epoch}</option>
          ))}
        </select>
        {selectedEpoch === "Select one..." ? (
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
