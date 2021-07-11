import React, { useEffect, useState } from "react";
//useEffect check localstorage (header defined favArr)
// filter last index , filter thru favarr , only the one that didnt have that id that was clicked again , reset array without the one taken out 


function FavoritesPage({favArr}) {
  return (
    <div className="favorites-page">
      {console.log('did this work', favArr)}

      {favArr && favArr.map(favPiece => {
        return (
          <p>{favPiece.title}</p>
        )
    
      })}

      {/* {props.favorite === undefined ? 'asdsfd' : props.favorite } */}
      
      
      
      
    </div>
  )
  
}

export default FavoritesPage;
