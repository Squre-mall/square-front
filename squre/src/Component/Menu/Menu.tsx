import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  menu: {
    height: "100%",
    width: 80,
    padding: 100,
    position: "fixed",
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
      <Link to="/All" className={classes.menuItem}>
        <Typography className={classes.titleMenu} variant="h3">
          All
        </Typography>
      </Link>
      <Link to="/Outer" className={classes.menuItem}>
        <Typography className={classes.titleMenu} variant="h3">
          Outer
        </Typography>
      </Link>
      <Link to="/Top" className={classes.menuItem}>
        <Typography className={classes.titleMenu} variant="h3">
          Top
        </Typography>
      </Link>
      <Link to="/bottom" className={classes.menuItem}>
        <Typography className={classes.titleMenu} variant="h3">
          Bottom
        </Typography>
      </Link>
    </div>
  );
};

export default Menu;
