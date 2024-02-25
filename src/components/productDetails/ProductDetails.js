import { useProductsContext } from "../../utils/hooks.js";
import React from "react";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { selectedProduct } = useProductsContext();
  const { product_id } = useParams();

  return (
    <main className="">
      <h1 className="">{selectedProduct.title}</h1>
      <article key={selectedProduct.id} className="">
        <div>
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
        </div>
        <section className="">
          <p className="">{selectedProduct.description}</p>
          <p className="">${selectedProduct.price}</p>
          <div>
            <button type="submit" className="" onClick={""}>
              Add to Cart
            </button>
            <button type="submit" className="" onClick={""}>
              Buy Now
            </button>
          </div>
        </section>
      </article>
    </main>
  );
}

export default ProductDetails;
