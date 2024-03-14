import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateSelectedDataObj } from "../../../src/redux/gift";
import { Link } from "react-router-dom";
import "./styles.css";

const CollectionPage = ({ data }) => {
  const categoriesData = useSelector((state) => state.categoriesData.data);
  console.log(categoriesData);

  const dispatch = useDispatch();

  const handleClick = (key) => {
    const updatedData = categoriesData?.map((category) => {
      if (category.key === key) {
        return {
          ...category,
          isSelected: !category.isSelected,
        };
      }
      return category;
    });

    dispatch(updateSelectedDataObj(updatedData));
  };

  return (
    <>
      <div className="title">
        <h1>Personalize Your Basket</h1>
        <p>Select Categories that You want to Build Your basket with </p>
      </div>
      <div className="breadcrumbs">
        <Link to={`/gift`}>Back</Link>
      </div>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
          {categoriesData.map((item, index) => (
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
                    {/* <span className="">Place heart Icon here
                    </span> */}
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
      <Link to={`/selected_categories`}>
        <button className="find_gift_btn">
          Proceed to Product Selection <i class="fa fa-shopping-cart"></i>
        </button>
      </Link>
    </>
  );
};

export default CollectionPage;
