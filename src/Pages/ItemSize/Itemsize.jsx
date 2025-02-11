import axios from "axios";
import { Collapse } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import API_URL from '../URL/Url'
import "./Itemsize.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/ItemAction";

export default function Itemsize() {
  const { state } = useLocation();
  const { itemid } = state;
  const [open, setOpen] = useState(false);

  const [size, setsize] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  var itemsize = "regular";

  const sizeHandler = (event) => {
    itemsize = event.target.value;
    getItemSize();
  };
  const getItemSize = () => {
    console.log("size" + itemsize);
    const url = `${API_URL}itemSize/${itemid}`;
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

  const [topping, settopping] = useState([]);
  const getToppings = () => {
    const url = `${API_URL}toppings/showAll`;
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        settopping(result.data);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  useEffect(() => {
    getItemSize();
    getToppings();
  }, []);

  useEffect(() => {
    const itemId = itemid;
    console.log(itemId);
    fetch(`${API_URL}itemImage/getpizzathumbnail/${itemId}`)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const blob = new Blob([buffer], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
      });
  }, [state]);

  // function ChangeSize() {
  //     let change = document.getElementById("sizeChange").value
  //     const url = `http://localhost:7071/itemSize/${itemid}/${change}`
  //     axios.get(url).then((response) => {
  //         const result = response.data
  //         console.log(result)
  //         if (result.status === "success") {
  //             setsize(result.data)
  //         } else {
  //             toast.error(result['error'])
  //         }
  //     })
  // }

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

  const [topping_Id, settoppingId] = useState("");
  const [topping_price, settoppingprice] = useState("");
  const addtopping = (thisTopping) => {
    settoppingId(thisTopping.toppingId);
    settoppingprice(thisTopping.price);
    console.log(topping_Id + " topping " + topping_price);
  };

  const add2db = (varioussize) => {
    const sizeId = varioussize.sizeId;
    const userId = sessionStorage.getItem("currentuserId");
    const quantity = counter;
    const toppingId = topping_Id;
    const toppingprice = topping_price;
    const price = (varioussize.price + toppingprice) * quantity;
    const bodywithtopping = {
      userId,
      sizeId,
      toppingId,
      quantity,
      price,
    };
    const bodywithouttopping = {
      userId,
      sizeId,
      quantity,
      price,
    };
    console.log("varioussize" + varioussize);
    console.log(varioussize);
    if (toppingId === "") {
      const url = `${API_URL}cart/addWithoutToppings`;
      axios.post(url, bodywithouttopping).then((response) => {
        const result = response.data;
        console.log(result);
        if (result.status === "success") {
          toast.success("Added to cart");
        } else {
          toast.error("Please Login to order your favourite Pizza");
        }
      });
    } else {
      const url = `${API_URL}cart/addWithToppings`;
      axios.post(url, bodywithtopping).then((response) => {
        const result = response.data;
        console.log(result);
        if (result.status === "success") {
          toast.success("Added to cart");
        } else {
          toast.error("Please Login to order your favourite Pizza");
        }
      });
    }
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
      <br />
      <div style={{ backgroundColor: "whitesmoke" }}>
        <br />
        <div
          className="container"
          style={{ backgroundColor: "white", minHeight: "500px" }}
        >
          <div>
            {size.map((varioussize) => (
              <div>
                <br />
                <br />
                <div>
                  <div className="row">
                    <div className="col">
                      <center>
                        <motion.img
                          src={imageUrl}
                          alt="itemImage"
                          className="shadow img-thumbnail"
                          style={{
                            height: "380px",
                            width: "480px",
                            borderRadius: "10px",
                            minWidth: "350px",
                            marginBottom: "2%",
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
                              onChange={sizeHandler}
                              id="sizeChange"
                              style={{ width: "200px" }}
                            >
                              <option value="Regular">Regular</option>
                              <option value="small">Small</option>
                              <option value="large">Large</option>
                            </select>
                          </div>
                        </div> */}
                        <div className="col">
                          <h6>Quantity</h6>
                        </div>
                        <div className="row">
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
                      <span>
                        <p>
                          <b>Note:</b> Only one topping can be added
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div>
            ))}
          </div>
          <div className="">
            <center>
              <Button
                className="collapseBtn"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <h5>Add Topping</h5>
              </Button>
            </center>
            <Collapse in={open}>
              <div id="example-collapse-text" style={{ marginLeft: "150px" }}>
                <hr />
                <div className="row toppingRow">
                  <div className="col">
                    <h6>Topping Name</h6>
                  </div>
                  <div className="col">
                    <h6>price (Rs)</h6>
                  </div>
                  <div className="col">
                    <h6>Add🍕</h6>
                  </div>
                </div>
                <hr />
                {topping.map((thisTopping) => (
                  <div>
                    <div className="row toppingRow" id="toppingSelected">
                      <div className="col">{thisTopping.toppingName}</div>
                      <div className="col">{thisTopping.price} Rs</div>
                      <div className="col">
                        <button
                          className="btn btn-link addLink"
                          id={thisTopping.toppingId}
                          onClick={() => {
                            addtopping(thisTopping);
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Collapse>
          </div>{" "}
          <br />
        </div>{" "}
        <br />
      </div>
    </div>
  );
}
