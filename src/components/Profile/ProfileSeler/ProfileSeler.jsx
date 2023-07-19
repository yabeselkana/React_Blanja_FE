import React from "react";
import style from "./ProfileSeler.Model.css";
import Crud from "../../Crud/Crud";

const ProfileSeler = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-md-3 border p-2 ">
            <div className="container row">
              <img className={`${style.img} img`} src={require("../../../assets/ImageProfile/Mask Group (3).png")} alt="" />
              <div className="mt-2">
                <h5 className={`${style.name} name `}>Johanes Mikael</h5>
                <div className="row">
                  <img className={`${style.imageedit} imageedit mr-1`} src={require("../../../assets/ImageProfile/edit (1) 1.png")} alt="" />
                  <p className={`${style.teksedit} teksedit`}>Edit Profile</p>
                </div>
              </div>
            </div>
            <div className={` ${style.icon} icon`}>
              <ul className={`nav nav-pills mt-4 mb-3 justify-content-center ${style.kls}  kls`} id="pills-tab" role="tablist">
                <li className="nav-item container row" role="presentation">
                  <div className={`${style.user} user mr-3 `}>
                    <img src={require("../../../assets/ImageProfile/user 1.png")} alt="" />
                  </div>
                  <button className="btn border border-0 active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    Store
                  </button>
                </li>
                <li className="nav-item container row mt-3" role="presentation">
                  <div className={`${style.shipping} shipping mr-3 `}>
                    <img src={require("../../../assets/ImageProfile/package 1.png")} alt="" />
                  </div>
                  <button className="btn  border-0" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                    Product
                  </button>
                </li>
                <li className="nav-item row container mt-3" role="presentation">
                  <div className={`${style.order} order mr-3 `}>
                    <img src={require("../../../assets/ImageProfile/shopping-cart (3) 1.png")} alt="" />
                  </div>
                  <button className="btn border border-0" id="pills-order-tab" data-toggle="pill" data-target="#pills-order" type="button" role="tab" aria-controls="pills-order" aria-selected="false">
                    Order
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-9  border tab-content p-4" id="pills-tabContent">
            <div className="tab-pane fade show active  container" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <dir className={` ${style.profile}   profile border `}>
                <h3 className="container mt-3">My Profile </h3>
                <p className="container">Manage your profile information</p>
                <hr />

                <div className=" container row">
                  <div className="col-md-9">
                    <div className={`${style.forml} forml`}>
                      <span className="mr-3">Name</span>
                      <input type="text" />
                    </div>
                    <div className={`${style.forml} mt-4 forml`}>
                      <span className="mr-3">Email</span>
                      <input type="text" />
                    </div>
                    <div className={`${style.formN} mt-4 ml-1 formN`}>
                      <span className="mr-3">Phohe Number</span>
                      <input type="text" />
                    </div>
                    <div className={`${style.formN} mt-4 ml-1 formN`}>
                      <span className="mr-3">Store description</span>
                      <textarea className="form" id="comment" />
                    </div>
                    <div className={`${style.formN} mt-4 mb-4 ml-1 formN`}>
                      <button className={`btn btn-primary rounded-pill `}> Seve</button>
                    </div>
                  </div>
                  <div className={`container col-md-3 ${style.iconprofile} iconprofile `}>
                    <img src={require("../../../assets/ImageProfile/Mask Group (4).png")} alt="" />
                    <button className="btn btn-light rounded-pill mt-3"> Select image</button>
                  </div>
                </div>
              </dir>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <Crud></Crud>
            </div>
            <div className="tab-pane fade" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
              <dir className={` ${style.profile}   profile border `}>
                <h5>My order</h5>
                <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-Allitems-tab" data-toggle="pill" data-target="#pills-Allitems" type="button" role="tab" aria-controls="pills-Allitems" aria-selected="true">
                      All items
                    </button>
                  </li>
                  <li className="nav-item " role="presentation">
                    <button className="nav-link" id="pills-notyetpaid-tab" data-toggle="pill" data-target="#pills-notyetpaid" type="button" role="tab" aria-controls="pills-notyetpaid" aria-selected="false">
                      Not yet paid
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Packed-tab" data-toggle="pill" data-target="#pills-Packed" type="button" role="tab" aria-controls="pills-Packed" aria-selected="false">
                      Packed
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Sent-tab" data-toggle="pill" data-target="#pills-Sent" type="button" role="tab" aria-controls="pills-Sent" aria-selected="false">
                      Sent
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Completed-tab" data-toggle="pill" data-target="#pills-Completed" type="button" role="tab" aria-controls="pills-Completed" aria-selected="false">
                      Completed
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Ordercancel-tab" data-toggle="pill" data-target="#pills-Ordercancel" type="button" role="tab" aria-controls="pills-Ordercancel" aria-selected="false">
                      Ordercancel
                    </button>
                  </li>
                </ul>
                <hr />
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-Allitems" role="tabpanel" aria-labelledby="pills-Allitems-tab"></div>
                  <div className="tab-pane fade" id="pills-notyetpaid" role="tabpanel" aria-labelledby="pills-notyetpaid-tab">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, vero?
                  </div>
                  <div className="tab-pane fade" id="pills-Packed" role="tabpanel" aria-labelledby="pills-Packed-tab">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </div>
                  <div className="tab-pane fade" id="pills-Sent" role="tabpanel" aria-labelledby="pills-Sent-tab">
                    Lorem ipsum dolor sit .
                  </div>
                  <div className="tab-pane fade" id="pills-Completed" role="tabpanel" aria-labelledby="pills-Completed-tab">
                    Lorem ipsum adipisicing elit.
                  </div>
                  <div className="tab-pane fade" id="pills-Ordercancel" role="tabpanel" aria-labelledby="pills-Ordercancel-tab">
                    Lorem ipsum dolor sit amet consectetu elit.
                  </div>
                </div>
              </dir>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileSeler;
