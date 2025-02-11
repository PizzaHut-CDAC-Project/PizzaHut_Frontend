import React from "react";
import "../AboutUs/AboutUs.css";
import Header from "../../Header/Header";

export default function FAQs() {
  return (
    <div onLoad={() => window.scrollTo(0, 0)}>
      <Header />
      <div className="fixedcontent">
        <br />
        <div className="container">
          <h1>FAQs</h1> <hr />
          <div className="FooterPagecontainer shadow-lg">
            <div>
              <h5> Q . What are your night delivery charges slab ?</h5>
              <p>
                Dear Sir/ Mam, The night delivery charge varies as per the order
                value. Per delivery charge is INR 40 for all orders more than
                INR 300, INR 50 for order value between INR 157 upto INR 300,
                INR 55 for order value between INR 27 upto INR 156 and INR 65
                for order value below INR 27. All night delivery charges are
                inclusive of applicable taxes.
              </p>
            </div>
            <hr />
            <div>
              <h5>Q. Is your chicken or Non-Veg Pizza Safe to eat ?</h5>
              <p>
                Dear Mam / Sir, Our pizza is absolutely safe & baked at 250
                degree Celsius (465 degree Fahrenheit) that ensures your food is
                safe for immediate consumption.
              </p>
            </div>
            <hr />
            <div>
              <h5>
                Q. What are the precautions taken because of bird flu spread ?
              </h5>
              <p>
                Dear Mam / Sir, we follow stringent SOPs to ensure that your
                pizza is prepared with utmost hygiene and safety. We source our
                meat only from FSSC22K certified suppliers, where we ensure
                strict hygiene & bird health safety measure and rearing of bird
                in bio secured farms.
              </p>
            </div>
            <hr />
            <div>
              <h5>Q. What are your delivery charges ?</h5>
              <p>
                Dear Sir/ Mam, This is a nominal fee charged as an industry
                practice on all our delivery orders till 11PM. Per delivery
                charge is minimum INR 35 (inclusive of taxes) for orders more
                than INR 300 and varies as per order value for less than INR
                300. This charge is to ensure highest standard of hygiene
                protocols being followed to deliver hot and fresh pizzas.
              </p>
            </div>
            <hr />
            <div>
              <h5>Q. Can I modify/cancel my online order ?</h5>
              <p>
                Sir/Mam, online order once placed cannot be modified or
                cancelled, either through the website or offline by calling the
                restaurant or our call center.
              </p>
            </div>
            <hr />
            <div>
              <h5>Q. What is delivery time at pizzaStory ?</h5>
              <p>We at pizzaStory deliver from 11AM to 11PM.</p>
            </div>
            <hr />
            <div>
              <h5>Q. At what time shoulld I come for take-away delivery ?</h5>
              <p>
                Sir/Mam, you can come at our branch from where you have ordered
                after 30min of online ordering .
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
