import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  return (
    <div>
      <img
        className="img_banner"
        src="images/utility/banner-1.jpeg"
        alt="Happy valentine's Day"
      />
      <Link to={`/gift_quiz`}>
        <div className="d-grid">
          <button className="btn btn-primary btn_background" type="button">
            FIND MY GIFT
          </button>
        </div>
      </Link>
      <img
        className="img_banner"
        src="https://www.victoriassecret.com/images/vsweb/11f59382-8d3c-4356-b312-63dd3aa19fe1/011024-vs-hp-TeaseVDay-mob.jpg"
        alt="Happy valentine's Day"
      />
      <Link to={`/gift_quiz`}>
        <div className="d-grid">
          <button className="btn btn-primary btn_background" type="button">
            FIND MY GIFT
          </button>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
