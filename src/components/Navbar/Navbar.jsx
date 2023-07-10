import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link to="home">
            <img className="logo mr-4" src={require("../../assets/logo.png")} alt="logo" crossOrigin="anonymous" />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: 100 }}>
              <li className="nav-item active">
                <form className="d-flex">
                  <input className="form-control mr-2 input " type="search " placeholder="Search" aria-label="Search" />
                  <img className="logoseach" src="" alt="" />
                </form>
              </li>
              <li className="nav-item squer">
                <img className="logo_2" src={require("../../assets/filter 1.png")} alt="cart" />
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 row justify-content-center">
              <Link to="./Mybag">
                <img className="mr-4" src={require("../../assets/shopping-cart.png")} alt="cart" />
              </Link>
              <Link to="/Login">
                <button className="btn btn-primary rounded-pill mr-2">Login</button>
              </Link>
              <button className="btn border rounded-pill">
                <a href="/pages/sigup.html">Signup</a>
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
