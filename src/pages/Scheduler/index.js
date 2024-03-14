import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Calender from "../../components/Calender";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./styles.css";

import { Link } from "react-router-dom";
import "./styles.css";

const Scheduler = ({ data }) => {
  const globalState = useSelector((state) => state.categoriesData);

  const preSelectedGifts = globalState.giftCatalog.filter((item) => {
    return item.isSelected === true;
  });

  const giftWrapOpted = globalState.wraps.filter((item) => {
    return item.isSelected === true;
  });

  const mergedArray = [...preSelectedGifts, ...giftWrapOpted];

  let estimatedTotal = 0;

  mergedArray.forEach((item) => {
    estimatedTotal = estimatedTotal + item.price;
  });

  const showPayment = () => {
    let paymentScreen = document.querySelector(".bottom-sheet-wrapper");
    paymentScreen.classList.add("show-modal");
  };

  const closePaymentModal = () => {
    let paymentScreen = document.querySelector(".bottom-sheet-wrapper");
    paymentScreen.classList.remove("show-modal");
  };

  return (
    <div className="scheduler">
      <div className="title">
        <h1>Schedule Your Basket Of Love</h1>
        <p></p>
      </div>
      <div className="breadcrumbs">
        <Link to={`/gift`}>Back</Link>
      </div>
      <hr />
      <h2>Select Delivery Date</h2>
      <Calender /> &nbsp;&nbsp;<i class="fa-solid fa-bookmark"></i>
      <hr />
      <h2>Your Saved Events</h2>
      <div className="event-card">
        <div className="event-name">Emily's Birthday</div>
        {/* <div className="event-icon">
          <i class="fa-solid fa-bell"></i>
        </div> */}
        <div className="event-select">
          <input type="checkbox" />
        </div>
      </div>
      <div className="event-card">
        <div className="event-name">Shopie's Birthday </div>
        {/* <div className="event-icon"><i class="fa-solid fa-circle-check"></i></div> */}
        <div className="event-select">
          <input type="checkbox" />
        </div>
      </div>
      <div className="event-card">
        <div className="event-name">Elina's Bachelorette</div>
        {/* <div className="event-icon">
          <i class="fa-solid fa-circle-check"></i>
        </div> */}
        <div className="event-select">
          <input type="checkbox" />
        </div>
      </div>
      <hr />
      <h2>Your Saved Address</h2>
      <div className="event-card">
        <div className="event-name">165 East 5th Ave NY 1001</div>
        <div className="event-select">
          <input type="checkbox" />
        </div>
      </div>
      <div className="event-card">
        <div className="event-name">118W 125th St NY 1005</div>
        <div className="event-select">
          <input type="checkbox" />
        </div>
      </div>
      <hr />
      <div className=" sub-margin ">
        <div>Gift Options</div>
        <div>
          <InputGroup className="mb-3 gift_options">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Text id="passwordHelpBlock" muted>
              Complete your order in our signature giftware and include our
              personalized card ($7.00)
            </Form.Text>
          </InputGroup>
          <InputGroup>
            <InputGroup.Checkbox aria-label="Radio button for following text input" />
            <Form.Text id="passwordHelpBlock" muted>
              Include a personalized message on the packing invoice (Free)
            </Form.Text>
          </InputGroup>
        </div>
      </div>
      <div className="payment-group sub-margin">
        <div>
          <button className="pink">Save And Continue Browsing</button>
        </div>
        <div className="sub-margin text-align">OR</div>
        <div>
          <button
            className="black"
            onClick={() => {
              showPayment();
            }}
          >
            Proceed With Payment
          </button>
        </div>
        <div>
          <button className="white">View My Basket</button>
        </div>
      </div>
      <div className="bottom-sheet-wrapper">
        <div
          className="backdrop"
          onClick={() => {
            closePaymentModal();
          }}
        ></div>
        <div className="bottom-sheet">
          <div
            className="close center"
            onClick={() => {
              closePaymentModal();
            }}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div className="payment-methods">
            <Link to={`/thank-you`}>
              <button className="pay-now credit-card">
                Pay With Saved Card Ending with *241
              </button>
            </Link>
            <div className="">OR Pay With</div>
            <Link to={`/thank-you`}>
              <button className="pay-now paypal">PayPal</button>
            </Link>
            <Link to={`/thank-you`}>
              <button className="pay-now venmo">Venmo</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
