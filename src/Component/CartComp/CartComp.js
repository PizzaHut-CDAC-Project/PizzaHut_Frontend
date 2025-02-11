import React, { useEffect, useState } from "react";
import API_URL from '../../Pages/URL/Url'
import "./CartComp.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/ItemAction";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function CartComp(props) {
  const { cartComps } = props;
  const [imageUrl, setImageUrl] = useState(null);
  // let imageUrl = `${URL}itemImage/item/${cartComps.itemsize.item.itemid}`

  useEffect(() => {
    const itemId = cartComps.itemsize.item.itemid;
    console.log(itemId);
    fetch(`${API_URL}itemImage/getpizzathumbnail/${itemId}`)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const blob = new Blob([buffer], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
      });
  }, []);

  const dispatch = useDispatch();
  const remove = (cartcompredux) => {
    dispatch(removeFromCart(cartcompredux));
  };
  const navigate = useNavigate();

  const removefromDB = (cartComp) => {
    const cartId = cartComp.cartId;
    const url = `${API_URL}cart/deleteById/${cartId}`;
    axios.delete(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        navigate(0);
      }
    });
  };
  return (
    <div>
      <div className="tableContainer">
        <div style={{ padding: "1rem" }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="imageBlock col-md-4 col-sm-6">
                    <img
                      src={imageUrl}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        borderRadius: "20px",
                        width: "170px",
                        height: "170px",
                      }}
                    />
                  </div>
                </td>
                <td style={{ width: "600px" }}>
                  <div className="row">
                    <div className="col">
                      <h4 className="cartInfo" style={{ marginLeft: "10%" }}>
                        {cartComps.itemsize.item.itemName}
                      </h4>
                    </div>
                    <div className="col">
                      <h4
                        className="cartInfo float-end"
                        style={{ marginRight: "20px" }}
                      >
                        Rs. {cartComps.price}
                      </h4>
                    </div>
                  </div>
                  <h6 className="cartInfo" style={{ color: "gray" }}>
                    {cartComps.itemsize.item.type}
                  </h6>
                  <h6 className="cartInfo">Size : {cartComps.itemsize.size}</h6>
                  <div className="col">
                    <h6 className="cartInfo">
                      quantity : {cartComps.quantity}
                    </h6>
                    <h6 className="cartInfo">Rs. {cartComps.itemsize.price}</h6>
                    <motion.button
                      className="removebtn"
                      onClick={() => {
                        remove(cartComps);
                        removefromDB(cartComps);
                      }}
                      whileHover={{
                        scale: 1.03,
                        backgroundColor: "rgb(255, 0, 0)",
                      }}
                      whileTap={{ scale: 1, backgroundColor: "rgb(255, 0, 0)" }}
                    >
                      Remove
                    </motion.button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <br /><br /> */}
      <hr />
    </div>
  );
}

// style={{ marginLeft: "10px", borderRadius: "20px", width: "300px", height: "200px" }}

// cartId: 6
// itemsize:(sizeid)
//     item:
//         description: "pizza, dish of Italian origin consisting of a flattened disk of bread dough"
//          itemName: "Momo Mia Pizza" *****
//          itemid: 1
//         type: "Veg" *****
//     price: 150
//     size: "Small"
//     sizeId: 1

// price: 525 (price) ******
// quantity: 3 (quantity) *****
// toppings: (toppingid)
//     price: 25
//     toppingId: 1
//     toppingName: "faltu" ******

// user: (useriD)
//     email: "w@g.com"
//     firstName: "Bhushan"
//     lastName: "Baviskar"
//     password: "333333"
//     phoneNo: "1212121212"
//     role: "User"
//     userId: 3
