import React from "react";
// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Courses() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                    <div className="numbers">
                      <Card.Title as="h4">ECONOMICS</Card.Title>
                    </div>
              </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                    <div className="numbers">
                      <Card.Title as="h4">CHEMISTRY</Card.Title>
                    </div>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Courses;
