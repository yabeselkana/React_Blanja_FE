import React from "react";
import { useState } from "react";

const Quantity = () => {
  const [counter, setCounter] = useState(0);
  const [jumlah, setJumlah] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };
  const increaseJum = () => {
    setJumlah((jumlah) => jumlah + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };
  const decreaseJum = () => {
    if (jumlah > 0) {
      setJumlah((jumlah) => jumlah - 1);
    }
  };

  return (
    <>
      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
        <div class="container mt-4 ml-3 row text-center text-lg-start pe-sm-4 pe-md-0">
          <p>Size</p>
        </div>
        <div class="row">
          <div class="col-12 d-flex">
            <button style={{ width: "35px", height: "35px", backgroundColor: "rgb(189, 189, 189)", borderRadius: "100%", border: "none" }} onClick={decrease}>
              -
            </button>
            <p style={{ padding: "4px 10px 0 10px" }}>{counter}</p>
            <button style={{ width: "35px", height: "35px", backgroundColor: "rgb(229, 229, 229)", borderRadius: "100%", border: "none" }} onClick={increase}>
              +
            </button>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Quantity;
