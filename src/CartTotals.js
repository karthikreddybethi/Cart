import React, { useContext } from "react";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";

import CommonButton from "./CommonButton";
import { CartContext } from "./CartContext";

const useStyles = makeStyles((theme) => {
  return {
    shippingStyling: {
      backgroundColor: "#F5F5F5",
      border: "1px solid #CCCCCC",
    },
    cartTotalsStyling: {
      backgroundColor: "#FBFBFB",
      border: "1px solid #CCCCCC",
    },
    subtotalStyling: {
      borderBottom: "1px solid #CCCCCC",
    },
    carTotalHeaderStyling: {
      backgroundColor: "#F5F5F5",
      borderBottom: "1px solid #CCCCCC",
    },
  };
});

export default function CartTotal() {
  const classes = useStyles();
  const {
    subtotal,
    subtotalPrice,
    grandTotal,
    hideProduct,
    shippingCost,
    setSuccessMsg,
    handleCheckOut,
  } = useContext(CartContext);

  // let shippingCost = subtotal > 100 ? 0 : 23.8;
  // let grandTotal = parseFloat(subtotal) + parseFloat(shippingCost);
  function handleCheckOutPage() {
    handleCheckOut();
  }

  return (
    <div>
      <Box>
        <Box
          display="flex"
          className={classes.shippingStyling}
          justifyContent="space-between"
          alignItems="center"
          p="10px"
        >
          <Typography variant="subtitle1">SHIPPING</Typography>
          <Typography variant="subtitle1">${shippingCost}</Typography>
        </Box>
        <Box mt="20px" className={classes.cartTotalsStyling}>
          <Box
            display="flex"
            className={classes.carTotalHeaderStyling}
            justifyContent="space-between"
            alignItems="center"
            p="10px"
          >
            <Typography variant="subtitle1">CART TOTALS</Typography>
          </Box>
          <Box width="90%" mx="auto" p="15px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="10px"
              className={classes.subtotalStyling}
            >
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="subtitle1">${subtotal}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="10px"
            >
              <Typography variant="body1">Grand Total</Typography>
              <Typography variant="h5">${grandTotal}</Typography>
            </Box>
            <Box
              p="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                onClick={handleCheckOutPage}
                variant="contained"
                color="primary"
              >
                Proceed to checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
