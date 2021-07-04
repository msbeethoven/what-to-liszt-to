import axios from "axios";
import React, { useEffect, useState } from "react";
import FavButton from './FavButton';

//List works by composer ID
//GET /work/list/composer/129/genre/all.json

function ComposerWorks(props) {
  console.log("pls id", props.id);

  const [works, setWorks] = useState([]);

  //id: data.composer[x].id
  //works: data.works = obj.title

  useEffect(() => {
    //setWorks(['butt', '1', '3']);
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(
        `https://api.openopus.org/work/list/composer/${props.id}/genre/all.json`
      )
      .then((response) => {
        console.log("now what", response.data.works);
        const allWorks = response.data.works;
        setWorks(allWorks);
      });
  };

  // async function fetchData() {
  //   const {data} = await axios.get(
  //     'https://api.openopus.org/work/list/composer/149/genre/all.json'
  //   );
  //   console.log('mama mia', data.works);
  // }

  // useEffect(() => {
  //   async function fetchData() {
  //     const {data} = await axios.get('https://api.openopus.org/work/list/composer/149/genre/all.json');
  //     //console.log('composer works data', data.works.forEach((work) => {console.log(work.title)}));

  //     let workTitlesArr = [];

  //     let workTitles = data.works.forEach((work) => (workTitlesArr.push(work.title)));

  //     console.log('girl pls', workTitlesArr)

  //     setWorks(workTitlesArr);

  //     //setWorks(data.works);

  //     console.log('excuse me ', works)
  //   };
  //   fetchData();
  // }, []);

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
      <ul>
        {console.log("haw", works)}

        {works.map((piece) => {
          return (
            <div>
              <p>{piece.title}</p>
              <FavButton pieceInfo={piece} />
            </div>
          );
        })}

        {/* {(works.map((work) => {
          return <p>{work}</p>
        }))} */}
      </ul>
    </div>
  );
}

export default ComposerWorks;
