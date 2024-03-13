import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateSelectedGiftWrap } from "../../../src/redux/gift";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const GiftWrapPage = ({ data }) => {
  const giftWrapOptions = useSelector((state) => state.categoriesData.wraps);
  console.log(giftWrapOptions);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (key) => {
    const updatedData = giftWrapOptions?.map((category) => {
      if (category.key === key) {
        return {
          ...category,
          isSelected: !category.isSelected,
        };
      } else {
        return {
          ...category,
          isSelected: false,
        };
      }
    });

    dispatch(updateSelectedGiftWrap(updatedData));
  };

  return (
    <>
      <div className="title">
        <h1>Choose a Gift Box</h1>
        <p>Wrap Your Collection in Handcrafted Gift Boxes </p>
      </div>
      <div className="breadcrumbs">
        <Link to={`/selected_categories`}>Back</Link>
      </div>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
          {giftWrapOptions.map((item, index) => (
            <div className="col">
              <div className="card h-77">
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="card-img-top"
                />
                <div className="card-body">
                  <span className="card-title">
                    <span>{item.label}</span>
                    <span className="">{item.priceLabel}</span>
                  </span>
                </div>
                <div
                  className="card-footer"
                  onClick={() => {
                    handleClick(item.key);
                  }}
                >
                  {item.isSelected ? (
                    <img
                      src="images/utility/check-mark.png"
                      alt="selected"
                      className="select-icon"
                    />
                  ) : (
                    <small className="text-body-secondary">ADD</small>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="find_gift_btn"
        onClick={() => navigate("/shopping_cart")}
      >
        Proceed to Checkout <i class="fa fa-shopping-cart"></i>
      </button>
    </>
  );
};

export default GiftWrapPage;
