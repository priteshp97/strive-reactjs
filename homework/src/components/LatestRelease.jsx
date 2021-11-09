import items from "../data/scifi.json";
import { Component } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

// now I want to generate dinamically a list of comments
// the list should come from the last pasta slide I clicked on
// the list of comments wil be shown below the carousel
// for remembering which is the last pasta we clicked on we're gonna use the STATE
// for having a state object in a React Component, we cannot use the functional shape
// we have to convert the Home component from a function to a class
// once you have a class component, you can create a state object!

class LatestRelease extends Component {
  // write the only mandatory method in a class component
  render() {
    return (
      <div className="cards-container">
        {items.map((scifiObject) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={scifiObject.img} />
            <Card.Body>
              <Card.Title>{scifiObject.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default LatestRelease;
