import { Button } from "@material-ui/core";
import React from "react";

export default function CommonButton({ btnName }) {
  return (
    <Button variant="contained" color="primary">
      {btnName}
    </Button>
  );
}
