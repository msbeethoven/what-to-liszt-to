import axios from 'axios';
import React, {useEffect, useState} from 'react';

//List works by composer ID
//GET /work/list/composer/129/genre/all.json 

function ComposerWorks(props) {

  const [works, setWorks] = useState([]);
  const [id, setID] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get('https://api.openopus.org/work/list/composer/149/genre/all.json');
      //console.log('composer works data', data.works.forEach((work) => {console.log(work.title)}));

      let workTitlesArr = [];

      let workTitles = data.works.forEach((work) => (workTitlesArr.push(work.title)));

      console.log('girl pls', workTitlesArr)

      setWorks(workTitlesArr);

      //setWorks(data.works);

      console.log('excuse me ', works)
    };
    fetchData();
  }, [works]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await axios('https://api.openopus.org/work/list/composer/149/genre/all.json');
  //     console.log(data)
  //     setWorks(data.works);
  //     console.log('try again', works)
  //   };
  //   fetchData();
  // }, [works]);

  return (
    <div className="composer-card">
      <p>knowledge!</p>
      <ul>
        {console.log('haw',works)}

{/* 
        {(works.map((work) => {
          <p>{console.log('colle', work)}</p>
        }))} */}
      
        
      </ul>
    </div>
  )
}

export default ComposerWorks;