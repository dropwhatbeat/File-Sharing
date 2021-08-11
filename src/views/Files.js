import React from "react";

// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Files() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Download Your Files Here</Card.Title>

              </Card.Header>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <Card.Title as="h4">
                <a href="http://bafybeicea47cjq4jotade5aq2knav3ocwlxsi2nzi2cmypsrfqbcz4xlum.ipfs.localhost:8080/" download target="_blank">
                  Lecture Notes 1
                </a>
                </Card.Title>
                <Card.Title as="h4">
                <a href="http://bafybeicea47cjq4jotade5aq2knav3ocwlxsi2nzi2cmypsrfqbcz4xlum.ipfs.localhost:8080/" download target="_blank">
                  Lecture Notes 2
                </a>
                </Card.Title>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Files;
