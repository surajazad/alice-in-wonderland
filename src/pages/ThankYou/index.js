// Libraries
import React from "react";

// Dependencies
import "./styles.css";

const ThankYou = () => {
    return (
        <div className="thankYou">
            <div className="wrapper-1">
                <div className="wrapper-2">
                    <img src="https://i.ibb.co/ZJ4sd7C/order-placed-purchased-icon.webp" alt="thank-you-envelope" border="0" height={"100px"}/>
                        <h1>You are awesome!</h1>
                        <p>Your Order Has been Placed Successfully</p>
                        <p>Support Us By Showing Your Love</p>
                        <button className="go-home"><a href="/">
                            home page</a>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
