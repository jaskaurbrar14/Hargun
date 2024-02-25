import { useProductsContext } from "../../utils/hooks.js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import bangles0 from "../../assets/images/ChainedChoker/1.jpg";
import bangles1 from "../../assets/images/ChainedChoker/2.jpg";
import bangles2 from "../../assets/images/ChainedChoker/3.jpg";
import bangles3 from "../../assets/images/ChainedChoker/4.jpg";

// imported the pictures for products seperately as I was having internet issues and thr pictures were'nt loading. leaving the commented code to test with pictures from frontend incase the picturess take long or load from the backend.
function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState({});
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const { productId } = useParams();
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

  return (
    <main className="productDetail">
      <h1 className="productDetail__heading">{selectedProduct.title}</h1>
      <article key={selectedProduct.id} className="productDetail__article">
        {/* <div className="productDetail__article-images">
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
        </div> */}
        <div className="productDetail__article-images">
          <img
            className="productDetail__article-images-main"
            src={bangles0}
            alt={selectedProduct.title}
          ></img>{" "}
          <div className="productDetail__article-images-sec">
            <img
              className="productDetail__article-images-sec-1"
              src={bangles1}
              alt={selectedProduct.title}
            ></img>{" "}
            <img
              className="productDetail__article-images-sec-2"
              src={bangles2}
              alt={selectedProduct.title}
            ></img>{" "}
            <img
              className="productDetail__article-images-sec-3"
              src={bangles3}
              alt={selectedProduct.title}
            ></img>{" "}
          </div>
        </div>
        <section className="productDetail__article-details">
          <p className="productDetail__article-details-description">
            {selectedProduct.description}
          </p>
          <div className="productDetail__article-details-pricing">
            <div className="productDetail__article-details-pricing-container">
              <p className="productDetail__article-details-pricing-container-quantity">
                Quantity
              </p>
              <div className="productDetail__article-details-pricing-container-numbers">
                <button
                  className="productDetail__article-details-pricing-container-numbers-minus"
                  type="submit"
                >
                  {" "}
                  -{" "}
                </button>
                <p className="productDetail__article-details-pricing-container-numbers-value">
                  {" "}
                  1
                </p>
                <button
                  type="submit"
                  className="productDetail__article-details-pricing-container-numbers-plus"
                >
                  {" "}
                  +{" "}
                </button>
              </div>
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
              className="productDetail__article-details-cta-buy"
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
