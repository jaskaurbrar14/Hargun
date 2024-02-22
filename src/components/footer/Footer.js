import "./Footer.scss";
import { Link } from "react-router-dom";
import hargun from "../../assets/logo/hargun.png";
import facebook from "../../assets/icons/Icon-facebook.svg";
import twitter from "../../assets/icons/Icon-twitter.svg";
import instagram from "../../assets/icons/Icon-instagram.svg";
import mail from "../../assets/icons/mail.svg";

import React from "react";

function Footer() {
  return (
    <footer>
      <article>
        <h3>Subscribe for Offers</h3>
        <form>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your@email.com"
            minLength="1"
            maxLength="100"
            required
          ></input>
          <button>Subscribe</button>
        </form>
      </article>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Store locator</a>
        </li>
        <li>
          <a href="#">FAQS</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
