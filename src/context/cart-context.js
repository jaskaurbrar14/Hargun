import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (quantity, selectedProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: { quantity, selectedProduct } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
