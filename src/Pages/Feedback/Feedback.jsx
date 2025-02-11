import React, { useState } from 'react'
import logo from '../../images/colorLogo.png'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import './Feedback.css'
import { toast } from 'react-toastify'
import URL from '../URL/Url'
import axios from 'axios'
import menu from "../../images/menu.png"

export default function Feedback() {
    const navigate = useNavigate()
    const [firstName,setfirstName] = useState('')
    const [lastName,setlastName] = useState('')
    const [email,setemail] = useState('')
    const [phoneNo,setPhoneNumber] = useState('')
    const [feedback,setfeedback] = useState('')

    const loginstatus = sessionStorage.getItem('currentloginStatus')

    const giveFeedback=()=>{
        if(firstName.length ===0){
            toast.error("Please Enter First name")
        }else if(lastName.length ===0){
            toast.error("Please Enter Last name")
        }else if(email.length ===0){
            toast.error("Please Enter email name")
        }else if(phoneNo.length !== 10){
            toast.error("Please Enter valid Mobile Number")
        }else if(feedback.length ===0){
            toast.error("Please Enter Feedback")
        }else{
            const body={
                firstName,lastName,email,phoneNo,feedback
            }
            const url = `${URL}feedback/addFeedback`
            axios.post(url,body).then((response)=>{
                const result = response.data
                console.log(result)
                if(result.status === 'success'){
                    toast.success('Thanks for your Valuable Feedback')
                    if(loginstatus == 1){
                        navigate('/pizza')
                    }else{
                        navigate('/')
                    }
                }else{
                    toast.error("Something went wrong. Please try again")
                }
            })
        }
    }

    return (
        <div onLoad={() => { window.scrollTo(0, 0) }}>
             <div className="row shadow sticky-top"  >
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand"><img src={logo} alt="" id='headerlogoProfile' onClick={()=>(navigate('/'))} style={{cursor:"pointer"}}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
                                                    <span className="navbar-toggler-icon" style={{ backgroundColor: "white" }}><img src={menu} width="30px" /></span>
                                                </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
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
                            </ul>

                        </div>
                    </div>
                </nav>
            </div >
            <br />
            <div className='fixedcontent'>
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <br />
                    <div className='container shadow-lg feedImg'>
                        <br />
                        <h4>Your feedback is Most Valuable for us !!</h4>
                        <hr />
                        <div className='feedbackContainer'>
                            <div className="form feedForm">
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="" className="label-control">First Name</label>
                                            <input onChange={e=>{
                                                setfirstName(e.target.value)
                                            }}
                                            type="text" className="form-control shadow active" style={{borderRadius:"100px"}} placeholder='John' />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="" className="label-control">Last Name</label>
                                            <input onChange={e=>{
                                                setlastName(e.target.value)
                                            }}
                                            type="text" className="form-control shadow" placeholder='Smith' style={{borderRadius:"100px"}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="label-control">Email</label>
                                    <input onChange={e=>{
                                        setemail(e.target.value)
                                    }}
                                    type="email" className="form-control shadow" placeholder='abc@xyz.com' style={{borderRadius:"100px"}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="label-control">Mobile Number</label>
                                    <input onChange={e=>{
                                        setPhoneNumber(e.target.value)
                                    }} 
                                    minLength={10} maxLength={10}
                                    type="number" className="form-control shadow" placeholder='9988776655' style={{borderRadius:"100px"}}/>
                                </div>
                                <div>Add Your Feedback</div>
                                <div>
                                    <textarea onChange={e=>{
                                        setfeedback(e.target.value)
                                    }}
                                        name="" id="commentarea" cols="30" rows="3.5" className="form-control shadow"  style={{borderRadius:"20px"}} placeholder=''>
                                    </textarea>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <motion.button className='feedBtn float-end'
                                            whileHover={{ backgroundColor: "rgb(0, 0, 0)", color:"white" }}
                                            onClick={giveFeedback}
                                        >Add feedback</motion.button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
