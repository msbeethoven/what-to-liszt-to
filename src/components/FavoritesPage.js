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
      <p>hey</p>

      {/* {favorites.length === 0 ? <p> Nothing here yet! Click on the heart next to a title you like! </p>: <p>k</p> } */}
      {props.favorite}
      
      
    </div>
  )

  

  
}

export default FavoritesPage;
