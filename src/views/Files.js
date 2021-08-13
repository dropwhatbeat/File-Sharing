import React, {useState} from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

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
              <Tabs defaultActiveKey="econs" id="uncontrolled-tab-example" className="mb-3">

  <Tab eventKey="econs" title="Economics" onSelect>
  <Card.Title as="h4">Download Your Files Here</Card.Title>
  <Card.Footer>
                <hr></hr>
                <div className="stats">
                <Card.Title as="h4">
                <a href="http://bafybeicea47cjq4jotade5aq2knav3ocwlxsi2nzi2cmypsrfqbcz4xlum.ipfs.localhost:8080/" download target="_blank">
                  Intro to Econs.pdf
                </a>
                </Card.Title>
                <Card.Title as="h4">
                <a href="http://bafybeicea47cjq4jotade5aq2knav3ocwlxsi2nzi2cmypsrfqbcz4xlum.ipfs.localhost:8080/" download target="_blank">
                  Lecture Notes 2
                </a>
                </Card.Title>
                </div>
              </Card.Footer>
  </Tab>
  <Tab eventKey="chem" title="Chemistry">
  <Card.Title as="h4">Download Your Files Here</Card.Title>
  <Card.Footer>
                <hr></hr>
                <div className="stats">
                <Card.Title as="h4">
                <a href="http://bafybeicea47cjq4jotade5aq2knav3ocwlxsi2nzi2cmypsrfqbcz4xlum.ipfs.localhost:8080/" download target="_blank">
                  lecture1a.ppt
                </a>
                </Card.Title>
                </div>
              </Card.Footer>
  </Tab>
</Tabs>


              </Card.Header>

            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Files;
