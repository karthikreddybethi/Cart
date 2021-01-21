import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    cartItemHeaderContainer: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0",
      },
      [theme.breakpoints.up("md")]: {
        width: "100%",
        margin: "auto",
      },
      "& .MuiGrid-root": {
        padding: "10px",
        [theme.breakpoints.up("md")]: {
          // marginRight: "20px",
        },
      },
    },
    emptyBox: {
      [theme.breakpoints.down("md")]: {
        width: "48.5%",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    cartItemHeaderStyling: {
      [theme.breakpoints.down("xs")]: {
        padding: "10px",
        width: "100%",
      },
    },
    cartItemHeaderContentStyling: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-evenly",
      },
      [theme.breakpoints.up("sm")]: {
        marginLeft: "auto",
      },
    },
    typography: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.90rem",
        flex: "0",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem",
        flex: "0",
      },
    },
    productName: {
      [theme.breakpoints.up("md")]: {
        marginRight: "15px",
      },
    },
    unitPrice: {
      [theme.breakpoints.up("md")]: {
        marginRight: "35px",
      },
    },
  };
});

export default function ProductCardHeader() {
  const classes = useStyles();
  return (
    <Box pb="10px">
      <Grid
        container
        className={classes.cartItemHeaderContainer}
        spacing={7}
        justify="flex-start"
      >
        <Grid item md={6} className={classes.emptyBox}>
          <Box></Box>
        </Grid>
        <Grid item md={6} className={classes.cartItemHeaderStyling}>
          <Grid
            container
            className={classes.cartItemHeaderContentStyling}
            spacing={4}
          >
            <Grid item className={classes.productName}>
              <Typography className={classes.typography} variant="h6">
                Product Name
              </Typography>
            </Grid>
            <Grid item className={classes.unitPrice}>
              <Typography className={classes.typography} variant="h6">
                Unit Price
              </Typography>
            </Grid>
            <Grid item className={classes.qty}>
              <Typography className={classes.typography} variant="h6">
                Qty
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
