import axios from "axios";
// import swal from "sweetalert";
import Swal from "sweetalert2";

// Get
export const getProduct = (setProducts) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_API_BACKEND}/products`).then(function (respose) {
      setProducts(respose.data.data);
    });

    dispatch({ type: "GET_ALL_PRODUCT", payload: "success" });
  } catch (error) {
    Swal.fire({
      text: error.respose.data.message,
      icon: "warning",
    });
  }
};

export const createProduct = (data, saveImage, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", saveImage);
    formData.append("description", data.description);
    axios
      .post(`${process.env.REACT_APP_API_BACKEND}/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Product Added",
          text: `New product have been added`,
          icon: "success",
        });
        setShow(false);
        window.location.reload();
      });
    dispatch({ type: "CREATE_PRODUCT", payload: "success" });
  } catch (err) {
    Swal.fire({
      text: err.response.data.message,
      icon: "warning",
    });
    setShow(false);
  }
};

export const updateProduct = (data, photo, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", photo);
    formData.append("description", data.description);
    axios
      .put(`${process.env.REACT_APP_API_BACKEND}/products/${data.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Product Update",
          text: `Update Product Success`,
          icon: "success",
        });
        setShow(false);
        window.location.reload();
        dispatch({ type: "UPDATE_PRODUCT", payload: res.data });
      })
      .catch((err) => {
        Swal.fire({
          text: "error",
          icon: "error",
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProducts = (id, setShow) => async (dispatch) => {
  try {
    axios
      .delete(`${process.env.REACT_APP_API_BACKEND}/products/${id}`)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Product Delete",
          text: `Delete Product Success`,
          icon: "success",
        });
        setShow(false);
        window.location.reload();
        dispatch({ type: "DELETE_PRODUCT", payload: "success" });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "error",
          icon: "error",
        });
        setShow(false);
      });
  } catch (error) {
    console.log(error);
  }
};
