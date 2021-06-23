import axios from 'axios';
import React, {useEffect, useState} from 'react';

function Composers() {

  const [data, getComposers] = useState({ composers: []});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.openopus.org/composer/list/pop.json');

      getComposers(result.data);
      console.log(data, getComposers)
      console.log(result.data.composers)
    };
    fetchData();
  }, []);
  
  return (
    <div className="Composer">
      <ul>
        {data.composers.map(comp => (
          <li key={comp.id}>
            <p>{comp.complete_name}</p>
          </li>
        ) )}
      </ul>
    </div>
  )
}

export default Composers;