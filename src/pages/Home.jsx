import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carosel from "../components/carosel/Carousel";
import Products from "../components/Products/Products";
import NewProduct from "../components/NewProduct/NewProduct";
import Category from "../components/Catagory/Category";
import NavbarProfile from "../components/NavbarProfile/NavbarProfile";
// import "./"

const Home = () => {
  const isLogin = localStorage.getItem("token");
  // console.log(isLogin);

  return (
    <>
      {!isLogin ? <Navbar /> : <NavbarProfile />}
      <main>
        <Carosel />
        <Category />
        <Products />
        <NewProduct />
      </main>
    </>
  );
};

export default Home;
