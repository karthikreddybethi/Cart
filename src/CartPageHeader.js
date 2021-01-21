import React, { useContext } from "react";
import { Box, Grid, makeStyles, Typography, Button } from "@material-ui/core";
import CommonButton from "./CommonButton";
import { CartContext } from "./CartContext";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      fontSize: "1.5rem",
      color: theme.palette.grey[600],
    },
    chkBtn: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  };
});

export default function CartPageHeader() {
  const classes = useStyles();
  const { handleCheckOut } = useContext(CartContext);
  function handleCheckOutPage() {
    handleCheckOut();
  }
  return (
    <header>
      <Box mb="30px">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography className={classes.root} variant="body1">
              Shopping Cart
            </Typography>
          </Grid>
          <Grid item className={classes.chkBtn}>
            <Button
              onClick={handleCheckOutPage}
              variant="contained"
              color="primary"
            >
              Proceed to checkout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </header>
  );
}
