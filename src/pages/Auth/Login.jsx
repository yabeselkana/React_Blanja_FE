// import axios from "axios";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  let onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  let onClick = (e) => {
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append("name", data.email);
    // formData.append("stock", data.password);
    // axios
    //   .post("http://localhost:4000/users/login", formData)
    //   .then((res) => {
    //     alert("succesful Login");
    //     localStorage.setItem("token", res.data.data.token);
    //     localStorage.setItem("refreshToken", res.data.data.refreshToken);
    //     // e({ type: "USER_LOGIN_SUCCESS", payload: res.data.data });
    //     navigate("/product");
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     alert("gagal register");
    //   });
    axios
      .post("http://localhost:4000/users/login", data)
      .then((res) => {
        alert("succesful Login");
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        // e({ type: "USER_LOGIN_SUCCESS", payload: res.data.data });
        navigate("/Profile");
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
              <input className="form-control" type="email" name="email" id="email" placeholder="email" onChange={onChange} />
            </div>
            <div className="form-group">
              <input className="form-control" type="password" name="password" id="password" placeholder="password" onChange={onChange} />
            </div>
            <div className="form-group">
              <a className="float-right py-3 text-danger" href="#">
                Forgot password?
              </a>
              <button className="btn btn-block rounded-pill buton " onClick={onClick}>
                PRIMARY
              </button>
            </div>

            <p className="text-regis">
              Don't have tokopedia account? <Link to="/Register">Register</Link>{" "}
            </p>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div className="form-group">
              <input className="form-control" type="email" name="email" id="email" placeholder="email" onChange={onChange} />
            </div>
            <div className="form-group">
              <input className="form-control" type="password" name="password" id="password" placeholder="password" onChange={onChange} />
            </div>
            <div className="form-group">
              <a className="float-right py-3 text-danger" href="#">
                Forgot password?
              </a>
              <button className="btn btn-block rounded-pill buton" onClick={onClick}>
                PRIMARY
              </button>
            </div>

            <p className="text-regis">
              Don't have tokopedia account?
              <Link to="/Register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
