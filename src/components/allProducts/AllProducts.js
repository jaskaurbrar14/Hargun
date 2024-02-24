import { Link } from "react-router-dom";
import { useProductsContext } from "../../utils/hooks.js";
import React from "react";
import "./AllProducts.scss";

function AllProducts() {
  const { allProducts } = useProductsContext();

  return (
    <main className="products">
      <h1 className="products__heading">All products</h1>
      <ul className="products__article">
        {" "}
        {allProducts.map((product) => (
          <li key={product.id} className="products__article-card">
            <Link
              className="products__article-card-link"
              to={`/products/${product.id}`}
            >
              <div className="products__article-card-link-container">
                <img
                  className="products__article-card-link-container-image"
                  src={product.photo[0]}
                  alt={product.title}
                ></img>
              </div>
              <section className="products__article-card-link-info">
                <p className="products__article-card-link-info-title">
                  {product.title}
                </p>
                <p className="products__article-card-link-info-price">
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
