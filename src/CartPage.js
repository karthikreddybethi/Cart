import React, { useContext } from "react";
import { Box, ThemeProvider, Typography } from "@material-ui/core";
import theme from "./theme";
import Cart from "./Cart";
import CardPageHeader from "./CartPageHeader";
import success from "./images/check.png";
import { CartContext } from "./CartContext";

export default function CartPage() {
  const { successMsg } = useContext(CartContext);
  return (
    <Box>
      {successMsg ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="90%"
          mx="auto"
          height="95vh"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box flexBasis="10%" p="30px">
              <img src={success} alt="" />
            </Box>
            <Box flexBasis="90%">
              <Typography variant="h4" align="center">
                Your order has been submitted successfully
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <ThemeProvider theme={theme}>
          <Box width="90%" mx="auto" mt="50px">
            <CardPageHeader />
            <Cart />
          </Box>
        </ThemeProvider>
      )}
    </Box>
  );
}
