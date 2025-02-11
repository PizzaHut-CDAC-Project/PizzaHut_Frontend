import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import axios from 'axios'
import Header from '../Header/Header'
import URL from '../URL/Url'

export default function EditProfile() {

    const { currentuserId } = sessionStorage
    const { currentfirstName } = sessionStorage
    const { currentlastName } = sessionStorage
    const { currentemail } = sessionStorage
    const { currentphoneNo } = sessionStorage

    const [userId, setuserId] = useState(currentuserId)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setemail] = useState('')
    const [phoneNo, setphoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [role, setrole] = useState('User')

    

    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('firstName')
        sessionStorage.removeItem('lastName')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('loginStatus')
        navigate('/')
    }

    const updateUser = () => {
         if (firstName.length == 0) {
            toast.error("Enter First name")
        } else if (lastName.length == 0) {
            toast.error("Enter Last Name")
        } else if (email.length == 0) {
            toast.error("Enter Email")
        } else if (phoneNo.length == 0) {
            toast.error("Enter Phone NUmber")
        } else {
            const body = {
                firstName, lastName, email, phoneNo, password, role
            }
            const url = `${URL}user/update/${currentuserId}`
            axios.put(url, body).then((response) => {
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') {
                    // currentfirstName = result.data.firstName
                    navigate('/profile')
                    toast.success("Address added successfully")
                    toast.success("Please Re-login to See Updated profile")
                }
            })
        }
    }


    return (
        <div style={{ overflowX: "hidden" }} className='fixedcontent'>
            <Header/>
            <br/>
            <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
                <div className='container shadow-lg userInfo' style={{ backgroundColor: "white" }}>
                    <br />
                    <div>
                        <h4>Edit Profile</h4><br />
                        <div className="form personalinfo" style={{ marginLeft: "15%" }}>
                            <table>
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>First Name</b></td>
                                    <td><input onChange={e=>{
                                        setFirstName(e.target.value)
                                    }}
                                        placeholder={currentfirstName}
                                        type="text" className='personalInfo' style={{borderRadius:"100px"}} required="true" /></td>
                                </tr><br />
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>Last Name</b></td>
                                    <td><input onChange={e=>{
                                        setLastName(e.target.value)
                                    }}
                                        placeholder={currentlastName}
                                        type="text" className='personalInfo' style={{borderRadius:"100px"}} required="true" /></td>
                                </tr><br />
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>Email</b></td>
                                    <td><input onChange={e=>{
                                        setemail(e.target.value)
                                    }}
                                        placeholder={currentemail}
                                        type="email" className='personalInfo' style={{borderRadius:"100px"}} required="true" /></td>
                                </tr><br />
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>Phone Number</b></td>
                                    <td><input onChange={e=>{
                                        setphoneNumber(e.target.value)
                                    }}
                                        placeholder={currentphoneNo}
                                        type="text" className='personalInfo' style={{borderRadius:"100px"}} required="true" /></td>
                                </tr><br />
                                
                                <tr>
                                    <td colSpan={2}>
                                        <button className='float-end editUser' style={{borderRadius:"100px"}} onClick={updateUser}>
                                            Update
                                        </button>
                                    </td>
                                </tr><br />
                            </table>
                        </div>
                    </div><hr />
                </div>
                <br />
            </div>
            <br />
        </div>
    )
}
