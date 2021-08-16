import React, {useState,useEffect} from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import {MdFile} from '../components/MarkdownDisplay/MarkdownDisplay'
import _ from 'lodash'

// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  Badge
} from "react-bootstrap";

function Files() {

  const [selectedKey, setSelectedKey] = useState("econs");

  const files = {
    econs: {
      url: "https://ipfs.io/ipfs/QmSwgRLQ5hu8EmgG1wF3ghU2jDZKsPcmnUX7VgUecru2Fx?filename=test.md",
      title: "Intro to Econs"
    },

    lnotes: {
      url: "http://bafybeicea47cjq4jotade5aq2knav3ocwlxsi2nzi2cmypsrfqbcz4xlum.ipfs.localhost:8080/",
      title: "Lecture Notes"
    }
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header> View/Download your files here: </Card.Header>
              <Card.Body>
                <ListGroup>
                  {
                    _.map(_.toPairs(files), ([key, file]) => <ListGroup.Item
                                                                key={key}
                                                                active={selectedKey==key}
                                                                action
                                                                onClick={() => setSelectedKey(key)}
                                                                >
                                                                  {
                                                                  file.url.endsWith("md") ? <Badge bg="info">MD</Badge> : <></>
                                                                  }
                                                                  {file.title}
                                                              </ListGroup.Item>)
                  }
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                  <MdFile url={files[selectedKey]?.url} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Files;
