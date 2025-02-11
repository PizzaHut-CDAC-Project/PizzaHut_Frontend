import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import axios from 'axios'
import URL from '../../URL/Url'
import Header from '../../Header/Header'

export default function AddAddress() {

    const { currentuserId } = sessionStorage

    const [userId, setuserId] = useState(currentuserId)
    const [plotNo, setplotNo] = useState('')
    const [streetName, setstreetName] = useState('')
    const [city, setcity] = useState('')
    const [district, setdistrict] = useState('')
    const [soverignState, setsoverignState] = useState('')
    const [pincode, setpincode] = useState('')
    const navigate = useNavigate()

    const address = () => {
        if (plotNo.length == 0) {
            toast.error("Enter Plot No")
        } else if (streetName.length == 0) {
            toast.error("Enter Street Name")
        } else if (city.length == 0) {
            toast.error("Enter City")
        } else if (district.length == 0) {
            toast.error("Enter District")
        } else if (soverignState.length == 0) {
            toast.error("Enter State")
        } else if (pincode.length != 6) {
            toast.error("Pincode Size is invalid")
        } else {
            const body = {
                userId, plotNo, streetName, city, district, soverignState, pincode
            }
            const url = `${URL}address/addAddress`
            axios.post(url, body).then((response) => {
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') {
                    navigate('/profile')
                    toast.success("Address added successfully")
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
                        <h4>Add New Address</h4><br />
                        <div className="form personalinfo" style={{ marginLeft: "15%" }}>
                            <table>
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>Plot No.</b></td>
                                    <td><input onChange={e => (
                                        setplotNo(e.target.value)
                                    )}
                                        type="text" className='personalInfo' style={{borderRadius:"100px"}}  required="true" /></td>
                                </tr><br />
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>Street Name</b></td>
                                    <td><input onChange={e => (
                                        setstreetName(e.target.value)
                                        
                                    )}
                                        type="text" className='personalInfo' style={{borderRadius:"100px"}} required="true" /></td>
                                </tr><br />
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>City</b></td>
                                    <td><input onChange={e => (
                                        setcity(e.target.value)
                                    )}
                                        type="text" className='personalInfo' style={{borderRadius:"100px"}} required="true" /></td>
                                </tr><br />
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>District</b></td>
                                    <td><input onChange={e => (
                                        setdistrict(e.target.value)
                                    )}
                                        type="text" className='personalInfo' style={{borderRadius:"100px"}} required="true" /></td>
                                </tr><br />
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>State</b></td>
                                    <td><input onChange={e => (
                                        setsoverignState(e.target.value)
                                    )}
                                        type="text" className='personalInfo' style={{borderRadius:"100px"}} required="true" /></td>
                                </tr><br />
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>Pin code</b></td>
                                    <td><input onChange={e => (
                                        setpincode(e.target.value)
                                    )}
                                        type="number" className='personalInfo' style={{borderRadius:"100px"}} required="true" /></td>
                                </tr><br />
                                <tr>
                                    <td colSpan={2}>
                                        <button className='float-end editUser' style={{borderRadius:"100px"}} onClick={address}>
                                            Add
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
