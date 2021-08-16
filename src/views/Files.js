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

  const [selectedFileIndex, setSelectedFileIndex] = useState(0);
  const [selectedClass, setSelectedClass] = useState(0);

  // Note: First file is hidden & selected on tab change
  const allClasses = [
    {
      title: "Economics",
      indexFile: "https://ipfs.io/ipfs/QmYcEr7FQkUyrDDU66UPgAQZUNkvjRNnXsik6YjRhCbNvi?filename=some_other_md_file.md", 
      files: [
        {
          url: "https://ipfs.io/ipfs/Qmc3eRLLNyz9HkRLLqPKcF1KtuzhMNiaoebAsgGxv6BQML?filename=SCION-book.pdf",
          title: "Lecture Book PDF" 
        }
      ]
    },
     {
      title: "Chemistry",
      indexFile: "https://ipfs.io/ipfs/QmTa5sDbkK1DdLeFGPJ9a1vHez4fXNnyzQYEHTgSFxdnRk?filename=some_md_file.md", 
      files: [
        {
          url: "https://ipfs.io/ipfs/QmeV7EHf8C2LniXiUcXdpe6SdkiZRa8ESqWbHiNADfTSfS?filename=delete.xlsx",
          title: "Spreadsheet" 
        },
        {
          url: "https://ipfs.io/ipfs/QmVLUm5jyZWCNzGxuCBUGkjZTSYtCq3sFkQZJHT1dP8vGL?filename=Delete.docx",
          title: "My awesome Word File" 
        },

        {
          url: "https://ipfs.io/ipfs/QmQk9H5RANvbXDukQRWHVRRrNMa1aoigsbVVEKiTBkstV7?filename=delete.blend",
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
