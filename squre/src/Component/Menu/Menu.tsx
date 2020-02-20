import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  menu: {
    height: "100%",
    width: 80,
    padding: 100,
    position: "relative",
    flex: 1
  },
  menuItem: {
    textDecoration: "none"
  },
  titleMenu: {
    fontSize: 20,
    padding: 30
  }
});

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <a href="/" className={classes.menuItem}>
        <Typography className={classes.titleMenu} variant="h3">
          Outer
        </Typography>
      </a>
      <a href="/" className={classes.menuItem}>
        <Typography className={classes.titleMenu} variant="h3">
          Top
        </Typography>
      </a>
      <a href="/" className={classes.menuItem}>
        <Typography className={classes.titleMenu} variant="h3">
          Bottom
        </Typography>
      </a>
    </div>
  );
};

export default Menu;
