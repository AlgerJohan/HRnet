import React from "react";
import "./css/modal.css";

const Modal = ({ setModal }) => {
  return (
    <div id="modalContainer">
      <div id="confirmation" className="modal">
        Employee Created!
        <button className="modalClose" onClick={() => setModal(false)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
