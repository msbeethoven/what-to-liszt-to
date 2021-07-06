import React, {useState, useEffect} from 'react';
import FavoritesPage from './FavoritesPage';

function FavButton(props) {
  const [toggle, setToggle] = useState('false');
  const [favpiece, setFavPiece] = useState(
    {
      pieceInfo: " "
    }
  )

  function handleClick(e) {
    e.preventDefault();
    console.log('you faved!', toggle);
    console.log('your fav piece!', favpiece);
    setFavPiece(
      {
        pieceInfo: `${props.pieceInfo.title}`
      }
    );
   
  }

  useEffect(() => {
    setToggle('true');
    // setFavPiece(
    //   {
    //     pieceInfo: `${props.pieceInfo.title}`
    //   }
    // );
    
  }, []);

  return (
    <div>
      <button onClick={handleClick} clicked={toggle} >fav</button>
      {/* <FavoritesPage favorite={favpiece} /> */}
    </div>
  )
}

export default FavButton;