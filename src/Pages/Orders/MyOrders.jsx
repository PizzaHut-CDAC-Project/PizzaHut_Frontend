import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import URL from '../URL/Url'
import { useNavigate } from "react-router";

export default function MyOrders() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [mapDetail, setMapDetails] = useState();

  const { currentuserId } = sessionStorage;
  const [cart, setcart] = useState([]);
  const getCartItem = () => {
    const url = `/${URL}/cart/${currentuserId}/0`;
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        setcart(result.data);
      } else {
        toast.error("No orders Yet, Go ahead And place one !");
      }
    });
  };

  const addImage = (itemId) => {
    console.log(itemId);
    fetch(`http://localhost:7071/itemImage/getpizzathumbnail/${itemId}`)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const blob = new Blob([buffer], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
      });

    console.log(imageUrl);
    return (
      <img
        src={imageUrl}
        alt=""
        style={{
          marginLeft: "10px",
          borderRadius: "20px",
          width: "150px",
          height: "150px",
        }}
      />
    );
    // return  imageUrl
  };
  useEffect(() => {
    getCartItem();
  }, []);

  return (
    <div>
      <Header />
      <hr />
      <div className="fixedcontent">
        <br />
        <br />
        <div className="container" style={{ minHeight: "500px" }}>
          <h2>My Orders</h2> <hr />
          {cart.map((cartComps) => (
            <div>
              <div className="tableContainer shadow">
                <div style={{ padding: "1rem" }}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="imageBlock col-md-4 col-sm-6">
                            {/* <img src={URL + 'itemImage/add/' + cartComps.itemsize.item.itemid} alt="" style={{ marginLeft: "10px", borderRadius: "20px", width: "150px", height: "150px" }} /> */}
                            {addImage(cartComps.itemsize.item.itemid)}
                          </div>
                        </td>
                        <td style={{ width: "600px" }}>
                          <div className="row">
                            <div className="col">
                              <h4
                                className="cartInfo"
                                style={{ marginLeft: "10%" }}
                              >
                                {cartComps.itemsize.item.itemName}
                              </h4>
                            </div>
                            <div className="col">
                              <h4
                                className="cartInfo"
                                style={{ marginRight: "20px" }}
                              >
                                Rs. {cartComps.price}
                              </h4>
                            </div>
                          </div>
                          <h6 className="cartInfo" style={{ color: "gray" }}>
                            {cartComps.itemsize.item.type}
                          </h6>
                          <h6 className="cartInfo">
                            Size : {cartComps.itemsize.size}
                          </h6>
                          <h6 className="cartInfo">
                            quantity : {cartComps.quantity}
                          </h6>

                          <h6 className="cartInfo">
                            Delivery Status :{" "}
                            {cartComps.deliveryId.deliveryStatus}
                          </h6>
                          <h6 className="cartInfo">
                            <a
                              style={{ color: "blue", cursor: "pointer" }}
                              onClick={() =>
                                navigate("/orderDetails", {
                                  state: { cartId: cartComps.cartId },
                                })
                              }
                            >
                              View Details
                            </a>
                          </h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
