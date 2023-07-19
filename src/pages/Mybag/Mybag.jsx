import React from "react";
import MybagIsi from "../../components/Mybag/MybagIsi";
import NavbarProfile from "../../components/NavbarProfile/NavbarProfile";
import Navbar from "../../components/Navbar/Navbar";

const Mybag = () => {
  const isLogin = localStorage.getItem("token");
  console.log(isLogin);

  return (
    <>
      {!isLogin ? <Navbar /> : <NavbarProfile />}
      <MybagIsi />
    </>
  );
};

export default Mybag;
