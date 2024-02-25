import { useProductsContext } from "../../utils/hooks.js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState({});
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const { productId } = useParams();
  // const { getSelectedProduct } = useProductsContext();
  const getSelectedProduct = async (productId) => {
    try {
      const response = await axios.get(
        `${REACT_APP_SERVER_URL}/products/${productId}`
      );
      setSelectedProduct(response.data);
    } catch (err) {
      console.error({ err });
    }
  };
  useEffect(() => {
    if (productId) {
      getSelectedProduct(productId);
    }
  }, [productId]);
  console.log(selectedProduct.photo[0]);
  return (
    <main className="productDetail">
      <h1 className="productDetail__heading">{selectedProduct.title}</h1>
      <article key={selectedProduct.id} className="productDetail__article">
        <div className="productDetail__article-images">
          <img
            className="productDetail__article-images-main"
            src={selectedProduct.photo[0]}
            alt={selectedProduct.title}
          ></img>{" "}
          <div className="productDetail__article-images-sec">
            <img
              className="productDetail__article-images-sec-1"
              src={selectedProduct.photo[1]}
              alt={selectedProduct.title}
            ></img>{" "}
            <img
              className="productDetail__article-images-sec-2"
              src={selectedProduct.photo[2]}
              alt={selectedProduct.title}
            ></img>{" "}
            <img
              className="productDetail__article-images-sec-3"
              src={selectedProduct.photo[3]}
              alt={selectedProduct.title}
            ></img>{" "}
          </div>
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
