import { Link } from "react-router-dom";
import { useProductsContext } from "../../utils/hooks.js";
import React from "react";
import "./AllProducts.scss";

function AllProducts() {
  const { allProducts } = useProductsContext();

  return (
    <main className="main">
      <h2 className="main__heading">All products</h2>
      <ul className="main__article">
        {" "}
        {allProducts.map((product) => (
          <li key={product.id} className="main__article-card">
            <Link
              className="main__article-card-link"
              to={`/products/${product.id}`}
            >
              <div className="main__article-card-link-container">
                <img
                  className="main__article-card-link-container-image"
                  src={product.photo[0]}
                  alt={product.title}
                ></img>
              </div>
              <section className="main__article-card-link-info">
                <p className="main__article-card-link-info-title">
                  {product.title}
                </p>
                <p className="main__article-card-link-info-price">
                  ${product.price}
                </p>
              </section>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default AllProducts;
