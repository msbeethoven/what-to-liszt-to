import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import FavoritesPage from "./FavoritesPage";
import Mood from './Mood';

function Header() {
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
            <FavoritesPage />
          </Route>
          <Route path="/">
            <Mood />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  )
}

export default Header;