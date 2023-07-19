import React from "react";
import DetailProduct from "../../components/Detail/DetailProduct";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import NavbarProfile from "../../components/NavbarProfile/NavbarProfile";

const Detail = () => {
  const isLogin = localStorage.getItem("token");
  console.log(isLogin);
  return (
    <>
      {!isLogin ? <Navbar /> : <NavbarProfile />}
      <DetailProduct />
      <Products />
    </>
  );
};

export default Detail;
