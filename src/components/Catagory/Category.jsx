import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "./Category.css";
// import OwlCarousel from "react-owl-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

// Dummy category

let category = [
  {
    name: "Shirt",
    backgroundColor: "red",
    backgroundImage: require("../../assets/Catagory/hiclipart 15.png"),
  },
  {
    name: "Pants",
    backgroundColor: "blue",
    backgroundImage: require("../../assets/Catagory/hiclipart 21.png"),
  },
  {
    name: "Jacket",
    backgroundColor: "yellow",
    backgroundImage: require("../../assets/Catagory/hiclipart 22.png"),
  },
  {
    name: "Jeans",
    backgroundColor: "green",
    backgroundImage: require("../../assets/Catagory/hiclipart 26.png"),
  },
  {
    name: "Shoes",
    backgroundColor: "pink",
    backgroundImage: require("../../assets/Catagory/hiclipart 34.png"),
  },
  {
    name: "T-Shirt",
    backgroundColor: "gray",
    backgroundImage: require("../../assets/Catagory/hiclipart 15.png"),
  },
];

const Category = () => {
  return (
    <Fragment>
      <section className="category container">
        <div className="header-category">
          <h1 className="container">Category</h1>
          <p className="container">What are you currently looking for</p>
        </div>
        <Carousel responsive={responsive}>
          {category.map((item) => (
            <>
              <div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-11 cat1 mb-4 cat1 container " style={{ backgroundColor: item.backgroundColor }}>
                  <img className="img-fluid" src={`${item.backgroundImage}`} alt="" />
                  <p>{item.name}</p>
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </section>
    </Fragment>
  );
};

export default Category;
