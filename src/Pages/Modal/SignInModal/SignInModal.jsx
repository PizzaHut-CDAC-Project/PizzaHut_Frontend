import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Backdrop from '../BackDrop/Backdrop'
import URL from '../../URL/Url'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

export default function SignInModal({ handclose }) {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const SignIn = () => {
        const body = {
            email, password
        }
        const url = `${URL}user/signin`
        axios.post(url, body).then((response) => {
            const result = response.data
            console.log(result)
            if (result['status'] == 'success') {
                const { userId, firstName, lastName, email, phoneNo } = result.data
                sessionStorage['currentuserId'] = userId
                sessionStorage['currentfirstName'] = firstName
                sessionStorage['currentlastName'] = lastName
                sessionStorage['currentemail'] = email
                sessionStorage['currentphoneNo'] = phoneNo
                sessionStorage['currentloginStatus'] = 1
                navigate('/pizza')
                toast.success("Logged in successfully")
            } else {
                toast.error(result['error'])
            }
        })
    }
    const dropin = {
        hidden: {
            y: "-100vh",
            opacity: 0,
        },
        visible: {
            y: "0vh",
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 30,
                // stiffness: 500,
            },
        },
        exit: {
            y: "100vh",
            opacity: 0
        },
    }

    return (
        <Backdrop onClick={handclose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={dropin}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className='signInInfo'>
                    <br />
                    <h4>Sign In Here !!!</h4>
                    <div className="form">
                        <form action="JavaScript:SignIn()">
                            <div className="mb-3">
                                <label className="label-control">Email</label>
                                <input onChange={e => (
                                    setemail(e.target.value)
                                )}
                                    required="true" type="email" className="form-control shadow" />
                            </div>

                            <div className="mb-3">
                                <label className="label-control">Password</label>
                                <input onChange={e => (
                                    setPassword(e.target.value)
                                )}
                                    minLength="5" maxLength="10"
                                    required="true" type="password" className="form-control shadow" />
                            </div>

                            <div>
                                <h6 style={{ color: "grey" }}>All Rights reserved with @PizzaTech</h6>
                            </div>
                            <div className="col">
                                <motion.button className='float-end UpBtn'
                                    whileHover={{ backgroundColor: "rgb(7, 84, 133)", color: "white" }}
                                    onClick={SignIn}
                                >Submit</motion.button>
                            </div>
                        </form>
                    </div>
                    <br /><br /><br />
                </div>
            </motion.div>
        </Backdrop>
    )
}
