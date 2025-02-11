import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import logo from '../../images/colorLogo.png'
import URL from '../URL/Url'
import './Sign.css'
import menu from '../../images/menu.png'

export default function Signin() {
    const scroolUp = () => {
        window.scrollTo(0, 0)
    }

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
                navigate('/item')
                toast.success("Logged in successfully")
            } else {
                toast.error(result['error'])
            }
        })
    }
    return (
        <motion.div style={{ overflowX: "hidden" }} onLoad={scroolUp} className='fixedcontent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="row shadow sticky-top"  >
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand"><img src={logo} alt="" id='headerlogoProfile' onClick={() => (navigate('/'))} style={{cursor:"pointer"}}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
                            <span className="navbar-toggler-icon" style={{ backgroundColor: "white" }}><img src={menu} width="30px" /></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={() => (navigate('/pizza'))} id='headerBtn'>Pizzas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => (navigate('/Vegpizza'))} id='headerBtn'>Veg pizzas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => (navigate('/beverages'))} id='headerBtn'>Drinks</a>
                                </li>
                                <li>

                                </li>
                            </ul>
                            <div className=''>
                                <motion.button className='btn btn-primary SignButton'
                                    style={{ backgroundColor: "white", color: "black" }}
                                        whileTap={{ backgroundColor: "rgb(62, 62, 62)", color: "black" }}
                                    onClick={() => (navigate('/signin'))}
                                >Sign In</motion.button>
                            </div>
                            <div className=''>
                                <motion.button className='btn btn-primary SignButton float-start'
                                    style={{ backgroundColor: "white", color: "black" }}
                                    whileTap={{ backgroundColor: "rgb(62, 62, 62)", color: "black" }}
                                    onClick={() => (navigate('/signup'))}
                                >Sign up</motion.button>
                            </div>

                        </div>
                    </div>
                </nav>
            </div >


            <br />
            <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
                <div className='container' style={{ backgroundColor: "white", minHeight: "300px" }}>
                    <br />
                    <center><h3>Sign In</h3></center> <hr />
                    <div className='row form-div '>
                        <div className="col">
                            <center><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2281&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{ marginTop: "2%",width:"60%"}} /></center>
                        </div>
                        <div className="col" style={{ padding: "1rem" }}>
                            <div className="form">
                                <form action="JavaScript:SignIn()">
                                    <div className="mb-3">
                                        <label className="label-control">Email</label>
                                        <input onChange={e => (
                                            setemail(e.target.value)
                                        )}
                                            required="true" type="email" className="form-control shadow form-input" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="label-control">Password</label>
                                        <input onChange={e => (
                                            setPassword(e.target.value)
                                        )}
                                            minLength="5" maxLength="10"
                                            required="true" type="password" className="form-control shadow form-input" />
                                    </div>
                                    <div>
                                        <h6>No account yet ? <a style={{ color: "blue", cursor: "pointer" }} onClick={() => (navigate('/signup'))}>Sign Up</a></h6>
                                    </div>
                                    <div className="col">
                                        <motion.button className='float-end UpBtn'
                                            whileHover={{ backgroundColor: "rgb(17, 127, 0)", color: "white" }}
                                            onClick={SignIn}
                                        >Submit</motion.button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </motion.div>
    )
}
