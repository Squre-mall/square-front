import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    position: "fixed",
    bottom: 60,
    right: 60,
    zIndex: 99,
    fontsize: 18,
    border: "none",
    outline: "none",
    backgroundColor: "white",
    color: "white",
    cursor: "pointer",
    padding: 20,
    borderRadius: 4
  }
});

const ScrollTop = () => {
  const classes = useStyles();

  const onScrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="scroll-top">
      <IconButton
        aria-label="delete"
        className={classes.button}
        onClick={onScrollTop}
      >
        <KeyboardArrowUpIcon style={{ color: "black" }} />
      </IconButton>
    </div>
  );
};

export default ScrollTop;
