import { Col, Container, Form, Row } from "react-bootstrap";

const SearchBar = () => (
  <Container>
    <Row>
      <Col>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search movies"
            value={this.state.searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
        </Form.Group>
      </Col>
    </Row>
  </Container>
);

export default SearchBar;
