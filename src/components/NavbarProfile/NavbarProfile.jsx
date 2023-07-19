import React from "react";

import style from "./NavbarProfile.modul.css";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import swal from "sweetalert";

const NavbarProfile = () => {
  // const navigate = useNavigate();
  const hendelOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <header className="container">
        <nav className="container navbar navbar-expand-lg navbar-light ">
          <Link to="/home">
            <img className={`${style.logo} logo mr-4`} src={require("../../assets/logo.png")} alt="logo" crossOrigin="anonymous" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className={`navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll ${style.searchform}  searchform`} style={{ maxHeight: 100 }}>
              <li className="nav-item active">
                <form className="d-flex">
                  <input className={`form-control mr-4 ${style.input}  input`} type="search " placeholder="Search" aria-label="Search" />
                  <img className={`${style.logoseach} logoseach`} src={require("../../assets/Search Glyph.png")} alt="" />
                </form>
              </li>
              <li className={`nav-item ${style.squer} squer`}>
                <img className={`logo2`} src={require("../../assets/filter 1.png")} alt="cart" />
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 row justify-content-center">
              <Link to="/Mybag">
                <img className="mr-3" src={require("../../assets/shopping-cart.png")} alt="cart" />
              </Link>
              <img className="mr-4" src={require("../../assets/bell (1) 1.png")} alt="" />
              <img className="mr-4" src={require("../../assets/mail (3) 1.png")} alt="" />
              <Link to="/Profile">
                <img className="mr-4" src={require("../../assets/Mask Group.png")} alt="" />
              </Link>
              <button className="btn btn-primary" onClick={hendelOut}>
                Logout
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarProfile;
