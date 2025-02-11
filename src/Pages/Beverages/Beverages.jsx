import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../ProfilePage/ProfilePage.css'
import axios from 'axios'
import Header from '../Header/Header'
import URL from '../URL/Url'
import BeveragesComp from '../../Component/Beverages/BeveragesComp'

export default function Beverages() {
    const scroolUp = () => {
        window.scrollTo(0, 0)
    }

    const [item, setitem] = useState([])
    const getItem = () => {
        const url = `${URL}item/bytype/beverages`
        axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            if (result.status == 'success') {
                setitem(result.data)
            }
        })
    }


    useEffect(() => {
        getItem()
    }, [])

    return (
        <motion.div style={{ overflowX: "hidden" }} onLoad={scroolUp} className='fixedcontent'
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.3}}
        >
            <Header />
            <br/>
            <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
                <div className='container' style={{ backgroundColor: "white", minHeight:"500px" }}>
                    <br />
                    <center><h3>Recommended Drinks to Quench Thirst🥤</h3></center> <hr />
                    <div className='row' style={{ padding: "2rem" }}>
                        {item.map((peritem) => {
                            return <BeveragesComp itemComp={peritem} />
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}