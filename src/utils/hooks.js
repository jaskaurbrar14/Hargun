import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductsContext = createContext();
export default function ProductProvider({ children }) {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const { productId } = useParams();

  const [allProducts, setAllProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);

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

  const funcValue = {
    allProducts,
    trendingProducts,
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
