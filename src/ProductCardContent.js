import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
import ProductCardMedia from "./ProductCardMedia";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderBottom: `2px solid ${theme.palette.grey[400]}`,
      borderTop: `2px solid ${theme.palette.grey[400]}`,
      [theme.breakpoints.down("sm")]: {
        padding: "30px",
      },
    },
    paperStyling: {
      padding: "35px 0",
    },

    content: {
      [theme.breakpoints.down("md")]: {
        flex: "1",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "10px",
        flex: "1",
      },
      "& p": {
        [theme.breakpoints.down("sm")]: {
          fontSize: "0.9rem",
        },
      },
      "& .MuiGrid-item": {
        order: "2",
        [theme.breakpoints.down("sm")]: {
          padding: "5px",
        },

        "& p": {
          margin: "0",
        },
      },
    },
    containerMedia: {
      [theme.breakpoints.up("sm")]: {
        flex: "1",
      },
      [theme.breakpoints.down("xs")]: {
        order: "2",
      },
    },
  };
});

export default function ProductCardContent({ price }) {
  const classes = useStyles();

  return (
    <section className="card-content">
      <Box
        py="70px"
        mt="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.root}
      >
        <Grid
          container
          spacing={7}
          justify="flex-start"
          alignItems="center"
          className={classes.contentContainer}
        >
          <Grid item xs={12} md={6} className={classes.containerMedia}>
            <ProductCardMedia />
          </Grid>
          <Grid xs={12} item md={6} className={classes.content}>
            <ProductDetails price={price} />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
