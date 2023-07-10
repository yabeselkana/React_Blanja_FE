import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModelDelete({ id, name, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let hendelDelete = (e) => {
    axios
      .delete(`http://localhost:4000/products/${id}`)
      .then((res) => {
        console.log(res);
        alert("Delete Successs");
        setShow(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        setShow(false);
      });
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        {children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{children} Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={hendelDelete}>
          <Modal.Body>
            <h5 className="text-center">Are sure want to delete this product {name}?</h5>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              {children}
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModelDelete;
