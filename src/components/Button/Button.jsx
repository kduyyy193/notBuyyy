import React from "react";
import { Button as MuiButton } from "@mui/material";
const Button = ({ ...props }) => {
  return (
    <MuiButton
      type="submit"
      variant={props.variant}
      className={props.className}
    >
      {props.text}
    </MuiButton>
  );
};
export default Button;
