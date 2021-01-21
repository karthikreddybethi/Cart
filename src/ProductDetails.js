import React, { useContext } from "react";
import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  Input,
} from "@material-ui/core";

import { Remove, Add } from "@material-ui/icons";
import EditImage from "./images/edit-img.png";
import { CartContext } from "./CartContext";

const useStyles = makeStyles((theme) => {
  return {
    countDisplayStyling: {
      width: "30px",
      textAlign: "center",
      border: "1px solid #CCCCCC",
      [theme.breakpoints.down("sm")]: {
        width: "15px",
        height: "16px",
        fontSize: "0.9rem",
      },

      "& input": {
        padding: "4px 0 5px",
        textAlign: "center",
      },
      "&.MuiInput-underline:before": {
        display: "none",
      },
      "&.MuiInput-underline:after": {
        display: "none",
      },
    },
    editIconStyling: {
      display: "inline-block",
      padding: "4px",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },

    productDetails: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-evenly",
      },
      "& .MuiGrid-item": {
        [theme.breakpoints.down("sm")]: {
          padding: "10px",
          marginLeft: "20px",
        },
      },
    },
  };
});

export default function ProductDetails({ price }) {
  const classes = useStyles();

  const {
    inputValue,
    setInputValue,
    setSubtotalPrice,
    handleInputDisplay,
  } = useContext(CartContext);

  function handleIncr() {
    let tPrice = (inputValue + 1) * price;
    setSubtotalPrice(tPrice.toFixed(2));

    setInputValue((prevValue) => {
      return prevValue + 1;
    });
  }

  function handleDecr() {
    if (inputValue > 1) {
      let tPrice = (inputValue - 1) * price;
      setSubtotalPrice(tPrice.toFixed(2));
    }
    setInputValue((prevValue) => {
      if (prevValue > 1) {
        return setInputValue(prevValue - 1);
      } else {
        return setInputValue(1);
      }
    });
  }

  function handleUpdate(e) {
    handleInputDisplay();
  }

  return (
    <Grid container spacing={9} className={classes.productDetails}>
      <Grid item>
        <Typography paragraph>HeadPhones</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          ${(inputValue * price).toFixed(2)}
        </Typography>
      </Grid>
      <Grid item>
        <Box display="flex" alignItems="flex-start" justifyContent="center">
          <IconButton name="decr" onClick={handleDecr}>
            <Remove />
          </IconButton>
          <Input
            type="tel"
            value={inputValue}
            className={classes.countDisplayStyling}
          />
          <IconButton name="decr" onClick={handleIncr}>
            <Add />
          </IconButton>
          <a
            onClick={handleUpdate}
            href="#"
            className={classes.editIconStyling}
          >
            <img src={EditImage} alt="edit-img" />
          </a>
        </Box>
      </Grid>
    </Grid>
  );
}
