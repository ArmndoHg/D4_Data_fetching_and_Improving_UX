import { Card, Col, Container, Row } from "react-bootstrap";
import romance from "../books/romance.json";

const LatestRelease = () => (
  <Container>
    <Row>
      <Col sm={12}>
        <h3>Latest Release</h3>
      </Col>
      {romance.slice(0, 20).map((book) => (
        <Col key={book.asin} className="mb-4" md={3}>
          <Card>
            <Card.Img variant="top" src={book.img} />
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default LatestRelease;
