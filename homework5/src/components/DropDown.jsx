import { Component } from "react";
import MovieDetails from "./MovieDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class DropDown extends Component {
  state = {
    movieTitle: "Harry Potter",
    showMovieSection: true,
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Choose a movie!</h2>
            <Button
              onClick={() =>
                this.setState({
                  showMovieSection: !this.state.showMovieSection,
                })
              }
            >
              Show Movie
            </Button>
            <Form>
              <Form.Group>
                <Form.Control
                  as="select"
                  value={this.state.movieTitle}
                  onChange={(e) =>
                    this.setState({
                      movieTitle: e.target.value,
                    })
                  }
                >
                  <option>Harry Potter</option>
                  <option>The Avengers</option>
                  <option>James Bond</option>
                  <option>Heist</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {this.state.showMovieSection && (
          <Row className="justify-content-center">
            <Col>
              <MovieDetails movieTitle={this.state.movieTitle} />
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default DropDown;
