import React, { useContext } from "react";
import { Grid, makeStyles } from "@material-ui/core";

import CartTotals from "./CartTotals";
import CartItemCard from "./CartItemCard";
import { CartContext } from "./CartContext";

const useStyles = makeStyles((theme) => {
  return {
    paperStyling: {
      padding: "35px 0",
    },
    cartItem: {
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    cartTotalStyling: {
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  };
});

export default function ProductCard() {
  const classes = useStyles();
  const { data } = useContext(CartContext);

  return (
    <div>
      <Grid container spacing={4} wrap="wrap">
        <Grid item sm={12} md={9} className={classes.cartItem}>
          {data.map((product, index) => {
            return <CartItemCard key={index} {...product} />;
          })}
        </Grid>
        <Grid item sm={12} md={3} className={classes.cartTotalStyling}>
          <CartTotals />
        </Grid>
      </Grid>
    </div>
  );
}
