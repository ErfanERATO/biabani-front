import React from "react";
import "./style.scss";
import Spinner from "react-bootstrap/Spinner";
const CustomBtn = ({
  text,
  icon,
  secondary = false,
  className = "",
  onClick = () => {},
  loading = false,
  disabled = false,
  type = "btn",
  style,
}) => {
  return (
    <div className="btn-wrapper" data-secondary={secondary}>
      <button
        onClick={onClick}
        className={`btn ${className}`}
        type={type}
        style={style}
      >
        {loading ? (
          <>
            <Spinner size="sm" />
          </>
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
      </button>
    </div>
  );
};

export default CustomBtn;
