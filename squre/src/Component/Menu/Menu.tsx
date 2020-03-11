import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import squareIcon from "./square-icon.png";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

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
  footer: {},
  link: {
    textDecoration: "none"
  },
  button: {
    padding: "5px 10px"
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
        <Link to={`/square-front/category/outer`} className={classes.menuItem}>
          <Typography className={classes.titleMenu} variant="h3">
            Outer
          </Typography>
        </Link>
        <Link to={`/square-front/category/top`} className={classes.menuItem}>
          <Typography className={classes.titleMenu} variant="h3">
            Top
          </Typography>
        </Link>
        <Link to={`/square-front/category/pants`} className={classes.menuItem}>
          <Typography className={classes.titleMenu} variant="h3">
            Pants
          </Typography>
        </Link>
        <hr />
        <Link to="/square-front/notice" className={classes.menuItem}>
          <Box className={classes.listItem}>
            <Typography className={classes.iconMenu} variant="h3">
              Notice
            </Typography>
          </Box>
        </Link>
        <Link to="/square-front/board" className={classes.menuItem}>
          <Box className={classes.listItem}>
            <Typography className={classes.iconMenu} variant="h3">
              Q&A
            </Typography>
          </Box>
        </Link>
        <hr />
        <div className={classes.footer}>
          <a
            href="http://squaremall.pythonanywhere.com/admin/"
            className={classes.link}
          >
            <IconButton
              aria-label="move the admin page"
              className={classes.button}
              size="small"
            >
              <SupervisorAccountIcon />
            </IconButton>
          </a>
          <a
            href="https://github.com/Squre-mall"
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              aria-label="move the our page"
              className={classes.button}
              size="small"
            >
              <GitHubIcon />
            </IconButton>
          </a>
        </div>
      </Box>
    </div>
  );
};

export default Menu;
