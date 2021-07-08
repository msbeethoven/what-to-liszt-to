import React, {useState, useEffect} from 'react';
import FavoritesPage from './FavoritesPage';

function FavButton(props) {
  // console.log('favbutton props', props) //object for every song
  const [toggle, setToggle] = useState('false');
  const [favpiece, setFavPiece] = useState(
    []
  )

  function handleClick(e) {
    e.preventDefault();
    console.log('you faved!', toggle);
    console.log('your fav piece!', favpiece); 
  }

  useEffect(() => {
    setToggle('true');
    setFavPiece(
      `${props.pieceInfo.title}`
    );
  }, []);

  return (
    <div>
      <button onClick={handleClick} clicked={toggle} >fav</button>
    </div>
  )
}

export default FavButton;