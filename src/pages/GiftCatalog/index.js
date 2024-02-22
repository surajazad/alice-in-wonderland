import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./styles.css";
import { updatePreSelectedGiftCatalog } from "../../../src/redux/gift";

const GiftCatalog = () => {
  const giftCatalogProducts = useSelector(
    (state) => state.categoriesData.giftCatalog
  );

  const dispatch = useDispatch();

  const handleClick = (key) => {
    console.log(key);
    console.log("add selected gifts to cart");
    const updatedData = giftCatalogProducts?.map((category) => {
      if (category.key === key) {
        return {
          ...category,
          isSelected: !category.isSelected,
        };
      }
      return category;
    });
    console.log(updatedData);
    dispatch(updatePreSelectedGiftCatalog(updatedData));
  };

  useEffect(() => {
    sessionStorage.setItem("isBundle", true);
  }, []);

  return (
    <>
      <div className="title">
        <h1>Curated With Love GIFT HAMPERS</h1>
        <p>Pre Selected Gift Hampers for All Occasion for Your Loved Ones</p>
      </div>
      <div className="breadcrumbs">
        <Link to={`/gift_quiz`}>Back</Link>
      </div>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
          {giftCatalogProducts.map((item, index) => (
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
                    <span className="">{item.price}</span>
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
      <Link to={`/categories`}>
        <div className="d-grid">
          <button className="find_gift_btn ">Want to be the stylist ?</button>
        </div>
      </Link>
      <Link to={`/gift_wrap`} className="cart-float">
        <i class="fa-solid fa-cart-shopping my-float"></i>
      </Link>
    </>
  );
};

export default GiftCatalog;
