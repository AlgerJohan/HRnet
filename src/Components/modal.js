import React from "react";
import "./css/modal.css";

const Modal = ({ setModal }) => {
  return (
    <div id="modalContainer">
      <div id="confirmation" className="modal">
        Employee Created!
        <div className="modalClose" onClick={() => setModal(false)}>
          <p>X</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
