// Libraries
import React, { useEffect } from "react";

// Dependencies
import "./styles.css";
import "./pop.css";
import pop from "./utility.js";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    pop();
  }, []);
  return (
    <div className="thankYou">
      <div className="wrapper-1">
        <div className="wrapper-2">
          {/* <img
            src="https://i.ibb.co/ZJ4sd7C/order-placed-purchased-icon.webp"
            alt="thank-you-envelope"
            border="0"
            height={"100px"}
          /> */}
          <h1>You are awesome!</h1>
          <p>Your Order Has been Placed Successfully</p>
          <p>Support Us By Showing Your Love</p>
          <a href="/">
            <button className="go-home">Home Page</button>
          </a>
          <canvas className="confetti" id="canvas"></canvas>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
