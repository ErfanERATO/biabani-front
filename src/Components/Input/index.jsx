import React, { useState } from "react";
import "./style.scss";
const CustomInput = ({
  icon,
  placeholder,
  value = "",
  errors,
  ...resProps
}) => {
  const [style, setStyle] = useState({});

  return (
    <>
      <div className="input-wrapper" style={style}>
        <div className="icon-input">{icon}</div>
        <input
          placeholder={placeholder}
          onFocus={() => {
            setStyle({ border: "1px solid #E45826" });
          }}
          onBlur={() => {
            setStyle({});
          }}
          value={value}
          {...resProps}
        />
      </div>
      {errors ? <p className="text-danger fs-14">{errors.message}</p> : <></>}
    </>
  );
};

export default CustomInput;
