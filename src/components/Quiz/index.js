import React, { useState, useRef } from "react";
import {
  QuizContainer,
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

const QuizComponent = () => {
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
    <QuizContainer ref={containerRef}>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {data.map((question, questionIndex) => (
            <QuestionBox key={questionIndex}>
              <QuestionHeader>{question.label}</QuestionHeader>
              <Form>
                {question.options.map((option, optionIndex) => (
                  <OptionLabel key={optionIndex}>
                    <RadioButton
                      type="radio"
                      value={option.value}
                      checked={option.selected}
                      onChange={() =>
                        handleOptionClick(questionIndex, optionIndex)
                      }
                    />
                    {option.label}
                  </OptionLabel>
                ))}
              </Form>
            </QuestionBox>
          ))}
        </div>
      </div>
      <Link to={`/gift`}>
        <div className="d-grid">
          <button className="find_gift_btn " onClick={handleNext}>
            NEXT
          </button>
        </div>
      </Link>
    </QuizContainer>
  );
};

export default QuizComponent;
