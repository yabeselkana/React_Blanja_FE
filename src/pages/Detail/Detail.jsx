import React from "react";
import DetailProduct from "../../components/Detail/DetailProduct";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";

const Detail = () => {
  return (
    <>
      <Navbar />
      <DetailProduct />
      <Products />
    </>
  );
};

export default Detail;
