import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import FavButton  from "./FavButton";

function FavoritesPage(props) {
  console.log('whats going on', props)
  
  // these console logs were populated when the <FavoritesPage /> comp was in the render of FavButton. It was just the list tho. 

  const [favorites, setFavorites] = useState({});
  useEffect(() => {
    setFavorites(props)
  },[favorites])


  return (
    <div className="favorites-page">
      {console.log('did this work', props)}

      test
      {props.favorite}

      {/* {props.favorite === undefined ? 'asdsfd' : props.favorite } */}
      
      
      
      
    </div>
  )
  
}

export default FavoritesPage;
