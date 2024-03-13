import React, { useState, useRef } from "react";
import {
  MainContainer,
  QuestionBox,
  QuestionHeader,
  Form,
  OptionLabel,
  RadioButton,
  QuizButton,
  NextButtonContainer,
} from "./styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Decision = () => {
  const quizData = useSelector((state) => state.categoriesData.quizData);
  const [data, setData] = useState(quizData);
  const containerRef = useRef(null);

  const handleNext = () => {
    containerRef.current.scrollBy({
      top: 200, // Change this value based on the height of your divs
      behavior: "smooth",
    });
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    handleNext();
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[questionIndex] = {
        ...updatedData[questionIndex],
        options: updatedData[questionIndex].options.map((option, index) => {
          if (index === optionIndex) {
            return { ...option, selected: true };
          } else {
            return { ...option, selected: false };
          }
        }),
      };
      console.log("updatedData", updatedData);
      return updatedData;
    });
  };

  return (
    <MainContainer
      ref={containerRef}
      style={{
        background: `url('${process.env.PUBLIC_URL}/images/utility/decision_bg.avif')`,
        backgroundSize: "cover",
      }}
    >
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <Link to={`/gift_quiz`}>
            <div className="d-grid">
              <button className="btn" onClick={handleNext}>
                Instant picks <i class="fa-regular fa-face-smile-wink"></i>
              </button>
            </div>
          </Link>
          <Link to={`/categories`}>
            <div className="d-grid">
              <button className="btn" onClick={handleNext}>
                I'am the stylist <i class="fa-solid fa-heart"></i>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </MainContainer>
  );
};

export default Decision;
