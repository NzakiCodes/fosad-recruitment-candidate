import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";
import { useEffect } from "react";
import Portal from "../ReactPortal/Portal";
import ModalContainer from "./ModalContainer";

function Modal({
  children,
  isOpen,
  handleClose,
  className,
}: {
  children:
    | ReactElement
    | ReactNode
    | ReactElement<any, string | JSXElementConstructor<any>>;
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
}) {
  useEffect(() => {
    const handleKeyDown = (e:any) => {
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
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`mx-auto max-w-[534px] lg:max-w-2xl lg:rounded-lg bg-white w-full ${
            className ? className : ""
          }`}
        >
          {children}
        </div>
      </ModalContainer>
    </Portal>
  );
}

export default Modal;
