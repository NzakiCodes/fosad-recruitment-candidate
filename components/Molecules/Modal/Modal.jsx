import React from "react";
import { useEffect } from "react";
import Portal from "../ReactPortal/Portal";
import ModalContainer from "./ModalContainer";

function Modal({ children, isOpen, handleClose, className }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);
  if (!isOpen) return null;
  return (
    <Portal wrapperId="react-portal-modal-container">
      <ModalContainer onClose={handleClose}>
        <div
        onClick={(e)=>{
            e.stopPropagation();
        }}
          className={`mx-auto max-w-[534px] bg-white w-full ${
            className ? className : "px-10 py-10 h-full"
          }`}
        >
          {children}
        </div>
      </ModalContainer>
    </Portal>
  );
}

export default Modal;
