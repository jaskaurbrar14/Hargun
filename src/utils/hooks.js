import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import moment from "moment";

const ProductsContext = createContext();
export default function ProductProvider({ children }) {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const [allProducts, setAllProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  // get selected product
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

  // get all products
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/products`);
      setAllProducts(response.data);
    } catch (err) {
      console.error({ err });
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  // get all trending products
  const getTrendingProducts = async () => {
    try {
      const response = await axios.get(
        `${REACT_APP_SERVER_URL}/products/trending`
      );
      setTrendingProducts(response.data);
    } catch (err) {
      console.error({ err });
    }
  };
  useEffect(() => {
    getTrendingProducts();
  }, []);

  // Filter trending products
  const filteredTrendingProducts = trendingProducts.filter(
    (product) => product.id !== selectedProduct.id
  );
  const funcValue = {
    allProducts,
    trendingProducts,
    getSelectedProduct,
    selectedProduct,
    filteredTrendingProducts,
    REACT_APP_SERVER_URL,
  };
  return (
    <ProductsContext.Provider value={funcValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
