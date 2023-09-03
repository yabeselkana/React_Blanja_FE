import { Fragment } from "react";
import Router from "./config/router";
import axios from "axios";

function App() {
  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("refreshToken")}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return (
    <Fragment>
      <Router></Router>
    </Fragment>
  );
}

export default App;
