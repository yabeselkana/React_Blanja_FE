import React from "react";

const Catagory = () => {
  return (
    <div>
      {" "}
      <section className="container  mt-5">
        <h2 className="ml-3">Category</h2>
        <p className="ml-3">What are you currently looking for?</p>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-3 mb-5">
              <div>
                <img className="category" src={require("../../assets/pants.png")} alt="pants" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-3 mb-5">
              <div>
                <img className="category" src={require("../../assets/Jecket.png")} alt="jacket" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-3 mb-5">
              <div>
                <img className="category" src={require("../../assets/shorts.png")} alt="shorts" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-3 mb-5">
              <div>
                <img className="category" src={require("../../assets/t-shirt.png")} alt="t-shirt" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catagory;
