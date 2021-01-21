import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import HeadPhones from "./images/headphones.png";
import DeleteIcon from "./images/x-img.png";
import { CartContext } from "./CartContext";

export default function ProductCardMedia() {
  const {
    inputValue,
    setInputValue,
    setSubtotalPrice,
    handleInputDisplay,
    setHideProduct,
    setSubtotal,
    setZero,
  } = useContext(CartContext);
  let { shippingCost, grandTotal } = useContext(CartContext);

  function handleHideProduct() {
    setSubtotal(0);
    setSubtotalPrice(0);
    setHideProduct(false);
  }

  return (
    <Grid container sm={12} justify="space-around" alignItems="center">
      <Grid item>
        <a href="#" onClick={handleHideProduct}>
          <img src={DeleteIcon} alt="delete" />
        </a>
      </Grid>
      <Grid item>
        <img src={HeadPhones} alt="headphonesimg" />
      </Grid>
    </Grid>
  );
}
