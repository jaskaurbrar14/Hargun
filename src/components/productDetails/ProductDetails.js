import { useProductsContext } from "../../utils/hooks.js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { getSelectedProduct, selectedProduct } = useProductsContext();

  const { productId } = useParams();
  useEffect(() => {
    if (productId) {
      getSelectedProduct(productId);
    }
  }, [productId]);
  const photos = selectedProduct.photo;
  return (
    <main className="productDetail">
      <h1 className="productDetail__heading">{selectedProduct.title}</h1>
      <article key={selectedProduct.id} className="productDetail__article">
        <div className="productDetail__article-images">
          {photos.map((photo) => (
            <img
              src={photo}
              alt={selectedProduct.title}
              className="productDetail__article-images-image"
            />
          ))}
        </div>
        <section className="productDetail__article-details">
          <p className="productDetail__article-details-description">
            {selectedProduct.description}
          </p>
          <div className="productDetail__article-details-pricing">
            <p className="productDetail__article-details-pricing-quantity">
              Quantity
            </p>
            <div className="productDetail__article-details-pricing-numbers">
              <button
                className="productDetail__article-details-pricing-numbers-minus"
                type="submit"
              >
                {" "}
                -{" "}
              </button>
              <p className="productDetail__article-details-pricing-numbers-value"></p>
              <button
                type="submit"
                className="productDetail__article-details-pricing-numbers-plus"
              >
                {" "}
                +{" "}
              </button>
            </div>
            <p className="productDetail__article-details-pricing-price">
              ${selectedProduct.price}
            </p>
          </div>
          <div className="productDetail__article-details-cta">
            <button
              type="submit"
              className="productDetail__article-details-cta-cart"
            >
              Add to Cart
            </button>
            <button
              type="submit"
              className="productDetail__articlep-details-cta-buy"
            >
              Buy Now
            </button>
          </div>
        </section>
      </article>
    </main>
  );
}

export default ProductDetails;
