import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./ModelAdres.model.css";
import ModelAdresNew from "./ModelNew/ModelAdresNew";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ModelAdres() {
  const [show, setShow] = useState(false);

  const roter = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id_users = localStorage.getItem("id_user");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/address/user/${id_users}`)
      .then((res) => {
        setData(res.data.data);
        // localStorage.setItem("id_product", res.data.data[0].id);s
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hendelChangeAddress = (id, id_address) => {
    roter(`/Cekout/${id}`, {
      state: {
        id: id,
        id_address: id_address,
      },
    });
    handleClose();
    window.location.reload();
  };

  const hendeldelete = (id) => {
    console.log(id);
    axios
      .delete(`${process.env.REACT_APP_API_BACKEND}/address/${id}`)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Product Alamat",
          text: `Delete Product Success`,
          icon: "success",
        });
        setShow(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "error",
          icon: "error",
        });
        setShow(false);
      });
  };

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
          <div className={`${style.boder1} boder1  `}>
            <ModelAdresNew className="container">Add new address </ModelAdresNew>
          </div>
          {data?.map((item) => (
            <div className={`  ${style.boder} boder  mt-3`}>
              <h5 className="container ">{item.recipientname} </h5>
              <p className="container  ">
                {item.address}, {item.City}, {item.postalcode}, {item.phone}
              </p>
              <h6 className=" text-warning" onClick={() => hendelChangeAddress(item.id_users, item.id)}>
                Change address
              </h6>
              <p className="text-danger" onClick={() => hendeldelete(item.id)}>
                Hapus
              </p>
            </div>
          ))}
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelAdres;
