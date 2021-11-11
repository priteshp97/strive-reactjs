import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        className="card"
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{
          border: this.state.selected ? "4px solid green" : "transparent",
        }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
        {this.state.selected && <CommentArea comments={this.props.book} />}
        {this.state.selected && console.log(this.props.book.asin)}
      </Card>
    );
  }
}

export default SingleBook;
