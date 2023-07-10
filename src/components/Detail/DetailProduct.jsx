import { FormatRupiah } from "@arismun/format-rupiah";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  let { id } = useParams();
  let [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/${id}`)
      .then((res) => {
        setProduct(res.data.data[0]);
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
              <p>price</p>
              <h5 className="price ">
                <FormatRupiah value={product.price} />
              </h5>
              <h6 className="">Color</h6>
              <div className="image_cl row col-12 col-md-12  ">
                <div className="bg-dark rounded-circle p-3 mr-1" />
                <div className="bg-danger rounded-circle p-3 mr-1" />
                <div className="bg-primary rounded-circle p-3 mr-1" />
                <div className="bg-success rounded-circle p-3 mr-1" />
              </div>
              <div className="row">
                <div className="size col-6 col-md-4 mt-4 ">
                  <h6 className="">Size</h6>
                  <div className="row container ">
                    <button className="btn_size rounded-circle">
                      <img className="plus" src={require("../../assets/minus.png")} alt="" />
                    </button>
                    <input className="inputsize rounded-circle mr-1 ml-1" type="text" />
                    <button className="btn_size1">
                      <img className="plus" src={require("../../assets/plus.png")} alt="" />
                    </button>
                  </div>
                </div>
                <div className="size  col-6 col-md-4 mt-4  ">
                  <h6>Jumlah</h6>
                  <div className="row  ">
                    <button className="btn_size rounded-circle">
                      <img className="plus" src={require("../../assets/minus.png")} alt="" />
                    </button>
                    <input className="inputsize rounded-circle mr-1 ml-1" type="text" />
                    <button className="btn_size1">
                      <img className="plus" src={require("../../assets/plus.png")} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-3 col-sm-3   mt-5 ">
                  <button className="btn btn-outline-dark btn-lg btn-block text-center"> Chat </button>
                </div>
                <div className="col-3 col-sm-3  mt-5 ">
                  <button className="btn btn-outline-dark btn-lg btn-block text-center "> Add </button>
                </div>
                <div className="col-6 col-sm-6  mt-5  ">
                  <button className="btn btn-primary btn-lg btn-block">
                    <a href="/pages/order.html" /> Buy Now
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                Magni aperiam officiis at voluptatem error sed et autem sit placeat fugit fugiat nihil eius perspiciatis itaque quae, iste consequuntur enim velit accusantium soluta a magnam. Ex similique veniam iusto recusandae dolor odio
                perferendis laborum sunt,
              </p>
              <p>
                soluta enim! Tempora, corporis. Provident molestias id rerum sapiente dolorem. Iure corrupti quae placeat cupiditate, exercitationem aspernatur voluptatum accusantium earum tempore natus laudantium quibusdam sit eaque eos
                voluptates
              </p>
              <p>molestiae a! Nam commodi ullam molestiae? Sit laborum vero, iusto modi quisquam eaque voluptatum veniam facilis explicabo odit reiciendis! Natus, ex officiis dolorem obcaecati repellat ut id tempore</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, dignissimos!</p>
            </div>
          </div>
          <div className="container  ">
            <h3 className="">Product review</h3>
            <div className="row reating_star  ">
              <div className=" col-md-2 col-5  ">
                <div className="  row  ">
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
