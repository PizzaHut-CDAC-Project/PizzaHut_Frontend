// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useNavigate } from 'react-router'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import logo from '../../images/colorLogo.png'
// import signupImg from '../../images/SignUpimg.jpg'
// import URL from '../URL/Url'
// import '../Signin/Sign.css'

// export default function Signup() {
//     const scroolUp = () => {
//         window.scrollTo(0, 0)
//     }

//     const navigate = useNavigate()
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setemail] = useState('')
//     const [phoneNo, setphoneNumber] = useState('')
//     const [password, setPassword] = useState('')
//     const [ConfirmPassword, setConfirmPassword] = useState('')
//     const [role, setrole] = useState('User')

//     const SignUp = () => {
//         if (password != ConfirmPassword) {
//             toast.error("Please confirm password")
//         } else {
//             const body = {
//                 firstName, lastName, email, phoneNo, password, role
//             }
//             const url = `${URL}user/signup`
//             axios.post(url, body).then((response) => {
//                 const result = response.data
//                 console.log(result);
//                 if (result.status == "success") {
//                     toast.success("Registered Successfully")
//                     navigate('/signin')
//                 } else {
//                     toast.error(result['error'])
//                 }
//             })
//         }
//     }
//     return (
//         <motion.div style={{ overflowX: "hidden" }} onLoad={scroolUp} className='fixedcontent'
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//         >
//             <div className="row shadow sticky-top"  >
//                 <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "darkslateblue" }}>
//                     <div className="container-fluid">
//                         <a className="navbar-brand"><img src={logo} alt="" id='headerlogoProfile' onClick={() => (navigate('/'))} style={{cursor:"pointer"}}/></a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
//                             <span className="navbar-toggler-icon" style={{ backgroundColor: "grey" }}></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <a className="nav-link active" aria-current="page" onClick={() => (navigate('/pizza'))} id='headerBtn'>Pizzas</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" onClick={() => (navigate('/Vegpizza'))} id='headerBtn'>Veg pizzas</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" onClick={() => (navigate('/beverages'))} id='headerBtn'>Drinks</a>
//                                 </li>
//                                 <li>

//                                 </li>
//                             </ul>
//                             <div className=''>
//                                 <motion.button className='btn btn-primary SignButton'
//                                     style={{ backgroundColor: "cornsilk", color: "black" }}
//                                     whileHover={{ backgroundColor: "rgb(251, 235, 170)", color: "black" }}
//                                     whileTap={{ backgroundColor: "rgb(251, 235, 170)", color: "black" }}
//                                     onClick={() => (navigate('/signin'))}
//                                 >Sign In</motion.button>
//                             </div>
//                             <div className=''>
//                                 <motion.button className='btn btn-primary SignButton float-start'
//                                     style={{ backgroundColor: "cornsilk", color: "black" }}
//                                     whileHover={{ backgroundColor: "rgb(251, 235, 170)", color: "black" }}
//                                     whileTap={{ backgroundColor: "rgb(251, 235, 170)", color: "black" }}
//                                     onClick={() => (navigate('/signup'))}
//                                 >Sign up</motion.button>
//                             </div>

//                         </div>
//                     </div>
//                 </nav>
//             </div >
//             <br />
//             <div style={{ backgroundColor: "whitesmoke" }}>
//                 <br />
//                 <div className='container' style={{ backgroundColor: "white", minHeight: "500px" }}>
//                     <br />
//                     <center><h3>Your Pizza is ready🍕</h3></center> <hr />
//                     <div className='row'>
//                         <div className="col">
//                             <center><img src={signupImg} alt="" style={{ marginTop: "4%" }} /></center>
//                         </div>
//                         <div className="col" style={{ padding: "1rem" }}>
//                             <center><h3>Sign Up now!!!</h3></center>
//                             <div className="form">
//                                 <form action="JavaScript:SignUpasd()">
//                                     <div className="row">
//                                         <div className="col">
//                                             <div className="mb-3">
//                                                 <label className="label-control">First Name</label>
//                                                 <input onChange={e => (
//                                                     setFirstName(e.target.value)
//                                                 )}
//                                                     required="true" type="text" className="form-control shadow" />
//                                             </div>
//                                         </div>
//                                         <div className="col">
//                                             <div className="mb-3">
//                                                 <label className="label-control">Last Name</label>
//                                                 <input onChange={e => (
//                                                     setLastName(e.target.value)
//                                                 )}
//                                                     required="true" type="text" className="form-control shadow" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="label-control">Email</label>
//                                         <input onChange={e => (
//                                             setemail(e.target.value)
//                                         )}
//                                             required="true" type="email" className="form-control shadow" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="label-control ">Phone Number   (excluding postal code)</label>
//                                         <input onChange={e => (
//                                             setphoneNumber(e.target.value)
//                                         )}
//                                             maxLength="10" minLength="10"
//                                             required="true" type="tel" className="form-control shadow" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="label-control">Password</label>
//                                         <input onChange={e => (
//                                             setPassword(e.target.value)
//                                         )}
//                                             minLength="5" maxLength="10"
//                                             required="true" type="password" className="form-control shadow" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="label-control">Confirm Password</label>
//                                         <input onChange={e => (
//                                             setConfirmPassword(e.target.value)
//                                         )}
//                                             minLength="5" maxLength="10"
//                                             required="true" type="password" className="form-control shadow" />
//                                     </div>
//                                     <div>
//                                         <h6 style={{ color: "grey" }}>All Rights reserved with @PizzaTech</h6>
//                                     </div>
//                                     <div className="col">
//                                         <motion.button className='float-end UpBtn'
//                                             whileHover={{ backgroundColor: "rgb(7, 84, 133)", color: "white" }}
//                                             onClick={SignUp}
//                                         >Submit</motion.button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br />
//                 <br />
//             </div>
//         </motion.div>
//     )
// }


