import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "./Auth.modul.css";

// const onRole = () => {
//   const role = "costomer";
//   return role;
// };

const Register = () => {
  let [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [selectRole, setselectRole] = useState("customer");
  const handleRoleChange = (role) => {
    setselectRole(role);
  };
  let onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  let onClick = (e) => {
    e.preventDefault();
    const signupData = {
      ...data,
      role: selectRole,
    };
    // console.log(signupData);

    axios
      .post("http://localhost:4000/users/register", signupData)
      .then((res) => {
        console.log(res);
        alert("succesful register");
      })
      .catch((err) => {
        console.log(err.response);
        alert("gagal register");
      });
  };

  return (
    <>
      <div className={`container ${style.cat} cat`}>
        <img src={require("../../assets/logo.png")} alt="logo" className="imgku" />
        <p className="text-center py-3">Please sign up with your account</p>
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={` nav-link ${selectRole === "customer" ? " active" : ""}`}
              onClick={() => handleRoleChange("customer")}
              id="pills-home-tab"
              data-toggle="pill"
              data-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Customer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className={` nav-link ${selectRole === "seller" ? " active" : ""}`} onClick={() => handleRoleChange("seller")}>
              Seller
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className={`tab-pane fade${selectRole === "customer" ? " show active" : ""}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="form-group">
              <input className="form-control" type="fullname" name="fullname" id="fullname" placeholder="fullname" onChange={onChange} />
            </div>
            <div className="form-group">
              <input className="form-control" type="email" name="email" id="email" placeholder="email" onChange={onChange} />
            </div>
            <div className="form-group">
              <input className="form-control" type="password" name="password" id="password" placeholder="password" onChange={onChange} />
            </div>
            <div className="form-group">
              <button className={`${style.btnlog} btnlog  btn btn-block rounded-pill buton`} onClick={onClick}>
                PRIMARY
              </button>
            </div>

            <p className="text-regis">
              Already have a Belanja account?
              <Link to="/Login" className=" text-danger">
                <span> Login</span>
              </Link>
            </p>
          </div>
          <div className={`tab-pane fade${selectRole === "seller" ? " show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div className="form-group">
              <input className="form-control" id="fullname" name="fullname" type="fullname" placeholder="Name" onChange={onChange} />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                placeholder="Email"
                type="email"
                onChange={onChange}
                id="pills-profile-tab"
                data-toggle="pill"
                data-target="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              />
            </div>
            <div className="form-group">
              <input className="form-control" name="password" placeholder="Password" type="password" onChange={onChange} />
            </div>
            <div className="form-group">
              <button className={`${style.btnlog} btnlog  btn btn-block rounded-pill buton`} onClick={onClick}>
                PRIMARY
              </button>
            </div>

            <p className="text-regis">
              Already have a Belanja account?
              <Link to="/Login" className=" text-danger">
                <span> Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
