import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import ComposerWorks from "./ComposerWorks";

function ComposerResults(props) {
  return (
    <Router>
      <div class="composers-list">
        {console.log("wig", props.whatever)}

        <ul>
          {props.whatever.map((comp) => (
            <li key={comp.id}>
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
      <h2>Works: <ComposerWorks /> </h2>
    </div>
  );
}

export default ComposerResults;
