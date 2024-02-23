import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import BurgerMenu from "../burgerMenu/BurgerMenu.js";
import hargun from "../../assets/logo/hargun.png";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/user-circle.svg";
import cart from "../../assets/icons/shopping-cart.svg";
import menu from "../../assets/icons/menu.svg";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const modalOpen = () => {
    setOpenModal(true);
  };
  const modalClose = () => {
    setOpenModal(false);
  };
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__wrapper-logo">
          <img
            className="header__wrapper-logo-img"
            src={hargun}
            alt="Site-logo"
          />{" "}
        </Link>
        <button className="header__wrapper-search">
          <img
            src={search}
            alt="search-logo"
            className="header__wrapper-search-img"
          />
        </button>
        <button className="header__wrapper-burger-menu" onClick={modalOpen}>
          <img
            className="header__wrapper-burger-menu-img"
            src={menu}
            alt="burger-menu-logo"
          />{" "}
        </button>
        {openModal && <BurgerMenu modalClose={modalClose} />}
        <nav className="header__wrapper-nav">
          <Link className="header__wrapper-nav-link" to="/">
            Home
          </Link>
          <Link className="header__wrapper-nav-link" to="/products">
            Products
          </Link>
        </nav>
        <Link className="header__wrapper-profile">
          <img
            className="header__wrapper-profile-img"
            src={profile}
            alt="profile-logo"
          />{" "}
        </Link>
        <Link className="header__wrapper-cart">
          <img
            className="header__wrapper-cart-img"
            src={cart}
            alt="cart-logo"
          />{" "}
        </Link>
      </div>
    </header>
  );
}
export default Header;
