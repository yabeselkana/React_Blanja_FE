import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./ModelPayment.model.css";

function ModelPayment({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="btn btn-primary  rounded-pill btn-block mb-2">
        {children}
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Payment method</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Group className="row">
                <Form.Group className="col-4">
                  <img className={` ${style.imageGopay} imageGopay`} src={require("../../../../assets/ImagePayment/Logo-GoPay-Vector-CDR-dan-PNG 1.png")} alt="" />
                </Form.Group>

                <Form.Label className="col-7">Gopay</Form.Label>
                <Form.Check className="col-1" type="checkbox" id="checkbox" />
              </Form.Group>
              <Form.Group className="row mt-4">
                <Form.Group className="col-4">
                  <img className={`${style.imagePos} imagePos`} src={require("../../../../assets/ImagePayment/kisspng-pos-indonesia-mail-point-of-sale-logo-indonesia-5aeb329c2f74d7 1.png")} alt="" />
                </Form.Group>
                <Form.Label className="col-7">Pos</Form.Label>
                <Form.Check className="col-1" type="checkbox" id="checkbox" />
              </Form.Group>
              <Form.Group className="row mt-4">
                <Form.Group className="col-4">
                  <img className={` ${style.imageMaster} imageMaster`} src={require("../../../../assets/ImagePayment/mastercard.png")} alt="" />
                </Form.Group>
                <Form.Label className="col-7">Master</Form.Label>
                <Form.Check className="col-1" type="checkbox" id="checkbox" />
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
        <hr />
        <Modal.Body>
          <h5>Shopping summary</h5>
          <Form.Group>
            <Form.Group className="row">
              <p className="col-10">Order</p>
              <p className="col-2">$ 40.0</p>
            </Form.Group>
            <Form.Group className="row mb-5">
              <p className="col-10">Delivery</p>
              <p className="col-2">$ 5.0</p>
            </Form.Group>
          </Form.Group>
        </Modal.Body>
        <hr />
        <Modal.Body className="row">
          <Form.Group className="col-7">
            <h6>Shopping summary</h6>
            <p>$ 45.0</p>
          </Form.Group>
          <Form.Group className="col-2 mt-4">
            <Button className="rounded-pill " variant="primary">
              Buy
            </Button>
          </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelPayment;
