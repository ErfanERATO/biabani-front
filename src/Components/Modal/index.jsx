// import React, { useState } from "react";
// import "./style.scss";
// import Modal from "react-bootstrap/Modal";
// import CustomBtn from "../Btn";
// // import { useSingle } from "./Hooks";

// const CustomModal = (id) => {
//   const [fullscreen, setFullscreen] = useState(true);
//   const [show, setShow] = useState(false);

//   function handleShow(breakpoint) {
//     setFullscreen(breakpoint);
//     setShow(true);
//   }

//   return (
//     <div>
//       <CustomBtn
//         className="btn-Card"
//         text="مشاهده"
//         onClick={() => handleShow()}
//       />
//       <Modal show={show} fullscreen={"md-down"} onHide={() => setShow(false)}>
//         <Modal.Header closeButton></Modal.Header>
//         <Modal.Body>
//           <h1>xxxx</h1>
//           <p>tttt</p>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default CustomModal;
