import React from "react";
import CekoutIsi from "../../components/Cekout/CekoutIsi";
import NavbarProfile from "../../components/NavbarProfile/NavbarProfile";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// import Home from "../Home";
// import Mybag from "../Mybag/Mybag";

const Cekout = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  console.log(isLogin);
  if (isLogin) {
    return (
      <>
        <NavbarProfile />
        <CekoutIsi />
      </>
    );
  } else {
    Swal.fire("You must be logged in")
      .then((result) => {
        navigate("/Login");
        // return <Navigate to="/Login" replace="true" />;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // return <Navigate to="/home" replace="true" />;
};

export default Cekout;
