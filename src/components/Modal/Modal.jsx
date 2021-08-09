import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", () => onClose());
    return () => {
      window.removeEventListener("keydown", onClose());
    };
    // eslint-disable-next-line
  }, []);

  function handleOverlayClick(evt) {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  }

  return createPortal(
    <div className={s.overlay} onClick={handleOverlayClick}>
      <div className={s.modal}>{children}</div>
      <button type="button" className={s.closebtn} onClick={onClose}>
        <MdClose size="2em" />
      </button>
    </div>,
    modalRoot
  );
}
export default Modal;
