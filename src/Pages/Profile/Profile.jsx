import React, { useEffect, useState } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import Header from '../Header/Header'
import Address from '../../Component/AddressComp/Address'
import URL from '../URL/Url'

export default function Profile() {

    const navigate = useNavigate()

    const addAddress = () => {
        navigate('/addAddress')
        window.scrollTo(0, 0)
    }

    const userEdit = () => {
        navigate('/editProfile')
        window.scrollTo(0, 0)
    }

    const [address, setAddress] = useState([])
    const getAddress = () => {
        const url = `${URL}address/getaddress/${currentuserId}`
        axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            if (result.status === 'success') {
                setAddress(result.data)
            } else {
                toast.warning(result['error'])
            }
        })
    }

    useEffect(() => {
        getAddress()
    }, [])

    const { currentuserId,
        currentfirstName,
        currentlastName,
        currentemail,
        currentphoneNo } = sessionStorage
    return (
        <div style={{ overflowX: "hidden" }} className='fixedcontent'>
            <Header /> 
            <br/>
            <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
                <div className='container shadow-lg' style={{ backgroundColor: "white" }}>
                    <br />
                    <div>
                        <h4>Personal Information</h4><br />
                        <table  className='table-responsive' id='prtable'>
                            <tr>
                                <td style={{ textAlign: "right" }}><b>First Name</b></td>
                                <td><input type="text" value={currentfirstName} className="personalInfo" style={{borderRadius:"100px"}} readOnly="true" /></td>
                            </tr><br />
                            <tr>
                                <td style={{ textAlign: "right" }}><b>Last Name</b></td>
                                <td><input type="text" value={currentlastName} className="personalInfo" style={{borderRadius:"100px"}} readOnly="true" /></td>
                            </tr><br />
                            <tr>
                                <td style={{ textAlign: "right" }}><b>Email</b></td>
                                <td><input type="text" value={currentemail} className="personalInfo" style={{borderRadius:"100px"}} readOnly="true" /></td>
                            </tr><br />
                            <tr>
                                <td style={{ textAlign: "right" }}><b>Phone Number</b></td>
                                <td><input type="text" value={currentphoneNo} className="personalInfo" style={{borderRadius:"100px"}} readOnly="true" /></td>
                            </tr><br />
                            <tr>
                                <td colSpan={2}>
                                    <button className='float-end editUser' style={{borderRadius:"100px"}} onClick={userEdit}>
                                        Edit Profile
                                    </button>
                                </td>
                            </tr><br />
                        </table>
                    </div><hr />
                    <div className=''>
                        <div>
                            <div className="row">
                                <div className="col">
                                    <h4>Your Addresses</h4><br />
                                </div>
                                <div className="col">
                                    <button className='float-end addAddress' style={{borderRadius:"100px"}} onClick={addAddress}>Add Address</button>
                                </div>
                            </div>
                            {address.map((add) => {
                                return <Address addres={add} />
                            })}
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <br />
        </div>
    )
}
