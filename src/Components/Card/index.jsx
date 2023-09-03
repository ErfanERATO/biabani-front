import React from "react";
import "./style.scss";
import Image from "../../Assets/Image/Music_Icon.jpg";
import CustomBtn from "../Btn/index"

const CustomCard = ({ title, text, loading, icon }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={Image} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>
            {loading ? (
              <></>
            ) : typeof title == "string" ? (
              <>
                {title}
                {icon && icon()}
              </>
            ) : (
              <>
                {title()}
                {icon && icon()}
              </>
            )}
          </h3>
        </div>
        <div className="card-description">
          {loading ? (
            <></>
          ) : typeof text == "string" ? (
            <>
              {text}
              {icon && icon()}
            </>
          ) : (
            <>
              {text()}
              {icon && icon()}
            </>
          )}
        </div>
        <div className="card-btn">
          <CustomBtn
            className="btn-Card"
            text="محصولات"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
