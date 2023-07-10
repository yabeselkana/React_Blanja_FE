import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  let [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
  });

  let onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  let onClick = (e) => {
    axios
      .post("http://localhost:4000/users/register", data)
      .then((res) => {
        alert("succesful register");
      })
      .catch((err) => {
        console.log(err.response);
        alert("gagal register");
      });
  };

  return (
    <>
      <div className="container isnan">
        <img src={require("../../assets/logo.png")} alt="logo" className="imgku" />
        <p className="text-center py-3">Please sign up with your account</p>
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              Customer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
              Seller
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="form-group">
              <input className="form-control" type="fullname" name="fullname" id="fullname" placeholder="fullname" onChange={onChange} />
            </div>
            <div className="form-group">
              <input className="form-control" type="email" name="email" id="email" placeholder="email" onChange={onChange} />
            </div>
            <div className="form-group">
              <input className="form-control" type="role" name="role" id="role" placeholder="role" onChange={onChange} />
            </div>
            <div className="form-group">
              <input className="form-control" type="password" name="password" id="password" placeholder="password" onChange={onChange} />
            </div>
            <div className="form-group">
              <button className="btn btn-block rounded-pill buton" onClick={onClick}>
                PRIMARY
              </button>
            </div>

            <p className="text-regis">
              Already have a Tokopedia account?
              <Link to="/Login">Login</Link>
            </p>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div className="form-group">
              <input className="form-control" placeholder="Name" type="name" />
            </div>
            <div className="form-group">
              <input name="" className="form-control" placeholder="Email" type="email" />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Password" type="password" />
            </div>
            <div className="form-group">
              <button className="btn btn-block rounded-pill buton">PRIMARY</button>
            </div>

            <p className="text-regis">
              Already have a Tokopedia account?
              <a className="text-danger" href="/pages/login.html">
                {" "}
                Login{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
