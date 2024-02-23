import "./Footer.scss";
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <article className="footer__signUp">
        <div className="footer__signUp-wrapper">
          <h3 className="footer__signUp-wrapper-heading">
            Subscribe for Offers
          </h3>
          <form className="footer__signUp-wrapper-form">
            <input
              className="footer__signUp-wrapper-form-input"
              id="email"
              type="email"
              name="email"
              placeholder="Your@email.com"
              minLength="1"
              maxLength="100"
              required
            ></input>
            <button className="footer__signUp-wrapper-form-button">
              Subscribe
            </button>
          </form>
        </div>
      </article>
      <section className="footer__links">
        <ul className="footer__links-wrapper">
          <li className="footer__links-wrapper-list">
            <Link className="footer__links-wrapper-list-link" to="/">
              About
            </Link>
          </li>
          <li className="footer__links-wrapper-list">
            <Link className="footer__links-wrapper-list-link" to="/">
              Store locator
            </Link>
          </li>
          <li className="footer__links-wrapper-list">
            <Link className="footer__links-wrapper-list-link" to="/">
              FAQS
            </Link>
          </li>
          <li className="footer__links-wrapper-list">
            <Link className="footer__links-wrapper-list-link" to="/">
              News
            </Link>
          </li>
          <li className="footer__links-wrapper-list">
            <Link className="footer__links-wrapper-list-link" to="/">
              Careers
            </Link>
          </li>
          <li className="footer__links-wrapper-list">
            <Link className="footer__links-wrapper-list-link" to="/">
              Contact Us
            </Link>
          </li>
        </ul>{" "}
      </section>
    </footer>
  );
}

export default Footer;
