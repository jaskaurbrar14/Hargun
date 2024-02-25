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
  return (
    <main className="">
      <h1 className="">{selectedProduct.title}</h1>
      <article key={selectedProduct.id} className="">
        {/* <div>
          <img
            className=""
            src={selectedProduct.photo[0]}
            alt={selectedProduct.title}
          ></img>{" "}
          <div>
            <img
              className=""
              src={selectedProduct.photo[1]}
              alt={selectedProduct.title}
            ></img>{" "}
            <img
              className=""
              src={selectedProduct.photo[2]}
              alt={selectedProduct.title}
            ></img>{" "}
            <img
              className=""
              src={selectedProduct.photo[3]}
              alt={selectedProduct.title}
            ></img>{" "}
          </div>
        </div> */}
        <section className="">
          <p className="">{selectedProduct.description}</p>
          <p className="">${selectedProduct.price}</p>
          <div>
            <button type="submit" className="">
              Add to Cart
            </button>
            <button type="submit" className="">
              Buy Now
            </button>
          </div>
        </section>
      </article>
    </main>
  );
}

export default ProductDetails;
