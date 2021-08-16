import React, {useState} from "react";
// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import CourseDetails from '../components/CourseDetails/CourseDetails'

function Dashboard() {

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
                        {CourseDetails("ECONOMICS")}
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
                {CourseDetails("CHEMISTRY")}
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>

  );
}

export default Dashboard;
