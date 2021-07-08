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
    setToggle(!toggle)
    console.log('you faved!', toggle);
    if (toggle === false) {
      setFavPiece([]);
      console.log('favpiece state', favpiece)
    } else {
      setFavPiece(`${props.pieceInfo.title}`)
    }
    console.log('your fav piece!', favpiece); 
  }

  // useEffect(() => {
  //   if (setToggle('true')){
  //     setFavPiece(
  //       `${props.pieceInfo.title}`
  //     );
  //   }
  // }, []);

  return (
    <div>
      <button onClick={handleClick} clicked={toggle}> {toggle ? '♥️': '🖤' } </button>
    </div>
  )
}

export default FavButton;