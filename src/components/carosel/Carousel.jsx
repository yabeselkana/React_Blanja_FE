import React from "react";

const Carosel = () => {
  return (
    <>
      <section className="container rounded`">
        <div className="">
          <div className="p-2 row ">
            <div id=" carouselExampleInterval" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-interval={10000}>
                  <img src={require("../../assets/Card Promotion 2.png")} className="d-block w-100" alt="..." />
                  {/* <img src="/assets/image/Card Promotion 2.png" class="d-block w-100" alt="..."> */}
                </div>
                <div className="carousel-item" data-interval={2000}>
                  <img src={require("../../assets/Card Promotion.png")} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={require("../../assets/Card Promotion 2.png")} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carosel;
