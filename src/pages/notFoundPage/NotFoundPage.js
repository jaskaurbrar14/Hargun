import React, { useEffect } from "react";
import "./NotFoundPage.scss";
import { Navigate } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="modal">
      <article className="modal__container">
        <h3 className="modal__container-heading">Page Not Found </h3>
        <p className="modal__container-description">
          Please click on the button below to go to main page.
        </p>
        <button onClick={Navigate("/")}>Go to HomePage</button>
      </article>
    </section>
  );
}

export default NotFoundPage;
