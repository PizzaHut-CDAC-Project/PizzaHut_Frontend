import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import CartComp from '../../Component/CartComp/CartComp'
import Header from '../Header/Header'
import API_URL from '../URL/Url'
import './Cart.css'

export default function Cart() {
    const navigate = useNavigate()

    const { currentuserId } = sessionStorage
    const [cart, setcart] = useState([])
    const getCartItem = () => {
        const status=1;
        const url = `${API_URL}cart/${currentuserId}/${status}`
        axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            if (result.status === 'success') {
                setcart(result.data)
            } else {
                var btn = document.getElementById("payid")
                btn.disabled = true
                toast.error("Please add some Items in Your Basket to proceed further")
            }
        })
    }

    useEffect(() => {
        getCartItem()
    }, [])

    const [total, settotal] = useState(0)
    const TotalAmount = () => {
        let i = 0;
        cart.forEach(item => {
            i = i + item.price;
        })
        settotal(i)
        return <span>{i}</span>
    }

    const loginstatus = sessionStorage.getItem("currentloginStatus")
    const loadCart = () => {
        window.scrollTo(0, 0)
        if (loginstatus != 1) {
            var btn = document.getElementById("payid")
            btn.disabled = true
            toast.error("Please add some Items in Your Basket to proceed further")
        }
    }
    return (
        <div style={{ overflowX: "hidden" }} className='fixedcontent' onLoad={loadCart}>
            <Header />
            <br />
            <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
                <div className=' container shadow-lg' style={{ backgroundColor: "white", minHeight: "500px" }}>
                    <br />
                    <div>
                        <h2 style={{ marginLeft: "6%" }}>My Basket</h2> <hr />
                        <br />
                        <div>
                            {cart.map((thiscart) => {
                                console.log(thiscart)
                                return <CartComp cartComps={thiscart} />
                            })}
                        </div>
                    </div>
                    <div style={{ textAlign: "right", marginRight: "10%" }}>
                        <h1 className='amountInfo'>Total : {<TotalAmount />} Rs</h1>
                        <motion.button className='btn btn-primary btn-lg payBtn ' id='payid'
                            onClick={() => (navigate('/payments', { state: { totalPay: total } }))}
                        >Proceed to Buy</motion.button>
                    </div>
                    <br />
                </div>
                <br />
            </div>
        </div>
    )
}

// cartId: 6
// itemsize:(sizeid)
//     item:
//         description: "pizza, dish of Italian origin consisting of a flattened disk of bread dough"
//          itemName: "Momo Mia Pizza"
//          itemid: 1
//         type: "Veg"
//     price: 150
//     size: "Small"
//     sizeId: 1

// price: 525 (price)
// quantity: 3 (quantity)
// toppings: (toppingid)
//     price: 25
//     toppingId: 1
//     toppingName: "faltu"

// user: (useriD)
//     email: "w@g.com"
//     firstName: "Bhushan"
//     lastName: "Baviskar"
//     password: "333333"
//     phoneNo: "1212121212"
//     role: "User"
//     userId: 3