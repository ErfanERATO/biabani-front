import React, { useEffect, useState } from "react";
import "./style.scss";
import Modal from "react-bootstrap/Modal";
import { useSingle } from "./Hooks";
// import { useSingle } from "./Hooks";

const CustomModal = ({ data = null, onHide }) => {
  // const [fullscreen, setFullscreen] = useState(true);
  // const [show, setShow] = useState(false);
  const { single, loading ,getData} = useSingle();
  // function handleShow(breakpoint) {
  //   setFullscreen(breakpoint);
  //   setShow(true);
  // }
  useEffect(() => {
    getData(data?.slug);
  }, []);
  return (
    <div>
      <Modal show={!!data} fullscreen={"md-down"} onHide={onHide}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h1>{data?.title}</h1>
          <p>{data?.category?.title}</p>
          <p>{data?.price}</p>
          <p>{data?.l_desc}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CustomModal;
