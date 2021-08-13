import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CourseDetails = (subject) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" size = 'sm' onClick={handleShow}>
        Course Description
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{subject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome! This is the description of the course {subject}, to download the materials needed, please go to Files.</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CourseDetails;

