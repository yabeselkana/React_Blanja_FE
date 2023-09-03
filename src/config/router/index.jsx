import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home.jsx";
import Login from "../../pages/Auth/Login.jsx";
import Register from "../../pages/Auth/Register.jsx";
import Profile from "../../pages/Profile/Profile.jsx";
import Detail from "../../pages/Detail/Detail.jsx";
import Mybag from "../../pages/Mybag/Mybag.jsx";
import Cekout from "../../pages/Cekout/Cekout.jsx";

const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Mybag/:id" element={<Mybag />} />
          <Route path="/Cekout/:id" element={<Cekout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default index;
