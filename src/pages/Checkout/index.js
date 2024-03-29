import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import "./styles.css";

const Checkout = ({ data }) => {
  const globalState = useSelector((state) => state.categoriesData);

  const defaultProducts = [
    {
      key: "01",
      label: "Bra",
      imgSrc: "images/productList/bra1.avif",
      isSelected: true,
      price: 100,
      priceLabel: "$100",
      priceRange: "100&Above",
    },
    {
      key: "02",
      label: "Fragrance",
      imgSrc: "images/productList/beauty1.avif",
      isSelected: true,
      price: 15,
      priceLabel: "$15",
      priceRange: "10-50",
    },
    {
      key: "03",
      label: "Bag",
      imgSrc: "images/gift-catalog/tote_bag.avif",
      isSelected: true,
      price: 90,
      priceLabel: "$90",
      priceRange: "10-50",
    },
  ];
  let isBundle = sessionStorage.getItem("isBundle");

  const cartItems =
    isBundle === "true" ? globalState.giftCatalog : defaultProducts;
  // change here
  const preSelectedGifts = cartItems.filter((item) => {
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
    <div className="checkout">
      <div className="title">
        <h1>Shopping Bag</h1>
        <p></p>
      </div>
      <div className="breadcrumbs">
        <Link to={`/gift`}>Back</Link>
      </div>
      <hr />
      <div className="cart-items">
        {preSelectedGifts?.map((item, index) => (
          <div className="single-cart-item">
            <div>
              <img
                src={item.imgSrc}
                alt={item.label}
                className="image-thumbnail"
              />
            </div>
            <div>{item.label}</div>
            <div>{item.priceLabel}</div>
          </div>
        ))}
      </div>
      <hr />
      <div className="sub-title">
        <h3>Gift Wrap</h3>
        <div className="cart-items">
          {giftWrapOpted.map((item, index) => (
            <div className="single-cart-item">
              <div>
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="image-thumbnail"
                />
              </div>
              <div>{item.label}</div>
              <div>{item.priceLabel}</div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="estimated-total sub-margin">
        <div>Estimated Total</div>
        <div>${estimatedTotal}</div>
      </div>
      <div className="payment-group sub-margin">
        <div>
          <button
            className="pink"
            onClick={() => {
              showPayment();
            }}
          >
            BUY NOW WITH 10% DISCOUNT <i class="fa-regular fa-heart"></i>
          </button>
        </div>
        <div className="sub-margin text-align">OR</div>
        <div>
          <Link to={`/scheduler`}>
            <button className="black">
              CHOOSE A DATE <i class="fa-solid fa-calendar-days"></i>
            </button>
          </Link>
        </div>
        <div>
          <button className="white">
            RESET BASKET <i class="fa-solid fa-arrows-rotate"></i>
          </button>
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

export default Checkout;
