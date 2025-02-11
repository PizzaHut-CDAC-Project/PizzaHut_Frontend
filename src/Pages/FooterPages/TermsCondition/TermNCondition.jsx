import React from 'react'
import '../AboutUs/AboutUs.css'
import Header from '../../Header/Header'

export default function TermNCondition() {
    return (
        <div onLoad={() => window.scrollTo(0, 0)}>
            <Header />
            <div className='fixedcontent'>
                <br />
                <div className='container'>
                    <h1>Terms And Conditions</h1> <hr />
                    <div className='FooterPagecontainer shadow-lg'>
                        <div>
                            <h5>Order Delivery</h5>
                            <h6> Delivery orders are subjected to:</h6>
                            <li>
                                Your address falling in the defined delivery area of the nearest restaurant
                            </li>
                            <li>
                                The delivery address being mapped to the nearest restaurant that delivers in your area
                            </li>
                            <li>
                                Availability of the restaurant online
                            </li>
                            <li>
                                In case the delivery locality is not listed in the restaurant locator, delivery of orders cannot be placed
                            </li>

                        </div>
                        <hr />
                        <div>
                            <h5>Menu</h5>
                            <h6> The menu is displayed as per the availability of the menu items in the mapped restaurant.
                            </h6>
                            <li>
                                In case certain menu items are not listed in the menu page, the particular restaurant does not carry those items in the menu
                            </li>
                            <li>
                                In case of non-availability of ordered product at the mapped restaurant, the order would not be executed. Same would be informed by the restaurant near you
                            </li>
                            <li>
                                Drinks (350ml) shall be available at the discounted rate of Rs.40 solely with the Pizza Mania range
                            </li>
                            <li>
                                The term “Drink (350ml)” shall denote 350ml of drinks dispensed through PMX machine
                            </li>
                        </div>
                        <hr />
                        <div>
                            <h5>Late Night Delivery</h5>
                            <li>
                                Delivery charges shall be applicable to all orders.
                            </li>
                            <li>
                                The delivery charge will be applicable on per invoice/bill in case of multiple orders.
                            </li>
                            <li>
                                Delivery of orders shall be as per the available stock.
                            </li>
                            <li>
                                The night orders can be placed through all Dominos digital assets.
                            </li>
                            <li>
                                Advance ordering is not allowed under Late night delivery ordering.
                            </li>
                            <li>
                                Takeaway/Dine In is not allowed under Late night delivery ordering.
                            </li>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}