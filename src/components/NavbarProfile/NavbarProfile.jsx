import React from "react";

const NavbarProfile = () => {
  return (
    <>
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <img className="logo mr-4" src={require("../../assets/Group 1209.png")} alt="logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: 100 }}>
              <li className="nav-item active">
                <form className="d-flex">
                  <input className="form-control mr-2 input " type="search " placeholder="Search" aria-label="Search" />
                  <img className="logoseach" src="/assets/image/Search Glyph.svg" alt="" />
                </form>
              </li>
              <li className="nav-item squer">
                <img className="logo_2" src={require("../../assets/filter 1.png")} alt="cart" />
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 row justify-content-center">
              <a href="/pages/order.html">
                <img className="mr-4" src={require("../../assets/shopping-cart.png")} alt="cart" />
              </a>
              <img className="mr-4" src={require("../../assets/bell (1) 1.png")} alt="" />
              <img className="mr-4" src={require("../../assets/mail (3) 1.png")} alt="" />
              <img className="mr-4" src={require("../../assets/Mask Group.png")} alt="" />
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarProfile;
