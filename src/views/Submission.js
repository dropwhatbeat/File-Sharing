import React, {useState} from "react";
const { create: ipfsClient } = require('ipfs-http-client')
const stringToUse = 'hello world from webpacked IPFS'

// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

function Submission() {
  const [file, setUploadFile] = useState();
  const [fileContent, setFileContent] = useState({content:"",
                                                  cid:"",
                                                  path:"no thing yet"});

  
  async function connect (fileData) {
    const ipfs = ipfsClient("/ip4/127.0.0.1/tcp/5001")

    const file = await ipfs.add(fileData)
    console.log(file)
    const hash = file.cid
    const path = file.path

    const source = ipfs.cat(hash)
    let contents = ''
    const decoder = new TextDecoder('utf-8')

    for await (const chunk of source) {
      contents += decoder.decode(chunk, {
        stream: true
      })
    }

    contents += decoder.decode()
    setFileContent({
      content:contents,
      cid: hash,
      path: path
    })
  }
  

  function onChangeHandler(event){
    const fileObj = event.target.files[0] 
    setUploadFile({
      selectedFile: fileObj
    });
    console.log(fileObj)
  }

  async function submitHandler(event){
    const fileData = new FormData();
    fileData.append(
      "myFile",
      file.selectedFile,
      file.selectedFile.name
    );
    connect(fileData);
    console.log(fileContent.content);
    event.preventDefault();
    console.log("reached here")
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Submission</Card.Title>
              </Card.Header>

              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Input file</Form.Label>
                    <Form.Control type="file" onChange={onChangeHandler}/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Upload
                  </Button>
                </Form>
                <h4>file hash</h4>
                <p>{fileContent.path}</p>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Submission;
