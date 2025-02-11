import { motion } from 'framer-motion'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import logo from '../../images/colorLogo.png'
import './Header.css'
import menu from "../../images/menu.png"


export default function Header() {

    const { currentfirstName } = sessionStorage
    const navigate = useNavigate()
    const logout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    const loginstatus = sessionStorage.getItem("currentloginStatus")
    const chechLogin = () => {
        if (loginstatus != 1) {
            var drop = document.getElementById('dropdown-basic')
            drop.disabled = true
        }
    }

    return (
        <div onLoad={chechLogin}>
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
                            <div>
                                <motion.button className='cartbtn'
                                    whileHover={{ scale: 1.03, backgroundColor: "white" }}
                                    onClick={() => (navigate('/cart'))}
                                >Cart</motion.button>
                            </div>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropBtnd'>
                                        Hi {currentfirstName} !
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => (navigate('/profile'))}>Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={() => navigate('/MyOrders')}>My Orders</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </nav>
            </div >
        </div >
    )
}

{/* <div onLoad={chechLogin}>
    <div classNameName="row shadow sticky-top" style={{ backgroundColor: "darkslateblue" }} >
        <div classNameName="col">
            <img src={logo} alt="" classNameName='headerlogoProfile' onClick={() => (navigate('/'))} />
            <motion.button classNameName='btn btn-link headerbtn'
                whileHover={{ scale: 1.03, color: "whitesmoke" }}
                whileTap={{ scale: 0.98, color: "whitesmoke" }}
                onClick={() => navigate('/pizza')}
            >Pizzzas</motion.button>

            <motion.button classNameName='btn btn-link headerbtn'
                whileHover={{ scale: 1.03, color: "whitesmoke" }}
                whileTap={{ scale: 0.98, color: "whitesmoke" }}
                onClick={() => (navigate('/Vegpizza'))}
            >Veg-Pizzas</motion.button>

            <motion.button classNameName='btn btn-link headerbtn'
                whileHover={{ scale: 1.03, color: "whitesmoke" }}
                whileTap={{ scale: 0.98, color: "whitesmoke" }}
                onClick={() => (navigate('/beverages'))}
            >Beverages</motion.button>
        </div>

        <div classNameName="col">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" classNameName='float-end dropBtnd'>
                    Hi {currentfirstName} !
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => (navigate('/profile'))}>Profile</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate('/MyOrders')}>My Orders</Dropdown.Item>
                    <Dropdown.Item href="">Something</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <motion.button classNameName='float-end cartbtn'
                whileHover={{ scale: 1.03, backgroundColor: "white" }}
                onClick={() => (navigate('/cart'))}
            >Cart</motion.button>
        </div>
    </div>
</div> */}