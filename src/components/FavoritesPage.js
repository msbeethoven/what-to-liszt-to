import React, { useEffect, useState } from "react";

import FavButton from './FavButton';

function FavoritesPage(props) {
  
  
  // these console logs were populated when the <FavoritesPage /> comp was in the render of FavButton. It was just the list tho. 

  const [favorites, setFavorites] = useState({});
  useEffect(() => {
    setFavorites(props)
  },[favorites])


  

  return (
    <div className="favorites-page">
      {console.log('did this work', props.favorite)}

      {props.favorite === undefined ? 'asdsfd' : Object.values(props.favorite) }
      
      
    </div>
  )
  
}

export default FavoritesPage;
