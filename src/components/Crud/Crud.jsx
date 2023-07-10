import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import ModalCreate from "../Model/ModelCreate";
import ModalUpdate from "../Model/ModelUpdate";
import ModalDelete from "../Model/ModelDelete";

const Crud = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {" "}
      {/* <h1>Product</h1> */}
      <>
        <ModalCreate />
        <table className=" table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">nama</th>
              <th scope="col">Stok</th>
              <th scope="col">Price</th>
              <th scope="col">Photo</th>
              <th scope="col">Deskripsi</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <th>{product.id}</th>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>{product.photo}</td>
                <td>{product.description}</td>
                <td>
                  <Link to={`/Detail/${product.id}`}>
                    <button className="btn btn-primary" style={{ marginRight: "10px" }}>
                      Detail
                    </button>
                  </Link>
                  <ModalUpdate id={product.id} name={product.name} stock={product.stock} price={product.price} description={product.description}>
                    Update
                  </ModalUpdate>
                  <ModalDelete id={product.id} name={product.name}>
                    Delete
                  </ModalDelete>
                </td>
                <td></td>
              </tr>
            ))}
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
          </tbody>
        </table>
      </>
    </>
  );
};

export default Crud;
