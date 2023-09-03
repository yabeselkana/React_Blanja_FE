import { FormatRupiah } from "@arismun/format-rupiah";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../../config/redux/actions/productAction";
import Pagination from "../Pagination";
import style from "./New.module.css";
const Products = () => {
  let dispatch = useDispatch();
  let [product, setProduct] = useState([]);
  useEffect(() => {
    dispatch(getProduct(setProduct));
  }, []);
  const [currentPage, setCurrentPage] = useState(4);
  const [postsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = product.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <section className="container mt-3">
        <h2 className="ml-3">New</h2>
        <p className="ml-3">You've never seen before!</p>
        <div className="container mt-5">
          <div className="row">
            {currentPosts.map((item, index) => (
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
          <Pagination className={`${style.pagination}`} totalPosts={product.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
      </section>
    </>
  );
};

export default Products;
