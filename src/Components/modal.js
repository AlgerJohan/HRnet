// import React, { useState } from "react";
// import "./css/modal.css";
// import PropTypes from "prop-types";

// /**
//  * The modal is rendered if the showModal state is true and the show prop is true.
//  * @returns A modal component that is rendered when the show prop is true.
//  */
// const Modal = ({ show, title, titleButton, noCloseButton, noButton }) => {
//   const [showModal, setShowModal] = useState(true);
//   const modalClose = () => {
//     setShowModal(false);
//   };
//   return (
//     showModal &&
//     show && (
//       <div id="modalContainer">
//         <div id="confirmation" className="modal">
//           <span>{title ? title : "Employee Created!"}</span>
//           {!noCloseButton && (
//             <button className="modalClose" title="Hide Modal" onClick={modalClose}>
//               X
//             </button>
//           )}
//           <div className="modalContent">
//             {!noButton && (
//               <button className="modalCloseEnd" title="close" onClick={modalClose}>
//                 {titleButton ? titleButton : "Close"}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Modal;

// Modal.propTypes = {
//   show: PropTypes.bool.isRequired,
//   title: PropTypes.string,
//   titleButton: PropTypes.string,
// };
