import items from "../data/scifi.json";
import { Component } from "react";
import { Card } from "react-bootstrap";

class LatestRelease extends Component {
  render() {
    return (
      <div className="cards-container">
        {items.map((scifiObject) => (
          <Card
            style={{ width: "18rem", height: "35rem" }}
            key={scifiObject.asin}
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
