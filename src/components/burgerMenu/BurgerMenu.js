import React, { useEffect, useRef } from "react";
import close from "../../assets/icons/close.svg";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import "./BurgerMenu.scss";

export default function BurgerMenu({ modalClose }) {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        modalClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalClose]);
  return ReactDom.createPortal(
    <div className="modal">
      <article className="modal__container" ref={modalRef}>
        <button className="modal__container-close" onClick={modalClose}>
          <img
            className="modal__container-close-img"
            src={close}
            alt="close icon"
          />
        </button>
        <nav className="modal__container-nav">
          <Link
            className="modal__container-nav-link"
            onClick={modalClose}
            to="/"
          >
            Home
          </Link>
          <Link
            className="modal__container-nav-link"
            onClick={modalClose}
            to="/products"
          >
            Products
          </Link>
        </nav>
      </article>
    </div>,
    document.getElementById("portal")
  );
}
