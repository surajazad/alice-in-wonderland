// Libraries

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { updateSelectedProducts, updateProductsStack } from "../../redux/gift";

// Styles

const StyleMainDiv = {
  display: "flex",
  padding: "8px",
  margin: "8px",
  borderBottom: "1px solid #e8e3df",
};

const StyleImage = { width: "100px", border: "1px solid #e8e3df" };

const StyleLabel = {
  padding: "24px",
  margin: "24px",
  textTransform: "uppercase",
};

// Public.

const SelectedCategory = ({ data }) => {
  const categoriesData = useSelector((state) => state.categoriesData.data);
  const productsList = useSelector(
    (state) => state.categoriesData.productsStacks
  );
  const selectedProducts = useSelector(
    (state) => state.categoriesData.selectedProducts
  );

  const getSelectedCategoryandProduct = (categoriesData) => {
    return categoriesData;
  }
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedList, setSelectedList] = useState(getSelectedCategoryandProduct(categoriesData));

  const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShow = (key) => {
    setCategory(key);
    setProducts(productsList[key.toLowerCase()]);
    setShow(true);
  };
  useEffect(() => {}, [show, products]);
  useEffect(() => {
    sessionStorage.setItem("isBundle", false);
  }, []);

  const handleStackUpdate = (item) => {
    const modifiedProductsList = productsList[item.label.toLowerCase()].map(
      (product) => {
        if (product.key === item.key) {
          return {
            ...product,
            isSelected: !product.isSelected,
          };
        }
        return product;
      }
    );

    let newProductStack = Object.assign({}, productsList, {
      [item.label.toLowerCase()]: modifiedProductsList,
    });
    setProducts(newProductStack[item.label.toLowerCase()]);
    dispatch(updateProductsStack(newProductStack));
  };
  const handleClick = (item) => {
    const productExits = !!selectedProducts?.find((product) => item.key);

    if (productExits) {
      const currentlySelected = selectedProducts?.filter((product) => {
        return product.key !== item.key;
      });
      dispatch(updateSelectedProducts([...currentlySelected]));
    } else {
      dispatch(updateSelectedProducts([...selectedProducts, item]));
    }

    handleStackUpdate(item);
  };

  return (
    <>
      <div className="title">
        <h1>Add Your Products</h1>
        <p></p>
      </div>
      <div className="breadcrumbs">
        <Link to={`/categories`}>Back</Link>
      </div>
      {selectedList?.map(
        (item, index) =>
          item.isSelected && (
            <div
              key={index}
              style={StyleMainDiv}
              onClick={() => {
                handleShow(item.label);
              }}
            >
              <img src={item.imgSrc} alt={item.label} style={StyleImage} />
              <div style={StyleLabel}>{`ADD A ${item.label}`}</div>
            </div>
          )
      )}
      <button
        className="find_gift_btn"
        onClick={() => navigate("/gift_wrap", { state: { key: "value" } })}
      >
        Next
      </button>

      {/* Modal Start */}
      <Modal show={show} onHide={handleClose} animation={true} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>{category}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container text-center">
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
              {products?.map((item, index) => (
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
                        handleClick(item);
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            className="find_gift_btn"
          >
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal End */}
    </>
  );
};

export default SelectedCategory;
