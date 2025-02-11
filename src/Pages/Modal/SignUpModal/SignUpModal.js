import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import URL from '../../URL/Url'
import Backdrop from '../BackDrop/Backdrop'

export default function SignUpModal({ handclose }) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setemail] = useState('')
    const [phoneNo, setphoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [role, setrole] = useState('User')

    const SignUp = () => {
        if (password != ConfirmPassword) {
            toast.error("Please confirm password")
        } else {
            const body = {
                firstName, lastName, email, phoneNo, password, role
            }
            const url = `${URL}user/signup`
            axios.post(url, body).then((response) => {
                const result = response.data
                console.log(result);
                if (result.status == "success"){
                    handclose()
                    toast.success("Registered Successfully")
                }else{
                    toast.error(result['error'])
                }
            })
        }
    }

    const dropin = {
        hidden: {
            x: "150vh",
            opacity: 0,
        },
        visible: {
            x: "128vh",
            opacity: 1,
            transition: {
                duration: 0.4,
                type: "spring",
                damping: 15,
                // stiffness: 500,
            },
        },
        exit: {
            x: "150vh",
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
                <div className='signUpInfo'>
                    <h4>Sign Up for free !!!</h4>
                    <div className="form">
                        <form action="JavaScript:SignUpasd()">
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="label-control">First Name</label>
                                        <input onChange={e => (
                                            setFirstName(e.target.value)
                                        )}
                                            required="true" type="text" className="form-control shadow" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="label-control">Last Name</label>
                                        <input onChange={e => (
                                            setLastName(e.target.value)
                                        )}
                                            required="true" type="text" className="form-control shadow" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="label-control">Email</label>
                                <input onChange={e => (
                                    setemail(e.target.value)
                                )}
                                    required="true" type="email" className="form-control shadow" />
                            </div>
                            <div className="mb-3">
                                <label className="label-control ">Phone Number   (excluding postal code)</label>
                                <input onChange={e => (
                                    setphoneNumber(e.target.value)
                                )}
                                    maxLength="10" minLength="10"
                                    required="true" type="tel" className="form-control shadow" />
                            </div>
                            <div className="mb-3">
                                <label className="label-control">Password</label>
                                <input onChange={e => (
                                    setPassword(e.target.value)
                                )}
                                    minLength="5" maxLength="10"
                                    required="true" type="password" className="form-control shadow" />
                            </div>
                            <div className="mb-3">
                                <label className="label-control">Confirm Password</label>
                                <input onChange={e => (
                                    setConfirmPassword(e.target.value)
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
                                    onClick={SignUp}
                                >Submit</motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </Backdrop>
    )
}
