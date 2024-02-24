import "./Main.scss";
import { Link } from "react-router-dom";
import React from "react";
import heroImage from "../../assets/images/hero-image.png";

function Main() {
  return (
    <main className="main">
      <section className="main__hero">
        <img className="main__hero-img" src={heroImage} alt="Hargun hero" />
      </section>
      <article className="main__story">
        <h1 className="main__story-heading"> Our Story</h1>
        <p className="main__story-text">
          Hargun is a one-stop-jewellery- destination where one can find jewels
          for every occasion. Be it dailywear or festive, you can find it all
          under one roof. Each piece of jewelry holds a unique place in a
          woman's heart, with heirlooms carrying stories through generations.
        </p>
        <p className="main__story-text">
          {" "}
          Our mission is to present jewellery that not only narrates tales but
          also evolves into cherished heirlooms - meaningful gifts designed to
          be embraced and passed on.
        </p>
      </article>
      <section className="main__products">
        <div className="main__products-overlay">
          <Link className="main__products-overlay-link" to="/products">
            <h2 className="main__products-overlay-link-heading">
              Handcrafted in Canada
            </h2>
            <p className="main__products-overlay-link-text">
              Premium Quality and Chic Style handcrafted jewellery.
            </p>{" "}
          </Link>
        </div>{" "}
      </section>
    </main>
  );
}

export default Main;
