import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carosel from "../components/carosel/Carousel";
import Catagory from "../components/Catagory/Catagory";
import Products from "../components/Products/Products";
import NewProduct from "../components/NewProduct/NewProduct";
// import "./"

const Home = () => {
  return (
    <>
      <>
        {/* Hello world */}
        <Navbar />
        <main>
          <Carosel />
          <Catagory />
          <Products />
          <NewProduct />
        </main>
      </>
    </>
  );
};

export default Home;
