import React from "react";
import TrendingCarousel from "../../components/trendingCarousel/TrendingCarousel.js";
import AllProducts from "../../components/allProducts/AllProducts.js";
import "./ProductsPage.scss";
function ProductsPage() {
  return (
    <>
      <AllProducts />
      <TrendingCarousel />
    </>
  );
}

export default ProductsPage;
