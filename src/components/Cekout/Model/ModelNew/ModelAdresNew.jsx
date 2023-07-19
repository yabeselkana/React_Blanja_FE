import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import style from "./ModelAdresNew.model.css";

function ModelAdresNew({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-light btn-block rounded-pill " onClick={handleShow}>
        {children}
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Add new address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="" autoFocus />
            </Form.Group>
            <Form.Group className="row">
              <Form.Group className="mb-3 col-12 col-sm-6 " controlId="exampleForm.ControlInput1">
                <Form.Label>Recipient’s name</Form.Label>
                <Form.Control type="email" placeholder="" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3  col-12 col-sm-6 " controlId="exampleForm.ControlInput1">
                <Form.Label>Recipient's telephone number</Form.Label>
                <Form.Control type="email" placeholder="" autoFocus />
              </Form.Group>
            </Form.Group>
            <Form.Group className="row">
              <Form.Group className="mb-3 col-12  col-sm-6" controlId="exampleForm.ControlInput1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="email" placeholder="" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3 col-12 col-sm-6" controlId="exampleForm.ControlInput1">
                <Form.Label>Postal code</Form.Label>
                <Form.Control type="email" placeholder="" autoFocus />
              </Form.Group>
            </Form.Group>
            <Form.Group className="row">
              <Form.Group className="mb-3 col-12 col-sm-6 " controlId="exampleForm.ControlInput1">
                <Form.Label>City or Subdistrict</Form.Label>
                <Form.Control type="email" placeholder="" autoFocus />
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Check // prettier-ignore
                type="checkbox"
                id="checkbox"
                label="Make it the primary address"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="rounded-pill " variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className=" rounded-pill " variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelAdresNew;
