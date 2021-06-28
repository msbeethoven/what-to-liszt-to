import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ComposerCard from "./ComposerCard";

function ComposerResults(props) {
  return (
    <Router>
    <div>
      <nav>
      {console.log(
        "wig",
        props.whatever
      )}

      <ul>
        {props.whatever.map((comp) => (
          <li key={comp.id}>
            <p>{comp.id}</p>
            <Link to={`${comp.id}`}>{comp.complete_name}</Link>
            <p>{comp.complete_name}</p>
          </li>
        ))}
      </ul>
      </nav>
      <Switch>
        <Route path="/149">
          <Test />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

function Test() {
  return <h2>testing this baby out</h2>
}

export default ComposerResults;
