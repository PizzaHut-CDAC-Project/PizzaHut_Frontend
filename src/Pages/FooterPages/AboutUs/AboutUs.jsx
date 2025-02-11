import React from "react";
import "./AboutUs.css";
import Header from "../../Header/Header";

export default function AboutUs() {
  return (
    <div onLoad={() => window.scrollTo(0, 0)}>
      <Header />
      <div className="fixedcontent">
        <br />
        <div className="container">
          <h1>About Us</h1> <hr />
          <div className="FooterPagecontainer shadow-lg">
            <div>
              <h5>WHO WE ARE</h5>
              <p>
                There’s nothing cookie-cutter about pizzaStory. Not our pizzas.
                Not our people. And definitely not the way we live life. Around
                here, we don’t settle for anything less than food we’re proud to
                serve. And we don’t just clock in. Not when we can also become
                our best, make friends, and have fun while we’re at it. We’re
                the pizza company that lives life unboxed.
              </p>
              <p>
                We’re not for people who want to blend in: pushing boundaries is
                part of our heritage. Whether it’s the original Stuffed Crust or
                putting a pizza in outer space, we never stop driving ourselves
                to deliver hot pizzas, fast every time – anywhere you want to
                enjoy it.
              </p>
            </div>
            <hr />
            <div>
              <h5>WHAT WE’RE ABOUT</h5>
              <p>
                At pizzaStory, we don’t just make pizza. We make people happy.
                pizzaStory was built on the belief that pizza night should be
                special, and we carry that belief into everything we do. We
                understand how to best serve our customers through tried and
                true service principles: We create food we’re proud to serve and
                deliver it fast, with a smile
              </p>
            </div>
            <hr />
            {/* <div>
              <h5>WHERE WE COME FROM</h5>
              <p>
                In 1958, two brothers borrowed $600 from their mom to open a
                pizza place in Wichita, Kansas. They named it Pizza Hut, because
                their sign only had room for eight letters. How profound! Soon,
                the restaurant grew. Why? The pizza was awesome. The service
                felt like home. And the customers were treated like family. And
                we’ve been delivering that same food and service ever since.
              </p>
            </div> */}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
