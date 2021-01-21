import React, { useContext } from "react";
import { Box, makeStyles, Paper } from "@material-ui/core";

import ProductCardHeader from "./ProductCardHeader";
import ProductCardContent from "./ProductCardContent";
import ProductCardFooter from "./ProductCardFooter";
import { CartContext } from "./CartContext";

const useStyles = makeStyles((theme) => {
  return {
    paperStyling: {
      padding: "35px 0",
    },
  };
});

export default function CartItemCard({ id, name, price }) {
  const classes = useStyles();
  const { hideProduct } = useContext(CartContext);
  return (
    <div>
      {hideProduct && (
        <Paper variant="outlined" className={classes.paperStyling}>
          <Box width="95%" mx="auto">
            <ProductCardHeader />
            <ProductCardContent price={price} />
            <ProductCardFooter />
          </Box>
        </Paper>
      )}
    </div>
  );
}
