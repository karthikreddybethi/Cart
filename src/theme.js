import { createMuiTheme, Typography } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { grey } from "@material-ui/core/colors";

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        fontSize: "1rem",
        padding: "7px 17px",
      },
      contained: {
        "&:hover": {
          backgroundColor: "none",
        },
      },
      containedPrimary: {
        backgroundColor: "#000000",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "#000000",
        },
        [breakpoints.down("sm")]: {
          "&:hover": {
            backgroundColor: "#000000",
          },
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: "8px",
        borderRadius: "initial",
        border: "1px solid #CCCCCC",
        backgroundColor: "#F4F4F4",
        "& svg": {
          width: "0.5em",
          height: "0.5em",
        },
        [breakpoints.down("sm")]: {
          padding: "1px",
        },
      },
    },
    MuiInput: {
      root: {
        [breakpoints.down("sm")]: {
          width: "15px",
        },
        "&:hover:before": {
          borderBottom: "5px solid red",
        },
      },
    },
    MuiTypography: {
      h6: {
        fontSize: "1.1rem",
        color: grey[600],
        fontWeight: "bold",
        padding: "none",
      },
      body1: {
        fontSize: "1rem",
        color: grey[600],
        fontWeight: "bold",
        padding: "none",
      },
      h5: {
        fontSize: "1.3rem",
        color: "black",
        fontWeight: "bold",
        padding: "none",
      },
      subtitle1: {
        fontSize: "1rem",
        color: "black",
        fontWeight: "bold",
        padding: "none",
      },
      paragraph: {
        color: grey[600],
        fontWeight: "normal",
      },
    },
  },
});

export default theme;
