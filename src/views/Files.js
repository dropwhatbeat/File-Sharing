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
  Badge,
  Button
} from "react-bootstrap";

const urlIsTextfile = url => _.some([".md", ".txt"], ending => (url ?? "").endsWith(ending));

const FilesListGroup = ({files, selectedFileIndex, setSelectedFileIndex}) => <ListGroup>
                  {
                    _.map(files, (file, fileIdx) => <ListGroup.Item
                                                                key={fileIdx}
                                                                active={selectedFileIndex==fileIdx}
                                                                action
                                                                onClick={() => setSelectedFileIndex(fileIdx)}
                                                                >
                                                                  {urlIsTextfile(file.url) ? <></> : <Badge>{"." + file?.url?.split(".")?.pop()?.toUpperCase()}</Badge>}
                                                                  {file.title}
                                                              </ListGroup.Item>)
                  }
                </ListGroup>

function Files() {

  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const [selectedClass, setSelectedClass] = useState(0);

  // Note: First file is hidden & selected on tab change
  const allClasses = [
    {
      title: "Economics",
      indexFile: "https://ipfs.io/ipfs/bafybeihse66exbkmnv7cg6wyml3yznb63ckmanohvyeth4ta47yjn4aehe?filename=some_other_md_file.md", 
      files: [
        {
          url: "https://ipfs.io/ipfs/bafybeiglvbvi5azsnbcruo3y7d6yi6otnsi4li3uo4u5wqxv7agjnghic4?filename=SCION-book.pdf",
          title: "Lecture Book" 
        }
      ]
    },
     {
      title: "Chemistry",
      indexFile: "https://ipfs.io/ipfs/bafybeico4mqrvwsxmh5cuikktizbwf2inzqd643rdnxbdbpsuaezlqt66y?filename=some_md_file.md", 
      files: [
        {
          url: "https://ipfs.io/ipfs/bafybeihp4wp3zbz5eahkiqrljdbbflfdw5bsteth4gnfrujm5ywmuks25e?filename=delete.xlsx",
          title: "Spreadsheet" 
        },
        {
          url: "https://ipfs.io/ipfs/bafybeidh62htsalm36x7ogcnuynzzdefhpk4uoq2r3bbw6grkzwioqd74u?filename=Delete.docx",
          title: "My awesome Word File" 
        },

        {
          url: "https://ipfs.io/ipfs/bafybeibdxqepam6f3ctlgw2v6hwgshynoblbd7gp4cbtjv5illvxhb2pji?filename=delete.blend",
          title: "Blender Template" 
        }
      ]
    }
  ]

  const fileUrl = selectedFileIndex !== null ? 
      allClasses[selectedClass]?.files[selectedFileIndex]?.url : allClasses[selectedClass]?.indexFile;
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Tabs activeKey={selectedClass} onSelect={k => [setSelectedClass(k), setSelectedFileIndex(null)]}>
                  {
                    _.map(allClasses, (class_, i) => 
                      <Tab eventKey={i} key={class_.title} title={class_.title}>
                        <Card>
                          <FilesListGroup files={class_.files} {...{setSelectedFileIndex, selectedFileIndex}} />
                          </Card>
                      </Tab>
                      )
                  }
                </Tabs>
            <Card>
              <Card.Body>
                {
                  fileUrl ? (
                    urlIsTextfile(fileUrl) ?
                      <MdFile url={fileUrl} /> :
                      <Button variant="primary" onClick={() =>window.open(fileUrl, "_blank")}>Download</Button>)
                      : <></>
                }
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Files;
