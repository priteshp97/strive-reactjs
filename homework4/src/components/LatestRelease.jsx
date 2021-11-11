import items from "../data/scifi.json";
import { Component } from "react";
import { Card } from "react-bootstrap";
import App from "../App";

class LatestRelease extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <div className="cards-container">
        {items.map((scifiObject) => (
          <Card
            style={{ width: "18rem", height: "35rem" }}
            key={scifiObject.asin}
            onClick={() => this.setState({ selected: true })}
          >
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
