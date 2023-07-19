import React from "react";

import style from "./Cekout.model.css";
import ModelAdres from "./Model/ModelAdres";
import ModelPayment from "./Model/ModelPayment/ModelPayment";

const CekoutIsi = () => {
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
                  <h5 className="font-weight-bold">Andreas Jane</h5>
                </div>
                <div className=" container mt-2 ">
                  <p className="  card-title text-justify">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                </div>
                <div className=" col-7  ">
                  <ModelAdres />
                </div>
              </div>
              <div className={` borders border rounded ${style.product}  product row mt-3 p-3`}>
                <div className="col-12 col-md-6   ">
                  <div className=" row">
                    <img className="imgikon" src={require("../../assets/jas.png")} alt="cloth" />
                    <div className=" teks1 ml-3">
                      <p className={`${style.teksl} teksl`}>Men's formal suit - Black</p>
                      <p className="brend">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-6 mt-2  ">
                  <p className="text-dark text-right" style={{ fontWeight: 900 }}>
                    Rp.200.000
                  </p>
                </div>
              </div>
              <div className={` borders border rounded ${style.product}  product row mt-3 p-3`}>
                <div className="col-12 col-md-6   ">
                  <div className=" row">
                    <img className="imgikon" src={require("../../assets/jas.png")} alt="cloth" />
                    <div className=" teks1 ml-3">
                      <p className="teksl ">Men's formal suit - Black</p>
                      <p className="brend">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-6 mt-2  ">
                  <p className="text-dark text-right" style={{ fontWeight: 900 }}>
                    Rp.200.000
                  </p>
                </div>
              </div>
            </div>
            <div className="container col-md-4 col-sm-6 mb-5  mt-2 ">
              <div className="borders_paymen container  border rounded product  pt-3 ">
                <h4 className="font-weight-bold">Shopping summary</h4>
                <div className="row mt-4 prices ">
                  <p className="col-7 col-sm-7  ">Total price</p>
                  <p className="col-3 col-sm-5 text-dark" style={{ fontWeight: 800 }}>
                    Rp.400.000
                  </p>
                </div>
                <div className="row  prices ">
                  <p className="col-7 col-sm-7   ">Delivery</p>
                  <p className="col-3 col-sm-5 text-dark" style={{ fontWeight: 800 }}>
                    Rp.50.000
                  </p>
                </div>
                <hr />
                <div className="row  prices ">
                  <p className="col-7 .col-sm-6  ">Shopping summary</p>
                  <p className="col-3 .col-sm-6 text-danger" style={{ fontWeight: 800 }}>
                    Rp.450.000
                  </p>
                </div>
                <ModelPayment>Select payment</ModelPayment>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CekoutIsi;
