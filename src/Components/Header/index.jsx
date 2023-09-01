import React, { useState } from "react";
import "./style.scss";

const CustomHeader = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <div>
      <nav className="nav d-flex justify-content-around align-items-center">
        <a href="#" className="brand">
          Ako
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              درباره‌ی ما
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              محصولات
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default CustomHeader;
