import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ComposerWorks from "./ComposerWorks";

function ComposerResults(props) {
  return (
    <Router>
      <div className="composers-list">
        {console.log("wig", props.whatever)}

        <ul>
          {props.whatever.map((comp, key) => (
            <li key={key} value={key}>
              {console.log(key)}
              <Link to={`${comp.id}`}>{comp.complete_name}</Link>
            </li>
          ))}
        </ul>

        {props.whatever.map((comp) => (
          <Switch>
            {console.log("tf", comp.id)}
            <Route path={`/${comp.id}`}>
              <About key={comp.id} chicken={comp} />
            </Route>
          </Switch>
        ))}
      </div>
    </Router>
  );
}

function About(props) {
  console.log("now what", props);
  return (
    <div className="composer-card">
      <img src={props.chicken.portrait} alt="look at that handsome devil"/>
      <h2>birth date: {props.chicken.birth} </h2>
      <h2>death date: {props.chicken.death == null ? 'still alive!' : props.chicken.death} </h2>
      <h2>Works: <ComposerWorks id={props.chicken.id} /> </h2>
    </div>
  );
}

export default ComposerResults;
