import React, { useState } from "react";

import style from "./Mybag.model.css";
import { Link } from "react-router-dom";

const MybagIsi = () => {
  const [jumlah, setJumlah] = useState(0);

  const increaseJum = () => {
    setJumlah((jumlah) => jumlah + 1);
  };

  const decreaseJum = () => {
    if (jumlah > 0) {
      setJumlah((jumlah) => jumlah - 1);
    }
  };
  return (
    <div className="">
      <section className="  mt-5">
        <h2 className=" container font-weight-bolder">My bag</h2>
        <div className=" container ">
          <div className="  row">
            <div className={`container col-md-8  col-sm-6  mt-3 ${style.coba} coba `}>
              <div className={` container ${style.borders_exp}   borders_exp rounded product row mt-3 p-3`}>
                <div className="col-1 col-md-1 ">
                  <input className="checkbox" type="checkbox" name="checkbox" id="cb" />
                </div>
                <div className="col-8 .col-md-5 mt-3   ">
                  <p className=" teks card-title">
                    Select all items <span className=" text-secondary">(2 items selected)</span>
                  </p>
                </div>
                <div className="col-2 .col-md-2  mt-2  ">
                  <p className={`${style.delete} delete card-title`}>Delete</p>
                </div>
              </div>
              <div className={`container borders border rounded product1  ${style.product1} row mt-3 p-2`}>
                <div className="col-1 col-md-1 mr-2   ">
                  <input className="checkbox" type="checkbox" name="checkbox" id="cb" />
                </div>
                <div className={` col-10 col-md-5 col-sm-3  ${style.img_brand} img_brand`}>
                  <div className=" row ">
                    <img className=" border" src={require("../../assets/jas.png")} alt="cloth" />
                    <div className={` ${style.teks1} teks1 ml-3 mt-3 `}>
                      <p className={` ${style.teks} teks`}>Men's formal suit - Black</p>
                      <p className={`${style.brend} brend`}>Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div className={` row col-md-3 mt-3  ${style.quantity} quantity  `}>
                  <button style={{ width: "35px", height: "35px", backgroundColor: "rgb(189, 189, 189)", borderRadius: "100%", border: "none" }} onClick={decreaseJum}>
                    -
                  </button>
                  <p style={{ padding: "4px 10px 0 10px" }}>{jumlah}</p>
                  <button style={{ width: "35px", height: "35px", backgroundColor: "rgb(240, 240, 240)", borderRadius: "100%", border: "none" }} onClick={increaseJum}>
                    +
                  </button>
                </div>
                <div className="col-md-3 ">
                  <p className={`${style.price1} price1`} style={{ fontWeight: 800 }}>
                    Rp.200.000
                  </p>
                </div>
              </div>
              <div className={`container borders border rounded product1  ${style.product1} row mt-3 p-2`}>
                <div className="col-1 col-md-1  mr-2 ">
                  <input className="checkbox" type="checkbox" name="checkbox" id="cb" />
                </div>
                <div className=" col-10 col-md-5 ">
                  <div className=" row ">
                    <img className="" src={require("../../assets/jeket.png")} alt="cloth" />
                    <div className={` ${style.teks1}teks1 ml-3 mt-3`}>
                      <p className={` ${style.teks} teks`}>Men's formal suit - Black</p>
                      <p className={`${style.brend} brend`}>Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div className=" row col-md-3 mt-3 ">
                  <button style={{ width: "35px", height: "35px", backgroundColor: "rgb(189, 189, 189)", borderRadius: "100%", border: "none" }} onClick={decreaseJum}>
                    -
                  </button>
                  <p style={{ padding: "4px 10px 0 10px" }}>{jumlah}</p>
                  <button style={{ width: "35px", height: "35px", backgroundColor: "rgb(240, 240, 240)", borderRadius: "100%", border: "none" }} onClick={increaseJum}>
                    +
                  </button>
                </div>
                <div className="col-md-3 ">
                  <p className={`${style.price1} price1`} style={{ fontWeight: 800 }}>
                    Rp.200.000
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-12  col-md-4 col-sm-6 mb-3 mt-3  ">
              <div className=" borders_paymen   border rounded product p-3 pt-3 ">
                <h4 className="font-weight-bold mr-4 ">Shopping summary</h4>
                <div className="row mt-4 prices ">
                  <p className="col-7 .col-sm-6">Total price</p>
                  <p className="col-3 .col-sm-6 text-dark" style={{ fontWeight: 800 }}>
                    Rp.400.000
                  </p>
                </div>
                <Link to="/Cekout">
                  <button className="btn btn-primary btn-lg btn-block">Buy</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MybagIsi;
