import React, { useContext } from "react";
import { Box, makeStyles, Button } from "@material-ui/core";

import { CartContext } from "./CartContext";

const useStyles = makeStyles((theme) => {
  return {
    footerStyling: {
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
    },
  };
});

export default function ProductCardFooter() {
  const classes = useStyles();
  const { handleInputDisplay } = useContext(CartContext);

  function handleUpdate() {
    handleInputDisplay();
  }

  return (
    <Box
      mt="20px"
      display="flex"
      alignItems="flex-end"
      justifyContent="flex-end"
      className={classes.footerStyling}
    >
      <Button onClick={handleUpdate} variant="contained" color="primary">
        Update Shopping Cart
      </Button>
    </Box>
  );
}