import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from '../../images/colorLogo.png';
import URL from '../URL/Url';
import '../Signin/Sign.css';
import menu from "../../images/menu.png"

export default function Signup() {
    const navigate = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        password: '',
        confirmPassword: '',
        role: 'User',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().min(3,"Firstname should be atleast 3 letter")
            .matches(/^[A-Za-z]+$/, 'First Name must only contain letters without spaces')
            .required('First Name is required'),
        lastName: Yup.string().min(3,"Lastname should be atleast 3 letter")
            .matches(/^[A-Za-z]+$/, 'Last Name must only contain letters without spaces')
            .required('Last Name is required'),
        email: Yup.string()
            .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+@[a-zA-Z\d]+\.[a-zA-Z]{2,}$/, 'Email must contain letters and numbers')
            .required('Email is required'),
        phoneNo: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone Number is required'),
        password: Yup.string()
            .min(5, 'Password must be at least 5 characters')
            .max(10, 'Password must be at most 10 characters')
            .test('password-strength', 'Password is too weak', value => {
                if (!value) return false;
                const strength = calculatePasswordStrength(value);
                return strength === 'Medium' || strength === 'Strong';
            })
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Please confirm your password'),
    });
    
    const calculatePasswordStrength = (password) => {
        let score = 0;
        if (/[a-z]/.test(password)) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
        if (score <= 1) return 'Weak';
        if (score === 2) return 'Medium';
        if (score >= 3) return 'Strong';
    };
    

    const onSubmit = (values) => {
        const url = `${URL}user/signup`;
        axios.post(url, values).then((response) => {
            const result = response.data;
            if (result.status === 'success') {
                toast.success('Registered Successfully');
                navigate('/signin');
            } else {
                toast.error(result.error);
            }
        });
    };

    return (
        <motion.div
            style={{ overflowX: 'hidden' }}
            className='fixedcontent'
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
            <div style={{ backgroundColor: 'whitesmoke' }}>
                <br />
                <div className='container' style={{ backgroundColor: 'white', minHeight: '500px' }}>
                    <br />
                    <div className='row form-div'>
                        <div className="col">
                            <center><img src="https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{ marginTop: '4%',width:"80%" }} /></center>
                        </div>
                        <div className="col" style={{ padding: '1rem' }}>
                            <center><h3>Sign Up now!!!</h3></center>
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                {({ isValid, dirty }) => (
                                    <Form>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="label-control">First Name</label>
                                                    <Field type="text" name="firstName" className="form-control shadow form-input" />
                                                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="label-control">Last Name</label>
                                                    <Field type="text" name="lastName" className="form-control shadow form-input" />
                                                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="label-control">Email</label>
                                            <Field type="email" name="email" className="form-control shadow form-input" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="label-control">Phone Number (excluding postal code)</label>
                                            <Field type="tel" name="phoneNo" className="form-control shadow form-input" />
                                            <ErrorMessage name="phoneNo" component="div" className="text-danger" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="label-control">Password</label>
                                            <Field type="password" name="password" className="form-control shadow form-input" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="label-control">Confirm Password</label>
                                            <Field type="password" name="confirmPassword" className="form-control shadow form-input" />
                                            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                        </div>
                                       
                                        <div className="col">
                                            <motion.button className='float-end UpBtn'
                                                whileHover={{ backgroundColor: 'rgb(7, 84, 133)', color: 'white' }}
                                                type="submit"
                                                disabled={!(dirty && isValid)}
                                            >Submit</motion.button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </motion.div>
    );
}
