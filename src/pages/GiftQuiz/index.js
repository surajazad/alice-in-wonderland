import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateQuizState } from "../../../src/redux/gift";
import { Link } from "react-router-dom";
import "./styles.css";

const GiftQuiz = ({ data }) => {
  const quizQandA = useSelector((state) => state.categoriesData.quizState);
  console.log(quizQandA);
  const dispatch = useDispatch();

  const toggleActiveClass = (question, answer) => {
    let element = document.getElementById(question);
    let children = element.children;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      child.classList.remove("active");
      if (child.id === answer) {
        child.classList.add("active");
      }
    }
  };

  const handleClick = (question, answer) => {
    console.log(question + ">>>" + answer);
    toggleActiveClass(question, answer);
    // todo : update Q&A with an
    dispatch(updateQuizState(quizQandA));
  };

  return (
    <div
      className="gift-quiz"
      style={{
        background: `url('${process.env.PUBLIC_URL}/images/utility/heart3.jpg')`,
      }}
    >
      <div className="title">
        <h1>Gift Quiz</h1>
        <p></p>
      </div>
      <div className="breadcrumbs">
        <Link to={`/`}>Back</Link>
      </div>
      <div className="gift_questions sub-margin">
        <hr />
        <div className="text-align">MY MAGICAL GIFT IS FOR...</div>
        <div className="gift-is-for" id="gift-is-for">
          <button
            className="question_width fab-content"
            id="me"
            onClick={() => {
              handleClick("gift-is-for", "me");
            }}
          >
            I love Myself
          </button>
          <button
            className="question_width fab-content"
            id="amazing-other-half"
            onClick={() => {
              handleClick("gift-is-for", "amazing-other-half");
            }}
          >
            AMAZING OTHER HALF
          </button>
          <button
            className="question_width fab-content"
            id="beautiful-friend"
            onClick={() => {
              handleClick("gift-is-for", "beautiful-friend");
            }}
          >
            {" "}
            BEAUTIFUL FRIEND
          </button>
          <button
            className="question_width fab-content"
            id="awesome-sibling"
            onClick={() => {
              handleClick("gift-is-for", "awesome-sibling");
            }}
          >
            AWESOME SIBLING
          </button>
          <button
            className="question_width fab-content"
            id="lovely-partner"
            onClick={() => {
              handleClick("gift-is-for", "lovely-partner");
            }}
          >
            LOVELY PARTNER
          </button>
        </div>
        <hr />
        <div className="text-align">The OCCASION IS...</div>
        <div className="occasion gift-is-for" id="occasion">
          <div
            className=""
            id="anniversary"
            onClick={() => {
              handleClick("occasion", "anniversary");
            }}
          >
            <div>
              <img
                src="images/quiz/anniversary.webp"
                alt=""
                className="image-card"
              />
            </div>
            <div className="fab-label">Anniversary</div>
          </div>
          <div
            className=""
            id="birthday"
            onClick={() => {
              handleClick("occasion", "birthday");
            }}
          >
            <div>
              <img
                src="images/quiz/birthday.webp"
                alt=""
                className="image-card"
              />
            </div>
            <div className="fab-label">Birthday</div>
          </div>
          <div
            className=""
            id="bachelorette"
            onClick={() => {
              handleClick("occasion", "bachelorette");
            }}
          >
            <div>
              <img
                src="images/quiz/bachelorette.png"
                alt=""
                className="image-card"
              />
            </div>
            <div className="fab-label">Bachelorette</div>
          </div>
          <div
            className=""
            id="valentines"
            onClick={() => {
              handleClick("occasion", "valentines");
            }}
          >
            <div>
              <img
                src="images/quiz/valentines.webp"
                alt=""
                className="image-card"
              />
            </div>
            <div className="fab-label">Valentines</div>
          </div>
        </div>
        <hr />
        <div className="text-align">I AM SURE THEY ARE A...</div>
        <div className="category-lover" id="category-lover">
          <div
            className=""
            id="body-care-lover"
            onClick={() => {
              handleClick("category-lover", "body-care-lover");
            }}
          >
            <div>
              <img
                src="images/quiz/bodycare.png"
                alt=""
                className="image-card"
              />
            </div>
            <div className="fab-label">BODY CARE LOVER</div>
          </div>
          <div
            className=""
            id="fragrance-lover"
            onClick={() => {
              handleClick("category-lover", "fragrance-lover");
            }}
          >
            <div>
              <img
                src="images/quiz/fragrance.png"
                alt=""
                className="image-card"
              />
            </div>
            <div className="fab-label">FRAGRANCE LOVER</div>
          </div>
          <div
            className=""
            id="lingerie-lover"
            onClick={() => {
              handleClick("category-lover", "lingerie-lover");
            }}
          >
            <div>
              <img
                src="images/quiz/lingerie.avif"
                alt=""
                className="image-card"
              />
            </div>
            <div className="fab-label">LINGERIE LOVER</div>
          </div>
          <div
            className=""
            id="accessory-lover"
            onClick={() => {
              handleClick("category-lover", "accessory-lover");
            }}
          >
            <div>
              <img
                src="images/quiz/accessory.avif"
                alt=""
                className="image-card"
              />
            </div>
            <div className="fab-label">ACCESSORY LOVER</div>
          </div>
        </div>
        <hr />
        <div className="text-align">I WANT TO SPEND...</div>
        <div className="i-want-to-spend" id="i-want-to-spend">
          <button
            className="question_width fab-content"
            id="$10-$50"
            onClick={() => {
              handleClick("i-want-to-spend", "$10-$50");
            }}
          >
            $10-$50
          </button>
          <button
            className="question_width fab-content"
            id="$50-$100"
            onClick={() => {
              handleClick("i-want-to-spend", "$50-$100");
            }}
          >
            $50-$100
          </button>
          <button
            className="question_width fab-content"
            id="$100&Above"
            onClick={() => {
              handleClick("i-want-to-spend", "$100&Above");
            }}
          >
            $100 & Above
          </button>
        </div>
      </div>
      <hr />
      <Link to={`/gift`}>
        <div className="find-your-gift">
          <button className="gift_quiz_btn fab-content">
            FIND YOUR GIFT <i class="fa-solid fa-gift"></i>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default GiftQuiz;
