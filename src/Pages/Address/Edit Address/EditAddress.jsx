import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import axios from 'axios'
import Header from '../../Header/Header'
import URL from '../../URL/Url'

export default function EditAddress(props) {

    const [plotNo, setplotNo] = useState('')
    const [streetName, setstreetName] = useState('')
    const [city, setcity] = useState('')
    const [soverignState, setsoverignState] = useState('')
    const [pincode, setpincode] = useState('')
    const [district, setdistrict] = useState('')

    const { currentuserId } = sessionStorage
    const navigate = useNavigate()

    const { state } = useLocation()
    const { addressId } = state

    const getaddressbyid = () => {
        const url = `${URL}address/getaddressbyid/${addressId}`
        axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            if (result.status == 'success') {
                const { city, pincode, plotNo, soverignState, district, streetName } = result.data
                sessionStorage['thiscity'] = city
                sessionStorage['thisdistrict'] = district
                sessionStorage['thispincode'] = pincode
                sessionStorage['thisplotNo'] = plotNo
                sessionStorage['thisstate'] = soverignState
                sessionStorage['thisstreetName'] = streetName
            }
        })
    }

    useEffect(() => {
        getaddressbyid()
    }, [])

    const { thiscity } = sessionStorage
    const { thispincode } = sessionStorage
    const { thisplotNo } = sessionStorage
    const { thisstate } = sessionStorage
    const { thisstreetName } = sessionStorage
    const { thisdistrict } = sessionStorage
    const userId = currentuserId

    const updateaddress = () => {
        if (plotNo.length == 0) {
            toast.error("Enter new Plot No")
        } else if (streetName.length == 0) {
            toast.error("Enter new Street Name")
        } else if (city.length == 0) {
            toast.error("Enter new City")
        } else if (district.length == 0) {
            toast.error("Enter new District")
        } else if (soverignState.length == 0) {
            toast.error("Enter new State")
        } else if (pincode.length != 6) {
            toast.error("Enter New Pincode")
        } else {
            console.log(currentuserId)
            const body = {
                soverignState, city, pincode, plotNo, streetName, userId, district
            }
            const url = `${URL}address/updateAddress/${addressId}`
            axios.put(url, body).then((response) => {
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') {
                    navigate('/profile')
                    sessionStorage.removeItem('thiscity')
                    sessionStorage.removeItem('thisdistrict')
                    sessionStorage.removeItem('thispincode')
                    sessionStorage.removeItem('thisplotNo')
                    sessionStorage.removeItem('thisstate')
                    sessionStorage.removeItem('thisstreetName')
                    toast.success("Address Updated!!!")
                } else {
                    toast.error(result.error)
                }
            })
        }
    }
    const scrollUp=()=>{
        window.scrollTo(0,0)
    }

    return (
        <div style={{ overflowX: "hidden" }} onLoad={scrollUp} className='fixedcontent'>
            <Header/>
            <br/>
            <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
                <div className='container shadow-lg userInfo' style={{ backgroundColor: "white" }}>
                    <br />
                    <div>
                        <h4>Edit Your Address</h4><br />
                        <div className="form personalinfo" style={{ marginLeft: "15%" }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: "right" }}><b>Plot No.</b></td>
                                        <td><input onChange={e => (
                                            setplotNo(e.target.value)
                                        )}
                                            placeholder={thisplotNo}
                                            type="text" className='personalInfo' style={{borderRadius:"100px"}} required /></td>
                                    </tr><br />
                                    <tr>
                                        <td style={{ textAlign: "right" }}><b>Street Name</b></td>
                                        <td><input onChange={e => (
                                            setstreetName(e.target.value)
                                        )}
                                            placeholder={thisstreetName}
                                            type="text" className='personalInfo' style={{borderRadius:"100px"}} required /></td>
                                    </tr><br />
                                    <tr>
                                        <td style={{ textAlign: "right" }}><b>City</b></td>
                                        <td><input onChange={e => (
                                            setcity(e.target.value)
                                        )}
                                            placeholder={thiscity}
                                            type="text" className='personalInfo' style={{borderRadius:"100px"}} required /></td>
                                    </tr><br />
                                    <tr>
                                        <td style={{ textAlign: "right" }}><b>District</b></td>
                                        <td><input onChange={e => (
                                            setdistrict(e.target.value)
                                        )}
                                            placeholder={thisdistrict}
                                            type="text" className='personalInfo' style={{borderRadius:"100px"}} required /></td>
                                    </tr><br />
                                    <tr>
                                        <td style={{ textAlign: "right" }}><b>State</b></td>
                                        <td><input onChange={e => (
                                            setsoverignState(e.target.value)
                                        )}
                                            placeholder={thisstate}
                                            type="text" className='personalInfo' style={{borderRadius:"100px"}} required /></td>
                                    </tr><br />
                                    <tr>
                                        <td style={{ textAlign: "right" }}><b>Pin code</b></td>
                                        <td><input onChange={e => (
                                            setpincode(e.target.value)
                                        )}
                                            placeholder={thispincode}
                                            type="number" className='personalInfo' style={{borderRadius:"100px"}} required /></td>
                                    </tr><br />
                                    <tr>
                                        <td colSpan={2}>
                                            <button className='float-end editUser' style={{borderRadius:"100px"}} onClick={updateaddress}>
                                                Update
                                            </button>
                                        </td>
                                    </tr><br />
                                </tbody>
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
