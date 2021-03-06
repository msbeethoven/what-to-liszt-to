import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from 'react'

import FavoritesPage from "./FavoritesPage";
import Mood from './Mood';

function Header() {
  const [favArr, setFavArr] = useState([]);
  const [currFavorite, setCurrFavorite] = useState({});

  function handleFavoriteAdd(newFav) {
    const updatedFavArr = [...favArr, newFav];
    setFavArr(updatedFavArr);
    console.log('favArr', favArr )
  }

  return (
    <div className="header">

<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
              {/* <Link to={{pathname:'/favorites', state:{}}}>Favorites</Link> */}
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/favorites">
            <FavoritesPage favArr = {favArr} />
          </Route>
          <Route path="/">
            <Mood handleFavoriteAdd = {handleFavoriteAdd} />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  )
}

export default Header;