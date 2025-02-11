import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import URL from "../URL/Url";
import "./Payments.css";

export default function Payments(props) {
  const { state } = useLocation();
  const { totalPay } = state;
  const navigate = useNavigate();

  const [fullName, setfullName] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [expiry, setexpiry] = useState("");
  const [cvv, setcvv] = useState("");

  const { currentuserId } = sessionStorage;
  const [addresspay, setAddresspay] = useState([]);
  var deliveryId;
  const getAddress = () => {
    const url = `${URL}address/getaddress/${currentuserId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        setAddresspay(result.data);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  useEffect(() => {
    getAddress();
  }, []);

  const [addresspayId, setAddresspayId] = useState([]);
  const selectedAddress = (add) => {
    setAddresspayId(add.addressId);
  };

  const userId = sessionStorage.getItem("currentuserId");
  // const paymentDone = () => {
  //     if (addresspayId.length == 0) {
  //         toast.error("Select address for Delivery")
  //     } else if (fullName.length === 0) {
  //         toast.error("Invalid full Name")
  //     } else if (cardNumber.length !== 16) {
  //         toast.error("Invalid card Number")
  //     } else if (expiry.length !== 7) {
  //         toast.error("Invalid expiry date of your card")
  //     } else if (cvv.length !== 3) {
  //         toast.error("Invalid CVV")
  //     } else {
  //         const url = `${URL}payment/addPayment`
  //         const body = { userId, addresspayId }
  //         axios.post(url, body).then((response) => {
  //             const result = response.data

  //             deliveryId =result.data.deliveryId;
  //             console.log("result ch "+result.data.deliveryId)
  //             console.log(" near addpayment"+deliveryId)
  //             console.log("int payment delivery"+deliveryId)
  //             if (result.status === 'success') {
  //                 toast.success("Payment Completed")
  //             }
  //         })
  //         console.log("it works")
  //         console.log("near patch"+deliveryId)
  //         const url2 = `${URL}cart/updateCartStatus/${userId}/${deliveryId}`
  //         // const url2 = `${URL}cart/updateCartStatus/${userId}`
  //         // const body2 = { userId }
  //         axios.patch(url2).then((response) => {
  //             const result = response.data
  //             console.log("inside patch"+result)
  //             if (result.status === 'success') {
  //                 toast.success('Order some more Pizzas')
  //                 navigate('/item')
  //             }
  //         })
  //     }

  // }
  const paymentDone = async () => {
    try {
      if (addresspayId.length === 0) {
        toast.error("Select address for Delivery");
      } else if (fullName.length === 0) {
        toast.error("Invalid full Name");
      } else if (cardNumber.length !== 16) {
        toast.error("Invalid card Number");
      } else if (expiry.length !== 7) {
        toast.error("Invalid expiry date of your card");
      } else if (cvv.length !== 3) {
        toast.error("Invalid CVV");
      } else {
        const paymentUrl = `${URL}payment/addPayment`;
        const paymentBody = { userId, addresspayId };
        const paymentResponse = await axios.post(paymentUrl, paymentBody);
        const paymentResult = paymentResponse.data;

        const deliveryId = paymentResult.data.deliveryId;
        console.log("result ch " + paymentResult.data.deliveryId);
        console.log(" near addpayment" + deliveryId);
        console.log("int payment delivery" + deliveryId);
        if (paymentResult.status === "success") {
          toast.success("Payment Completed");
        }

        console.log("it works");
        console.log("near patch" + deliveryId);
        const patchUrl = `${URL}cart/updateCartStatus/${userId}/${deliveryId}`;
        const patchResponse = await axios.patch(patchUrl);
        const patchResult = patchResponse.data;
        console.log("inside patch" + patchResult);
        if (patchResult.status === "success") {
          toast.success("Order some more Pizzas");
          navigate("/item");
        }
      }
    } catch (error) {
      // handle error
      console.error(error);
    }
  };

  return (
    <div
      onLoad={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Header />
      <br />
      <div className="container p-0 fixedcontent">
        <br />
        <br />
        <div className="payDetail">
          <h4>Enter Your Payments Details</h4> <hr />
          <div className="row">
            <div className="col payaddresscontainer">
              <center>
                <h3>Select Address for Delivery</h3>
              </center>
              {addresspay.map((add) => (
                <>
                  {" "}
                  <br />
                  <div className="address-box">
                    <div
                      className="address"
                      style={{ backgroundColor: "white" }}
                    >
                      {add.plotNo}, {add.streetName}, {add.city}, {add.district}
                      , {add.state} - {add.pincode} <br />
                      <motion.button
                        className="float-end thisAddress"
                        onClick={() => selectedAddress(add)}
                        whileHover={{
                          scale: 1.03,
                          backgroundColor: "black",
                          color:"white"
                        }}
                        whileTap={{ scale: 1 }}
                      >
                        Delivery to this Address
                      </motion.button>
                      <br />
                    </div>
                  </div>
                  <br />
                </>
              ))}
            </div>
            <div className="col">
              <button
                className="btn btn-link float-end cancelLink"
                onClick={() => navigate("/cart")}
              >
                cancel order and go back to website
              </button>
              <br />
              <br />
              <div className="payContainer shadow-lg">
                <div className="form">
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      Enter Full Name
                    </label>
                    <input
                      onChange={(e) => {
                        setfullName(e.target.value);
                      }}
                      type="text"
                      className="form-control shadow-sm form-input"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      Enter Card Number
                    </label>
                    <input
                      onChange={(e) => {
                        setcardNumber(e.target.value);
                      }}
                      type="number"
                      className="form-control shadow-sm form-input"
                      placeholder="1234-1234-1234-1234"
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="" className="label-control">
                        Expiry of Card
                      </label>
                      <input
                        onChange={(e) => {
                          setexpiry(e.target.value);
                        }}
                        type="text"
                        className="form-control shadow-sm form-input"
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="" className="label-control">
                        Enter CVV
                      </label>
                      <input
                        onChange={(e) => {
                          setcvv(e.target.value);
                        }}
                        type="password"
                        className="form-control shadow-sm form-input"
                        placeholder="***"
                      />
                    </div>
                  </div>{" "}
                  <br />
                  <div>
                    <button className="finalPay" onClick={paymentDone}>
                      Pay {totalPay} Rs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
