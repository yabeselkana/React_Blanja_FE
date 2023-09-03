import { FormatRupiah } from "@arismun/format-rupiah";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Detail.css";
import Quantity from "./Atribut/Qantity";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const DetailProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let { id } = useParams();
  let [product, setProduct] = useState("");
  let [idproduct, setIdProduct] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/${id}`)
      .then((res) => {
        setProduct(res.data.data[0]);
        // localStorage.setItem("id_product", res.data.data[0].id);s
        setIdProduct(res.data.data[0].id);
        console.log(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const [jumlah, setJumlah] = useState(0);
  //decrease counter
  const increaseJum = () => {
    setJumlah((jumlah) => jumlah + 1);
  };
  const decreaseJum = () => {
    if (jumlah > 0) {
      setJumlah((jumlah) => jumlah - 1);
    }
  };

  let [harga, setHarga] = useState();
  const total = () => {
    let price = jumlah * product.price;
    console.log(price);
  };

  useEffect(() => {
    total();
  }, [id]);

  console.log(harga);
  console.log(jumlah * product.price);
  console.log(product.price);

  const handleCreateOrder = async () => {
    try {
      if (jumlah === 0) {
        Swal.fire({
          title: "Buy Failed",
          text: "Please Intri Qty.",
          icon: "error",
        });
        return;
      }
      const id = localStorage.getItem("id_user");
      axios
        .post(`http://localhost:4000/orders`, {
          address: null,
          qty: jumlah,
          shipping: null,
          total_price: jumlah * product.price,
          id_product: product.id,
          id_user: id,
        })
        .then((response) => {
          Swal.fire({
            title: "MyBag Successful",
            text: "Your checkout was successful.",
            icon: "success",
          });
          navigate(`/MyBag/${id}`);
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleCekout = async () => {
    try {
      if (jumlah === 0) {
        Swal.fire({
          title: "Buy Failed",
          text: "Please Intri Qty.",
          icon: "error",
        });
        return;
      }
      const id = localStorage.getItem("id_user");
      axios
        .post(`http://localhost:4000/payment`, {
          qty: jumlah,
          total_price: jumlah * product.price,
          id_product: product.id,
          id_user: id,
        })
        .then((response) => {
          Swal.fire({
            title: "Checkout Successful",
            text: "Your checkout was successful.",
            icon: "success",
          });

          navigate(`/Cekout/${id}`);
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <section className=" mt-5">
        <div className="container">
          <img className="mb-3" src="/assets/image/Home _ category _ T-Shirt.png" alt="" />
          <div className="row">
            <div className="col-md-4  ">
              <img className="mr-5 mt-3 " src={product.photo} crossOrigin="Anonymous" alt="" />
              <div className="row p-2 ">
                <div className=" col-3   pt-3">
                  <img src={product.photo} crossOrigin="Anonymous" alt="" />
                </div>
                <div className="col-3    pt-3">
                  <img src={product.photo} crossOrigin="Anonymous" alt="" />
                </div>
                <div className=" col-3   pt-3">
                  <img src={product.photo} crossOrigin="Anonymous" alt="" />
                </div>
                <div className=" col-3   pt-3">
                  <img src={product.photo} crossOrigin="Anonymous" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-3 ">
              <h3 className="font-weight-bold">{product.name}</h3>
              <p>Zalora Cloth</p>
              <img className="retingimg" src={require("../../assets/Rating 5 stars.png")} alt="" />
              <p className="mt-3">Price</p>
              <h5 className="price mb-3 ">
                <FormatRupiah value={product.price} />
              </h5>
              <h6 className="">Color</h6>
              <div className="image_cl row col-12 col-md-12  ">
                <div className="bg-dark rounded-circle p-3 mr-1" />
                <div className="bg-danger rounded-circle p-3 mr-1" />
                <div className="bg-primary rounded-circle p-3 mr-1" />
                <div className="bg-success rounded-circle p-3 mr-1" />
              </div>
              <div className="row ">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <div class="row row text-center text-lg-start ps-sm-0 ps-0">
                    <div class="col-1 mt-4 ">
                      <p className=" ml-4">Jumlah</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 d-flex">
                      <button style={{ width: "35px", height: "35px", backgroundColor: "rgb(189, 189, 189)", borderRadius: "100%", border: "none" }} onClick={decreaseJum}>
                        -
                      </button>
                      <p style={{ padding: "4px 10px 0 10px" }}>{jumlah}</p>
                      <button style={{ width: "35px", height: "35px", backgroundColor: "rgb(240, 240, 240)", borderRadius: "100%", border: "none" }} onClick={increaseJum}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-3 col-sm-3   mt-5 ">
                  <button className="btn btn-outline-dark btn-lg btn-block text-center"> Chat </button>
                </div>

                <div className="col-3 col-sm-3  mt-5 ">
                  <button
                    className="btn btn-outline-dark btn-lg btn-block text-center "
                    onClick={() => {
                      handleCreateOrder();
                    }}
                  >
                    {" "}
                    Add{" "}
                  </button>
                </div>
                <div className="col-6 col-sm-6  mt-5  ">
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    onClick={() => {
                      handleCekout();
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <>
        {/* Hello world */}
        <section>
          <div className="container">
            <h2>Informasi Produk</h2>
            <div className="teks mt-5 mb-5">
              <h4>Condition</h4>
              <h4 className="text-danger">New</h4>
            </div>
            <div className="deskripsi text-justify">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="container  ">
            <h3 className="">Product review</h3>
            <div className="row reating_star  ">
              <div className=" col-md-3 col-5  ">
                <div className=" container  row  ">
                  <h1 className="reating font-weight-bold ">5.0</h1>
                  <h3 className="reating1 text-secondary">/5</h3>
                </div>
                <div className="imgreating">
                  <img className="imgreating1 " src={require("../../assets/Rating 5 stars.png")} alt="" />
                </div>
              </div>
              <div className=" row col-md-6 col-5   rows">
                <div className="star col-1   ">
                  <img src={require("../../assets/star.png")} alt="" />
                  <img src={require("../../assets/star.png")} alt="" />
                  <img src={require("../../assets/star.png")} alt="" />
                  <img src={require("../../assets/star.png")} alt="" />
                  <img src={require("../../assets/star.png")} alt="" />
                </div>
                <div className="reting col-1  ">
                  <span>5</span>
                  <span>4</span>
                  <span>3</span>
                  <span>2</span>
                  <span>1</span>
                </div>
                <div className=" col-3 grafik"></div>
                <div className="reting col-2 mt-1">
                  <span>4</span>
                  <span>0</span>
                  <span>0</span>
                  <span>0</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default DetailProduct;
