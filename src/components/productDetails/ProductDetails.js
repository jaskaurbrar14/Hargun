import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Slider from "react-slick";

function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  // to Decrement and Increment the quantity of products
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  // function to add products into cart
  const submitAddToCart = async (event) => {
    event.preventDefault();
    const data = {
      product_id: selectedProduct.id,
      product_quantity: quantity,
    };

    try {
      const res = await axios.patch(
        `${REACT_APP_SERVER_URL}/add-to-cart`,
        data
      );
      if (res.data.status === 201) {
        swal({
          icon: "success",
          text: `"success" ${res.data.message} "success"`,
        });
      } else if (res.data.status === 409) {
        swal({
          icon: "warning",
          text: `"warning") ${res.data.message} "warning"`,
        });
      }
    } catch (err) {
      console.error({ err });
    }
  };

  // slider settings
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {selectedProduct && (
        <main className="productDetail">
          <h1 className="productDetail__heading">{selectedProduct.title}</h1>
          <article key={selectedProduct.id} className="productDetail__article">
            <div className="productDetail__article-images">
              <Slider {...settings}>
                <img
                  className="productDetail__article-images-main"
                  src={selectedProduct.photo[0]}
                  alt={selectedProduct.title}
                ></img>{" "}
              </Slider>

              <div className="productDetail__article-images-sec">
                {selectedProduct.photo.map((photo, index) => {
                  if (index >= 1) {
                    return (
                      <img
                        key={index}
                        className={`productDetail__article-images-sec-${index}`}
                        src={photo}
                        alt="product photo"
                      />
                    );
                  }
                  return null;
                })}
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
                      type="button"
                      onClick={handleDecrement}
                    >
                      {" "}
                      -
                    </button>
                    <div className="productDetail__article-details-pricing-container-numbers-value">
                      {" "}
                      {quantity}
                    </div>
                    <button
                      type="button"
                      onClick={handleIncrement}
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
                  onClick={(event) => submitAddToCart(event)}
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
      )}
    </>
  );
}

export default ProductDetails;
