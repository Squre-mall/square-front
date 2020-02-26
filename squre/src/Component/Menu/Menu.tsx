import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Box from "@material-ui/core/Box";
import squareIcon from "./square-icon.png";

const useStyles = makeStyles({
  img: {
    width: 200
  },
  titleBox: {
    paddingTop: 20
  },
  menuBox: {
    width: 100,
    padding: 50
  },
  title: {
    padding: 30,
    fontSize: 30,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 400
  },
  menu: {
    height: "100%",
    paddingLeft: "6em",
    position: "fixed",
    flex: 1,
    top: "5em"
  },
  menuItem: {
    textDecoration: "none",
    color: "#484848"
  },
  titleMenu: {
    fontSize: 20,
    padding: 10
  },
  listItem: {
    display: "flex",
    padding: "10px 10px"
  },
  iconMenu: {
    fontSize: 15,
    fontWeight: "bold"
  },
  footer: {
    padding: "10px 10px",
    fontSize: 15,
    lineHeight: "20px"
  }
});

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <Box className={classes.titleBox}>
        <Link to="/square-front/">
          <img src={squareIcon} alt="squareIcon" className={classes.img} />
        </Link>
      </Box>
      <Box className={classes.menuBox}>
        <Link to="/square-front/" className={classes.menuItem}>
          <Typography className={classes.titleMenu} variant="h3">
            All
          </Typography>
        </Link>
        <Link to="/square-front/outer" className={classes.menuItem}>
          <Typography className={classes.titleMenu} variant="h3">
            Outer
          </Typography>
        </Link>
        <Link to="/square-front/top" className={classes.menuItem}>
          <Typography className={classes.titleMenu} variant="h3">
            Top
          </Typography>
        </Link>
        <Link to="/square-front/bottom" className={classes.menuItem}>
          <Typography className={classes.titleMenu} variant="h3">
            Bottom
          </Typography>
        </Link>
        <hr />
        <Link to="/square-front/notice" className={classes.menuItem}>
          <Box className={classes.listItem}>
            <ErrorOutlineIcon style={{ fontSize: 15, padding: 1 }} />
            <Typography className={classes.iconMenu} variant="h3">
              Notice
            </Typography>
          </Box>
        </Link>
        <Link to="/square-front/Board" className={classes.menuItem}>
          <Box className={classes.listItem}>
            <ContactSupportIcon style={{ fontSize: 15, padding: 1 }} />
            <Typography className={classes.iconMenu} variant="h3">
              Q&A
            </Typography>
          </Box>
        </Link>
        <hr />
        <div className={classes.footer}>
          <div> Made by Lee Hosu </div>
        </div>
      </Box>
    </div>
  );
};

export default Menu;
