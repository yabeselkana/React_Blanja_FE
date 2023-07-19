import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./ModelAdres.model.css";
import ModelAdresNew from "./ModelNew/ModelAdresNew";

function ModelAdres() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-light btn-block rounded-pill " onClick={handleShow}>
        Choose another address
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Choose another address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={`  text-center center ${style.boder1} boder1  `}>
            <ModelAdresNew className="container">Add new address </ModelAdresNew>
          </div>

          <div className={` center ${style.boder} boder  mt-3`}>
            <h5 className="container ">Andreas Jane </h5>
            <p className="container  ">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <p className="container text-danger">Change address</p>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelAdres;
