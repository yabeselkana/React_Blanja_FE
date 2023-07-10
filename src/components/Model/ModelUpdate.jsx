import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModelUpdate({ id, name, stock, price, description, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [data, setData] = useState({
    id,
    name,
    stock,
    price,
    description,
  });
  const [photo, setPhoto] = useState(null);

  let hendelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  let hendelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", photo);
    formData.append("description", data.description);
    axios
      .put(`http://localhost:4000/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert("product Update");
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
      <Button variant="warning" onClick={handleShow}>
        {children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{children} Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={hendelSubmit}>
          <Modal.Body>
            <input className="form-control mt-3" type="text" placeholder="name" name="name" value={data.name} onChange={hendelChange} />
            <input className="form-control mt-3" type="text" placeholder="stock" name="stock" value={data.stock} onChange={hendelChange} />
            <input className="form-control mt-3" type="text" placeholder="price" name="price" value={data.price} onChange={hendelChange} />
            <input className="form-control mt-3" type="file" placeholder="photo" name="photo" value={data.photo} onChange={handleUpload} />
            <input className="form-control mt-3" type="text" placeholder="description" name="description" value={data.description} onChange={hendelChange} />
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

export default ModelUpdate;
