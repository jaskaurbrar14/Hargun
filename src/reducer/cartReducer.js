import React from "react";
function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { quantity, selectedProduct } = action.payload;
  }
  return state;
}

export default cartReducer;
