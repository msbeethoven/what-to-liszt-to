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
      
      {console.log(
        "wig",
        props.whatever
      )}

      <ul>
        {props.whatever.map((comp) => (
          <li key={comp.id}>
            <Link to={`${comp.id}`}>{comp.complete_name}</Link>
          </li>
        ))}
      </ul>
   
      {props.whatever.map((comp) => (
        <Switch>
          {console.log('tf', comp.id)}
        <Route path={`/${comp.id}`}>
          <About chicken={comp}/>
        </Route>
      </Switch>
      ))}
      
    </div>
    </Router>
  );
}

function About(props) {
  console.log('now what', props)
  return <h2>{props.chicken.birth}</h2>;
}


export default ComposerResults;
