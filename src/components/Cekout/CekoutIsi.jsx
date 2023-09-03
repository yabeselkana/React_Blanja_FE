import React, { useEffect, useState } from "react";

import style from "./Cekout.model.css";
import ModelAdres from "./Model/ModelAdres";
import ModelPayment from "./Model/ModelPayment/ModelPayment";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FormatRupiah } from "@arismun/format-rupiah";

const CekoutIsi = () => {
  const [alamat, setAlamat] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/address/user/${id}`)
      .then((res) => {
        setAlamat(res.data.data[0]);
        // localStorage.setItem("id_product", res.data.data[0].id);s
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/payment/user/${id}`)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const delevery = 50000;

  const totalPrice = () => {
    let totalOrderCart = 0;
    data.map((item) => (totalOrderCart += item.total_price));
    return totalOrderCart;
  };

  console.log(totalPrice());

  return (
    <>
      <section className="container mt-4 ">
        <h2 className=" container font-weight-bold mb-3">Checkout</h2>
        <h6 className="container  font-weight-bold">Shipping Adress</h6>
        <div className="container">
          <div className="row  ">
            <div className={`col-md-8 ${style.coba} coba`}>
              <div className={` border rounded ${style.product} product p-2  row`}>
                <div className=" container ">
                  <h5 className="font-weight-bold">{alamat?.recipientname}</h5>
                </div>
                <div className=" container mt-2 ">
                  <p className="  card-title text-justify">
                    {alamat?.address}, {alamat?.City}, {alamat?.postalcode}, {alamat?.phone}
                  </p>
                </div>
                <div className=" col-7  ">
                  <ModelAdres />
                </div>
              </div>
              {data?.map((item) => (
                <div className={` borders border rounded ${style.product}  product row mt-3 p-3`}>
                  <div className="col-12 col-md-6   ">
                    <div className=" row">
                      <img className={`${style.imgikon}  imgikon`} src={item.photo} alt="cloth" />
                      <div className=" teks1 ml-3">
                        <p className={`${style.teksl} teksl`}> {item.name} </p>
                        <p className="brend">Zalora Cloth</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-md-6 mt-2  ">
                    <p className="text-dark text-right" style={{ fontWeight: 900 }}>
                      <FormatRupiah value={item.total_price} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="container col-md-4 col-sm-6 mb-5  mt-2 ">
              <div className="borders_paymen container  border rounded product  pt-3 ">
                <h4 className="font-weight-bold">Shopping summary</h4>
                <div className="row mt-4 prices ">
                  <p className="col-7 col-sm-7  ">Total price</p>
                  <p className="col-3 col-sm-5 text-dark" style={{ fontWeight: 800 }}>
                    <FormatRupiah value={totalPrice()} />
                  </p>
                </div>
                <div className="row  prices ">
                  <p className="col-7 col-sm-7   ">Delivery</p>
                  <p className="col-3 col-sm-5 text-dark" style={{ fontWeight: 800 }}>
                    <FormatRupiah value={delevery} />
                  </p>
                </div>
                <hr />
                <div className="row  prices ">
                  <p className="col-7 .col-sm-6  ">Shopping summary</p>
                  <p className="col-3 .col-sm-6 text-danger" style={{ fontWeight: 800 }}>
                    <FormatRupiah value={totalPrice() + delevery} />
                  </p>
                </div>
                <ModelPayment id={id}>Select payment</ModelPayment>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CekoutIsi;
