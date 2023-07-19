import React from "react";
import NavbarProfile from "../../components/NavbarProfile/NavbarProfile";
import ProfileCostomer from "../../components/Profile/ProfileCustomer/ProfileCostomer";
import ProfileSeler from "../../components/Profile/ProfileSeler/ProfileSeler";
// import { Navigate } from "react-router-dom";
// import Home from "../Home";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import TestProfile from "../../components/Profile/TestProfile";
// import Crud from "../../components/Crud/Crud";

const Profile = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log(isLogin);
  console.log(role);

  if (isLogin) {
    return (
      <>
        <NavbarProfile />
        {role === "customer" ? <ProfileCostomer /> : <ProfileSeler />}
      </>
    );
  } else {
    Swal.fire("Do you want out")
      .then((result) => {
        navigate("/home");
      })
      .catch((err) => {});
    // return <Navigate to="/login" replace="true" />;
    // navigate("/home")
  }
};
export default Profile;
