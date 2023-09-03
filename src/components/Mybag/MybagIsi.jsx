import React, { useEffect, useState } from "react";

import style from "./Mybag.model.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FormatRupiah } from "@arismun/format-rupiah";
import Swal from "sweetalert2";

const MybagIsi = () => {
  let { id } = useParams();
  const [jumlah, setJumlah] = useState(0);

  const increaseJum = () => {
    setJumlah((jumlah) => jumlah + 1);
  };

  const decreaseJum = () => {
    if (jumlah > 0) {
      setJumlah((jumlah) => jumlah - 1);
    }
  };

  const navigete = useNavigate();

  const [selectedItems, setSelectedItems] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (itemId, price) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
      setTotalPrice(totalPrice - price);
    } else {
      setSelectedItems([...selectedItems, itemId]);
      setTotalPrice(totalPrice + price);
    }
  };

  console.log(selectedItems);
  console.log(totalPrice);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/orders/user/${id}`)
      .then((res) => {
        setData(res.data.data);
        // localStorage.setItem("id_product", res.data.data[0].id);s
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hendeldelete = async (selectedItems) => {
    axios
      .delete(`${process.env.REACT_APP_API_BACKEND}/orders/${selectedItems}`)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Orders",
          text: `Delete Orders Success`,
          icon: "success",
        });
        // data();
        // setSelectedItems([]);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "error",
          icon: "error",
        });
      });
  };

  const handleCheckout = async () => {
    try {
      if (selectedItems.length === 0) {
        Swal.fire({
          title: "No Items Selected",
          text: "Please select items before proceeding to checkout.",
          icon: "warning",
        });
        return;
      }
      const requestData = selectedItems.map((itemId) => {
        const selectedItem = data.find((item) => item.id === itemId);
        if (selectedItem) {
          return {
            id_product: selectedItem.id_product,
            id_user: selectedItem.id_users,
            qty: selectedItem.qty,
            total_price: selectedItem.total_price,
            // ... add any other relevant properties
          };
        } else {
          console.warn(`Item with ID ${itemId} not found.`);
          return null;
        }
      });

      const validRequestData = requestData.filter((item) => item !== null);

      console.log(validRequestData);

      let combinedObject = {};

      // Iterasi melalui setiap objek dalam array dan menggabungkan propertinya
      for (let i = 0; i < validRequestData.length; i++) {
        let currentUser = validRequestData[i];
        for (let prop in currentUser) {
          combinedObject[prop] = currentUser[prop];
        }
      }

      console.log(combinedObject);

      const response = await axios.post(`${process.env.REACT_APP_API_BACKEND}/payment`, combinedObject);

      console.log("Checkout response:", response.data.status);
      const id = localStorage.getItem("id_user");
      if (response.data.status === "success") {
        Swal.fire({
          title: "Checkout Successful",
          text: "Your checkout was successful.",
          icon: "success",
        });
        navigete(`/Cekout/${id}`);
        // Delete items after successful checkout
        axios
          .delete(`${process.env.REACT_APP_API_BACKEND}/orders/${selectedItems}`)
          .then((res) => {
            console.log(res);
            // Refresh the page to reflect changes
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              text: "Error while deleting items",
              icon: "error",
            });
          });
      } else {
        Swal.fire({
          title: "Checkout Failed",
          text: "An error occurred during checkout. Please try again later.",
          icon: "error",
        });
      }

      // If everything is successful, you can navigate to the next page or perform any other action
    } catch (error) {
      console.error("Error during checkout:", error.response);
      Swal.fire({
        title: "Checkout Failed",
        text: "An error occurred during checkout. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div className="">
      <section className="  mt-5">
        <h2 className=" container font-weight-bolder">My bag</h2>
        <div className=" container ">
          <div className="  row">
            <div className={`container col-md-8  col-sm-6  mt-3 ${style.coba} coba `}>
              <div className={` container ${style.borders_exp}   borders_exp rounded product row mt-3 p-3`}>
                <div className="col-1 col-md-1 "></div>
                <div className="col-8 .col-md-5 mt-3   ">
                  <p className=" teks card-title">Select items {!selectedItems.length ? "" : <span className=" text-secondary">({selectedItems.length} items selected)</span>}</p>
                </div>
                <div className="col-2 .col-md-2  mt-2  ">
                  {!selectedItems.length ? (
                    ""
                  ) : (
                    <p className={`${style.delete} delete card-title`} onClick={() => hendeldelete(selectedItems)}>
                      Delete
                    </p>
                  )}
                </div>
              </div>
              {data?.map((item) => (
                <div className={`container borders border rounded product1  ${style.product1} row mt-3 p-2`} key={item.id}>
                  <div className="col-1 col-md-1 mr-2   ">
                    <input className="checkbox" type="checkbox" name="checkbox" id="cb" checked={selectedItems.includes(item.id)} onChange={() => handleCheckboxChange(item.id, item.total_price)} />
                  </div>
                  <div className={` col-10 col-md-5 col-sm-3  ${style.img_brand} img_brand`}>
                    <div className=" row ">
                      <img className={`${style.image} image`} src={item.photo} alt="cloth" />
                      <div className={` ${style.teks1} teks1 ml-3 mt-3 `}>
                        <p className={` ${style.teks} teks`}>{item.name}</p>
                        <p className={`${style.brend} brend`}>Tokopedia</p>
                        <p className={`${style.brend} mt-1 text-bold brend`} style={{ fontWeight: 900 }}>
                          <FormatRupiah value={item.price} />{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={` row col-md-3 mt-3  ${style.quantity} quantity  `}>
                    <button style={{ width: "35px", height: "35px", backgroundColor: "rgb(189, 189, 189)", borderRadius: "100%", border: "none" }} onClick={decreaseJum}>
                      -
                    </button>
                    <p style={{ padding: "4px 10px 0 10px" }}>{item.qty}</p>
                    <button style={{ width: "35px", height: "35px", backgroundColor: "rgb(240, 240, 240)", borderRadius: "100%", border: "none" }} onClick={increaseJum}>
                      +
                    </button>
                  </div>
                  <div className="col-md-3 ">
                    <p className={`${style.price1} price1`} style={{ fontWeight: 800 }}>
                      <FormatRupiah value={item.total_price === 0 ? item.price : item.total_price} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className=" col-12  col-md-4 col-sm-6 mb-3 mt-3  ">
              <div className=" borders_paymen   border rounded product p-3 pt-3 ">
                <h4 className="font-weight-bold mr-4 ">Shopping summary</h4>
                <div className="row mt-4 prices ">
                  <p className="col-7 .col-sm-6">Total price</p>
                  <p className="col-3 .col-sm-6 text-dark" style={{ fontWeight: 800 }}>
                    <FormatRupiah value={totalPrice} />
                  </p>
                </div>

                <button
                  onClick={() => {
                    handleCheckout();
                  }}
                  className="btn btn-primary btn-lg btn-block"
                >
                  {" "}
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MybagIsi;
