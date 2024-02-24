import React, { useEffect } from "react";
import "./NotFoundPage.scss";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <article className="container">
      <h1 className="container__heading">Page Not Found </h1>
      <p className="container__description">
        Please click on the button below to go to main page.
      </p>
      <button type="submit" className="container__button" onClick={handleClick}>
        Go to HomePage
      </button>
    </article>
  );
}

export default NotFoundPage;
