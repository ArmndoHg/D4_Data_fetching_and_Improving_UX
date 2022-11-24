import { Row, Col, Navbar, Container } from "react-bootstrap"

const MyFooter = () => (
  <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
    <Container className="d-flex justify-content-center">
      <Row>
        <Col lg={12}>
          <div className="text-center text-white">@Strive Books</div>
        </Col>
      </Row>
    </Container>
  </Navbar>
)

export default MyFooter