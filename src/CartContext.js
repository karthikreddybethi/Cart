import React, { createContext, useState } from "react";
import productData from "./data/products.json";

export const CartContext = createContext();

export const CartDataProvider = (props) => {
  const [data, setData] = useState(productData);
  const [inputValue, setInputValue] = useState(1);
  const [initPrice, setInitPrice] = useState();
  const [subtotalPrice, setSubtotalPrice] = useState(11.9);
  const [subtotal, setSubtotal] = useState(11.9);
  const [hideProduct, setHideProduct] = useState(true);
  const [successMsg, setSuccessMsg] = useState(false);

  function handleInputDisplay() {
    setSubtotal(() => {
      return subtotalPrice;
    });
  }

  function handleCheckOut() {
    setSuccessMsg(true);
  }

  let shippingCost = hideProduct ? (subtotal > 100 ? 0 : 23.8) : 0;
  let grandTotal = parseFloat(subtotal) + parseFloat(shippingCost);

  return (
    <CartContext.Provider
      value={{
        data: data,
        setInitPrice: setInitPrice,
        inputValue: inputValue,
        setInputValue: setInputValue,
        initPrice: initPrice,
        subtotalPrice: subtotalPrice,
        setSubtotalPrice: setSubtotalPrice,
        subtotal: subtotal,
        setSubtotal: setSubtotal,
        handleInputDisplay: handleInputDisplay,
        hideProduct: hideProduct,
        setHideProduct: setHideProduct,
        shippingCost: shippingCost,
        grandTotal: grandTotal,
        successMsg: successMsg,
        setSuccessMsg: setSuccessMsg,
        handleCheckOut: handleCheckOut,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
