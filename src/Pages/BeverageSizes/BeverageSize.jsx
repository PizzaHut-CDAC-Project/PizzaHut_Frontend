import axios from "axios";
import { Collapse } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import URL from "../URL/Url";
import "../ItemSize/Itemsize.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/ItemAction";

export default function BeverageSize() {
  const { state } = useLocation();
  const { itemid } = state;

  const [size, setsize] = useState([]);
  const getItemSize = () => {
    const url = `${URL}itemSize/${itemid}`;
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        setsize(result.data);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  useEffect(() => {
    getItemSize();
  }, []);

  function ChangeSize() {
    let change = document.getElementById("sizeChange").value;
    const url = `${URL}itemSize/${itemid}/${change}`;
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        setsize(result.data);
      } else {
        toast.error(result["error"]);
      }
    });
  }

  const dispatch = useDispatch();
  const Add2cart = (varioussize) => {
    dispatch(addToCart(varioussize));
  };

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const add2db = (varioussize) => {
    const sizeId = varioussize.sizeId;
    const userId = sessionStorage.getItem("currentuserId");
    const quantity = counter;
    const price = varioussize.price * quantity;
    const bodywithouttopping = {
      userId,
      sizeId,
      quantity,
      price,
    };
    const url = `${URL}cart/addWithoutToppings`;
    axios.post(url, bodywithouttopping).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        toast.success("Added to cart");
      } else {
        toast.error("Please Login to order your favourite Beverage");
      }
    });
  };

  return (
    <div
      style={{ overflowX: "hidden" }}
      className="fixedcontent"
      onLoad={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Header />
      <div style={{ backgroundColor: "whitesmoke" }}>
        <br />
        <div
          className="container"
          style={{ backgroundColor: "white", minHeight: "500px" }}
        >
          <div className="hello">
            {size.map((varioussize) => (
              <div>
                <br />
                <br />
                <div>
                  <div className="row">
                    <div className="col">
                      <center>
                        <motion.img
                          src={
                            URL +
                            "itemImage/getpizzathumbnail/" +
                            varioussize.item.itemid
                          }
                          alt="itemImage"
                          className="shadow img-thumbnail"
                          style={{
                            height: "380px",
                            width: "480px",
                            borderRadius: "10px",
                            minWidth: "350px",
                          }}
                          whileHover={{ scale: 1.03 }}
                        />
                      </center>
                    </div>
                    <div className="col">
                      <div>
                        <motion.button
                          className="float-end addCartbtn"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{
                            scale: 1,
                            backgroundColor: "rgb(255, 86, 86)",
                          }}
                          onClick={() => {
                            Add2cart(varioussize);
                            add2db(varioussize);
                          }}
                        >
                          Add To Cart
                        </motion.button>
                      </div>
                      <h1>{varioussize.item.itemName} </h1>
                      <h4 style={{ color: "gray" }}>{varioussize.item.type}</h4>
                      <h5>
                        Description: <br />
                        {varioussize.item.description}
                      </h5>
                      <h5>Size : {varioussize.size}</h5>
                      <h5>Price : {varioussize.price} Rs.</h5>
                      <hr />
                      {/* <h6>Other Sizes</h6> */}
                      <div className="form" id="">
                        {/* <div className="row">
                          <div className="col">
                            <select
                              name="sizeChange"
                              id="sizeChange"
                              style={{ width: "200px" }}
                            >
                              <option value="200ml">200ml</option>
                              <option value="500ml">500ml</option>
                              <option value="750ml">750ml</option>
                            </select>
                          </div>
                          <div className="col" id="buttoninComp">
                            <button id="changeBtn" onClick={ChangeSize}>
                              Select Size
                            </button>
                          </div>
                        </div>{" "}
                        <br /> */}
                        <div className="row">
                          <h5>Quantity</h5>
                          <div className="col">
                            <input
                              type="number"
                              value={counter}
                              style={{ width: "200px" }}
                            />
                          </div>
                          <div className="col">
                            <h5>
                              <button onClick={incrementCounter}>+</button>
                              <span style={{ margin: "10px" }}>{counter}</span>
                              <button onClick={decrementCounter}>-</button>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div>
            ))}
          </div>
          <br />
        </div>{" "}
        <br />
      </div>
    </div>
  );
}
