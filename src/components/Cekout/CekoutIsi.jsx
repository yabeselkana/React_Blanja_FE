import React from "react";

const CekoutIsi = () => {
  return (
    <>
      <section className="container mt-4 ">
        <h2 className="font-weight-bold mb-3">Checkout</h2>
        <h6 className="font-weight-bold">Shipping Adress</h6>
        <div className="container">
          <div className="row  ">
            <div className=" col-md-8 ">
              <div className="  borders border rounded product p-2  row">
                <div className=" container ">
                  <h5 className="font-weight-bold">Andreas Jane</h5>
                </div>
                <div className=" container mt-2 ">
                  <p className="  card-title text-justify">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                </div>
                <div className="container mt-2  ">
                  <button className="buton rounded-pill border-0 mb-3">Choose another address</button>
                </div>
              </div>
              <div className="container borders border rounded product row mt-3 p-3">
                <div className="col-8 .col-md-4  ">
                  <div className=" row">
                    <img className="imgikon" src="/assets/image/jas.png" alt="cloth" />
                    <div className=" teks1 ml-3">
                      <p className="teksl ">Men's formal suit - Black</p>
                      <p className="brend">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-2 mt-2 ">
                  <p className="text-dark" style={{ fontWeight: 900 }}>
                    Rp.200.000
                  </p>
                </div>
              </div>
              <div className="borders border rounded product row mb-3 mt-3 p-3">
                <div className="col-8 .col-sm-6  ">
                  <div className=" row">
                    <img className="imgikon" src="/assets/image/jeket.png" alt="cloth" />
                    <div className=" teks1 ml-3">
                      <p className="teksl">Men's Jacket jeans</p>
                      <p className="brend">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-sm-2   mt-2  ">
                  <p className="text-dark" style={{ fontWeight: 900 }}>
                    Rp.200.000
                  </p>
                </div>
              </div>
            </div>
            <div className="container col-md-4 col-sm-6 mb-5  ">
              <div className="borders_paymen container  border rounded product pt-3 ">
                <h4 className="font-weight-bold">Shopping summary</h4>
                <div className="row mt-4 prices ">
                  <p className="col-8 .col-sm-6 ">Total price</p>
                  <p className="col-3 .col-sm-6 text-dark" style={{ fontWeight: 800 }}>
                    Rp.400.000
                  </p>
                </div>
                <div className="row  prices ">
                  <p className="col-8 .col-sm-6  ">Delivery</p>
                  <p className="col-3 .col-sm-6 text-dark" style={{ fontWeight: 800 }}>
                    Rp.50.000
                  </p>
                </div>
                <hr />
                <div className="row  prices ">
                  <p className="col-8 .col-sm-6  ">Shopping summary</p>
                  <p className="col-3 .col-sm-6 text-danger" style={{ fontWeight: 800 }}>
                    Rp.450.000
                  </p>
                </div>
                <button className="btn btn-primary btn-lg btn-block mb-2">Select payment</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CekoutIsi;
