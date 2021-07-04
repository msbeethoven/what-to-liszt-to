import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComposerWorks from "./ComposerWorks";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

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
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              About {props.chicken.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Title>{props.chicken.complete_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                birthdate: {props.chicken.birth}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                deathdate:{" "}
                {props.chicken.death == null
                  ? "still alive!"
                  : props.chicken.death}
              </Card.Subtitle>
              <Card.Img variant="top" src={props.chicken.portrait} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* Works part */}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Works
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body scrollable="true">
              <ComposerWorks id={props.chicken.id} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default ComposerResults;
