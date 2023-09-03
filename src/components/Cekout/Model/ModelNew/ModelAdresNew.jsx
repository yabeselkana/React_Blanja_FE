import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
// import InputGroup from "react-bootstrap/InputGroup";
// import style from "./ModelAdresNew.model.css";

function ModelAdresNew({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = localStorage.getItem("id_user");

  let [data, setData] = useState({
    emailaddress: "",
    recipientname: "",
    phone: "",
    address: "",
    postalcode: "",
    City: "",
    id_users: id,
  });

  let hendelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleCreateAddress = async () => {
    try {
      // const authData = JSON.parse(localStorage.getItem("auth"));
      // if (authData === null || authData.token === null) {
      //   Swal.fire({
      //     title: "Buy Failed",
      //     text: "Please log in to proceed with the order.",
      //     icon: "error",
      //   });
      //   return;
      // }

      axios.post(`${process.env.REACT_APP_API_BACKEND}/address`, data).then((response) => {
        alert("berhasil");
        window.location.reload();
      });
    } catch (error) {
      console.log(error.response);
    }
  };

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
          <Form onSubmit={handleCreateAddress}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" autoFocus name="emailaddress" value={data.emailaddress} onChange={hendelChange} />
            </Form.Group>
            <Form.Group className="row">
              <Form.Group className="mb-3 col-12 col-sm-6 " controlId="exampleForm.ControlInput1">
                <Form.Label>Recipient’s name</Form.Label>
                <Form.Control type="input" placeholder="Name" autoFocus name="recipientname" value={data.recipientname} onChange={hendelChange} />
              </Form.Group>
              <Form.Group className="mb-3  col-12 col-sm-6 " controlId="exampleForm.ControlInput1">
                <Form.Label>Recipient's telephone number</Form.Label>
                <Form.Control type="input" placeholder="Phone" autoFocus name="phone" value={data.phone} onChange={hendelChange} />
              </Form.Group>
            </Form.Group>
            <Form.Group className="row">
              <Form.Group className="mb-3 col-12  col-sm-6" controlId="exampleForm.ControlInput1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="input" placeholder="Address" autoFocus name="address" value={data.address} onChange={hendelChange} />
              </Form.Group>
              <Form.Group className="mb-3 col-12 col-sm-6" controlId="exampleForm.ControlInput1">
                <Form.Label>Postal code</Form.Label>
                <Form.Control type="input" placeholder="Pos Kode" autoFocus name="postalcode" value={data.postalcode} onChange={hendelChange} />
              </Form.Group>
            </Form.Group>
            <Form.Group className="row">
              <Form.Group className="mb-3 col-12 col-sm-6 " controlId="exampleForm.ControlInput1">
                <Form.Label>City or Subdistrict</Form.Label>
                <Form.Control type="input" placeholder="City" autoFocus name="City" value={data.City} onChange={hendelChange} />
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Check // prettier-ignore
                type="checkbox"
                id="checkbox"
                label="Make it the primary address"
              />
            </Form.Group>
            <Modal.Footer>
              <Button className="rounded-pill " variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button className=" rounded-pill " variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelAdresNew;
