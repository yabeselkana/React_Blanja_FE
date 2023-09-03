import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./ModelPayment.model.css";
import axios from "axios";
import { useEffect } from "react";
import { FormatRupiah } from "@arismun/format-rupiah";

function ModelPayment({ id, children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/payment/user/${id}`)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const delevery = 50000;

  const totalPrice = () => {
    let totalOrderCart = 0;
    data.map((item) => (totalOrderCart += item.total_price));
    return totalOrderCart;
  };

  console.log(totalPrice());

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
            <Form.Group className="container row">
              <h5 className=" font-bold col-9">Order</h5>
              <h5 className=" font-bold  co-2">
                {" "}
                <FormatRupiah value={totalPrice()} />
              </h5>
            </Form.Group>
            <Form.Group className="container row mb-5">
              <h5 className="font-bold  col-9">Delivery</h5>
              <h5 className="font-bold  col-2">
                {" "}
                <FormatRupiah value={delevery} />
              </h5>
            </Form.Group>
          </Form.Group>
        </Modal.Body>
        <hr />
        <Modal.Body className="row">
          <Form.Group className="col-7">
            <h4 className="font-bold">Shopping summary</h4>
            <h5 className="font-bold">
              {" "}
              <FormatRupiah value={totalPrice() + delevery} />
            </h5>
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
