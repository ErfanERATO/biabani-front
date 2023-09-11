import React from "react";
import "./style.scss";

const CustomCard = ({
  title,
  text,
  loading,
  icon,
  category,
  btn,
  image,
  method = () => {},
}) => {
  console.log("__tt", text);
  return (
    <div className="card-container" onClick={method}>
      <div className="image-container">{image && image()}</div>
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
          ) : !text ? (
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

        <div className="card-btn">{btn && btn()}</div>
      </div>
    </div>
  );
};

export default CustomCard;
