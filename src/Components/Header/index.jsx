import React, { useState } from "react";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const CustomHeader = () => {
  // const [active, setActive] = useState("nav__menu");
  // const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  // const navToggle = () => {
  //   active === "nav__menu"
  //     ? setActive("nav__menu nav__active")
  //     : setActive("nav__menu");

  //   toggleIcon === "nav__toggler"
  //     ? setToggleIcon("nav__toggler toggle")
  //     : setToggleIcon("nav__toggler");
  // };
  return (
    // <nav className="nav d-flex justify-content-around align-items-center container">
    //   <ul className={active}>
    //     <li className="nav__item">
    //       <a href="/connect-us" className="nav__link">
    //         درباره‌ی ما
    //       </a>
    //     </li>
    //     <li className="nav__item">
    //       <a href="/products" className="nav__link">
    //         محصولات
    //       </a>
    //     </li>
    //   </ul>
    //     <a href="/" className="brand" style={{fontSize:"2rem"}}>
    //       Ako
    //     </a>
    //   <div onClick={navToggle} className={toggleIcon}>
    //     <div className="line1"></div>
    //     <div className="line2"></div>
    //     <div className="line3"></div>
    //   </div>
    // </nav>
    <Navbar collapseOnSelect expand="lg" className="container">
      <Container className="content-container">
        <Navbar.Brand href="/">Ako</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">خانه</Nav.Link>
            <Nav.Link href="/products">محصولات</Nav.Link>
            <Nav.Link href="/connect-us">درباره‌ی ما</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomHeader;
