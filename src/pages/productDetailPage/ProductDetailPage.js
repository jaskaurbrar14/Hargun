import React from "react";
import TrendingCarousel from "../../components/trendingCarousel/TrendingCarousel.js";
import ProductDetails from "../../components/productDetails/ProductDetails.js";
import "./ProductDetailPage.scss";

function ProductDetailPage() {
  return (
    <>
      <ProductDetails />
      <TrendingCarousel />
    </>
  );
}

export default ProductDetailPage;
