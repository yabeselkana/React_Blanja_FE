import { FormatRupiah } from "@arismun/format-rupiah";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../../config/redux/actions/productAction";

const NewProduct = () => {
  let dispatch = useDispatch();
  let [product, setProduct] = useState([]);
  useEffect(() => {
    dispatch(getProduct(setProduct));
  }, []);

  return (
    <>
      <section className="container mt-5">
        <h2 className="ml-3">Populer</h2>
        <p className="ml-3">Find Clothes that are you tranding recently!</p>
        <div className="container mt-5">
          <div className="row">
            <div className="row">
              {product.map((item, index) => (
                <div className="col-md-3 col-sm-6 mb-5">
                  <Link to={`/Detail/${item.id}`} key={index.toString()} style={{ color: "black" }}>
                    <div className="border rounded product">
                      <img className="w-100" src={item.photo} crossOrigin="Anonymous" alt="cloth" />
                      <div className="p-2">
                        <h5 className="card-title">{item.name}</h5>
                        <h5 className="text-danger ">
                          <FormatRupiah value={item.price} />
                        </h5>
                        <img src={require("../../assets/Rating 5 stars.png")} alt="stars" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProduct;
