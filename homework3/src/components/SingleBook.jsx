import { Card } from "react-bootstrap";
import items from "../data/scifi.json";

const SingleBook = (props) => (
  <div className="cards-container">
    {items.map((obj) => console.log(obj))}
    <Card style={{ width: "18rem", height: "35rem" }}>
      <Card.Img variant="top" src={items[props.id].img} />
      <Card.Body>
        <Card.Title>{items[props.id].title}</Card.Title>
      </Card.Body>
    </Card>
  </div>
);

export default SingleBook;
