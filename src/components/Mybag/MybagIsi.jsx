import React from "react";

const MybagIsi = () => {
  return (
    <>
      <section className="container mt-5">
        <h2 className=" font-weight-bolder">My bag</h2>
        <div className="">
          <div className="  row">
            <div className="col-md-8 container">
              <div className="  borders_exp rounded product row mt-3 p-3">
                <div className="col-1 .col-md-1 ">
                  <input className="checkbox" type="checkbox" name="checkbox" id="cb" />
                </div>
                <div className="col-8 .col-md-5 mt-3   ">
                  <p className=" teks card-title">
                    Select all items <span className=" text-secondary">(2 items selected)</span>
                  </p>
                </div>
                <div className="col-2 .col-md-2  mt-2  ">
                  <p className="delete card-title">Delete</p>
                </div>
              </div>
              <div className="borders border rounded product row mt-3 p-2">
                <div className=" col-md-1  ">
                  <input className="checkbox" type="checkbox" name="checkbox" id="cb" />
                </div>
                <div className="col-md-5 ">
                  <div className=" row ">
                    <img className="" src={require("../../assets/jas.png")} alt="cloth" />
                    <div className=" teks1 ml-3">
                      <p className="teks">Men's formal suit - Black</p>
                      <p className="brend">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div className=" col-md-3 ">
                  <img className=" " src="/assets/image/plus-minus.png" alt="" />
                </div>
                <div className="col-md-3 ">
                  <p className="price1 " style={{ fontWeight: 800 }}>
                    Rp.200.000
                  </p>
                </div>
              </div>
              <div className=" borders rounded product row mt-3 p-2">
                <div className=" col-md-1  ">
                  <input className="checkbox" type="checkbox" name="checkbox" id="cb" />
                </div>
                <div className="col-md-5 ">
                  <div className=" row">
                    <img className="" src={require("../../assets/jeket.png")} alt="cloth" />
                    <div className=" teks1 ml-3">
                      <p className="teks">Men's Jacket jeans</p>
                      <p className="brend">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-2">
                  <div className=" items row container">
                    <img src="/assets/image/plus-minus.png" alt="" />
                  </div>
                </div>
                <div className="col-md-2 mt-2  ">
                  <p className="price1" style={{ fontWeight: 800 }}>
                    Rp.200.000
                  </p>
                </div>
              </div>
            </div>
            <div className="container  col-md-4 col-sm-6 mb-3 mt-3 ">
              <div className="borders_paymen container  border rounded product pb-4 pt-4">
                <h4 className="font-weight-bold">Shopping summary</h4>
                <div className="row mt-4 prices ">
                  <p className="col-8 .col-sm-6">Total price</p>
                  <p className="col-3 .col-sm-6 text-dark" style={{ fontWeight: 800 }}>
                    Rp.400.000
                  </p>
                </div>
                <button className="btn btn-primary btn-lg btn-block">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MybagIsi;
