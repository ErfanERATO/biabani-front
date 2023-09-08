import React from "react";
import "./style.scss";
import Image from "../../Assets/Image/Music_Icon.jpg";
import CustomBtn from "../Btn/index";
import CustomModal from "../Modal";
import { Link, useNavigate } from "react-router-dom";

const CustomCard = ({
  title,
  text,
  loading,
  icon,
  category,
  method = () => {},
}) => {

  return (
    <div className="card-container" onClick={method}>
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

        <div className="card-category">
          <p>
            {loading ? (
              <></>
            ) : typeof category == "string" ? (
              <>
                {category}
                {icon && icon()}
              </>
            ) : (
              <>
                {category()}
                {icon && icon()}
              </>
            )}
          </p>
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
          {/* <CustomBtn
            className="btn-Card"
            text="مشاهده"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
