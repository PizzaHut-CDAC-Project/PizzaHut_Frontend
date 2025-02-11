import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Header from "../Header/Header";
import URL from "../URL/Url";
import "./Orderdetails.css";

export default function Orderdetails() {
  const { state } = useLocation();
  const { cartId } = state;
  const navigate = useNavigate();

  const [orderdetail, setOrderdetail] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const getbycartid = () => {
    const url = `${URL}cart/${cartId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        setOrderdetail(result.data);
        console.log(result.data);
        addImageUrl(result.data);
      } else {
        toast.error(
          "Something Went wrong at our end. Don't worry, it will be fixed soon "
        );
      }
    });
  };
  const addImageUrl = (orderData) => {
    let imgArray = [];
    orderData.map((data) => {
      console.log("data ", data);
      console.log(data.itemsize.item.itemid);
      fetch(
        `${URL}/itemImage/getpizzathumbnail/${data.itemsize.item.itemid}`
      )
        .then((response) => response.arrayBuffer())
        .then((buffer) => {
          const blob = new Blob([buffer], { type: "image/jpeg" });
          console.log("URL", URL);
          const imageUrl = window.URL.createObjectURL(blob);
          console.log(imageUrl);
          imgArray.push(imageUrl);
          setImageUrl(imgArray);
          console.log(imageUrl);
        })
        .catch((exe) => {
          console.log(exe);
        });
    });
    console.log(imageUrl);
  };
  useEffect(() => {
    getbycartid();
  }, []);

  const loginstatus = sessionStorage.getItem("currentloginStatus");
  const loadCart = () => {
    window.scrollTo(0, 0);
    if (loginstatus != 1) {
      var btn = document.getElementById("payid");
      btn.disabled = true;
      toast.error("Please add some Items in Your Basket to proceed further");
    }
  };

  return (
    <div
      style={{ overflowX: "hidden" }}
      className="fixedcontent"
      onLoad={loadCart}
    >
      <Header />
      <br />
      <div style={{ backgroundColor: "whitesmoke" }}>
        <br />
        <div
          className=" container shadow-lg"
          style={{ backgroundColor: "white", minHeight: "500px" }}
        >
          <br />
          <div className="orderdetailContainer">
            {orderdetail.map((thisdetail, i) => (
              <div>
                <div className="row">
                  <div className="col">
                    <h4>Delivery Address Details</h4> <hr />
                    <div className="addresscontainer">
                      <h6>Plot No : {thisdetail.deliveryId.address.plotNo}</h6>
                      <h6>
                        Street Name : {thisdetail.deliveryId.address.streetName}
                      </h6>
                      <h6>City : {thisdetail.deliveryId.address.city}</h6>
                      <h6>
                        District : {thisdetail.deliveryId.address.district}
                      </h6>
                      <h6>
                        State : {thisdetail.deliveryId.address.soverignState}
                      </h6>
                      <h6>Pincode : {thisdetail.deliveryId.address.pincode}</h6>
                    </div>
                  </div>
                  <div className="col">
                    <h4>Payment Details</h4> <hr />
                    <div className="addresscontainer">
                      <h6>
                        Payment Id : {thisdetail.deliveryId.payments.payId}
                      </h6>
                      <h6>
                        Payment status :{" "}
                        {thisdetail.deliveryId.payments.payStatus}
                      </h6>
                      <h6>
                        Payment mode : {thisdetail.deliveryId.payments.mode}
                      </h6>
                    </div>{" "}
                    <hr />
                    <div className="addresscontainer">
                      <h6>
                        Delivery status :{thisdetail.deliveryId.deliveryStatus}
                      </h6>
                    </div>
                  </div>
                </div>
                <br />
                <h4>Order Details</h4> <hr />
                <div className="orderContainer shadow-lg">
                  <div style={{ padding: "0.3rem" }}>
                    <div className="row">
                      <div className="col">
                        <div className="imageBlock">
                          <center>
                            <img
                              src={imageUrl[i]}
                              alt=""
                              style={{
                                borderRadius: "20px",
                                width: "280px",
                                height: "200px",
                              }}
                            />
                          </center>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <h4
                              className="cartInfo"
                              style={{ marginLeft: "10%" }}
                            >
                              {thisdetail.itemsize.item.itemName}
                            </h4>
                          </div>
                          <div className="col">
                            <h4
                              className="cartInfo"
                              style={{ marginRight: "20px" }}
                            >
                              Rs. {thisdetail.price}
                            </h4>
                          </div>
                        </div>
                        <h6 className="cartInfo" style={{ color: "gray" }}>
                          {thisdetail.itemsize.item.type}
                        </h6>
                        <h6 className="cartInfo">
                          Size : {thisdetail.itemsize.size}
                        </h6>
                        <h6 className="cartInfo">
                          quantity : {thisdetail.quantity}
                        </h6>

                        <h6 className="cartInfo">
                          Delivery Status :{" "}
                          {thisdetail.deliveryId.deliveryStatus}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <button
                  className="btn btn-primary float-end"
                  onClick={() => navigate("/MyOrders")}
                >
                  Back
                </button>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
