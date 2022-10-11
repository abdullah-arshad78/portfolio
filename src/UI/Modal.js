import React from "react";
import ReactDOM from "react-dom";
const portalEl = document.getElementById("overlays");

const ModalOverlay = (props) => {
  return (
    <div
      className=" backdrop fixed top-0 left-0 right-0 h-screen z-30"
      onClick={props.onClose}
    >
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalEl
      )}
    </React.Fragment>
  );
};

export default Modal;
