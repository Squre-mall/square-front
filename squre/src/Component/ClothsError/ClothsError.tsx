import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  headerTitle: {
    padding: "0 40px",
    fontSize: 100,
    color: "red"
  },
  text: {
    padding: "0 40px",
    fontSize: 50
  }
});

const ClothsError = ({ text }) => {
  const classes = useStyles();
  return (
    <div className="errorpage">
      <Typography className={classes.headerTitle}>
        ERROR ...
        <span role="img" aria-label="error">
          🤬
        </span>
      </Typography>
      <Box className={classes.text}>{text} Not working </Box>
    </div>
  );
};

export default ClothsError;
