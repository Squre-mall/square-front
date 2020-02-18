import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  menu: {
    height: "100%",
    width: 80,
    padding: 100,
    position: "absolute"
    // backgroundColor: "#D8D8D8"
  },
  titleMenu: {
    fontSize: 20
  }
});

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <a href="/">
        <Typography className={classes.titleMenu} variant="h3">
          Squre
        </Typography>
      </a>
      <a href="/">
        <Typography className={classes.titleMenu} variant="h3">
          Squre
        </Typography>
      </a>
      <a href="/">
        <Typography className={classes.titleMenu} variant="h3">
          Squre
        </Typography>
      </a>
    </div>
  );
};

export default Menu;
