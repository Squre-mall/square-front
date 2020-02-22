import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Box from "@material-ui/core/Box";


const useStyles = makeStyles({
  menu: {
    height: "100%",
    width: "10em",
    padding: "2em 100px",
    position: "fixed",
    flex: 1
  },
  menuItem: {
    textDecoration: "none",
    color : "#484848"
  },
  titleMenu: {
    fontSize: 20,
    padding : 10,
  },
  listItem:{
    display:"flex",
    padding : "10px 10px"
  },
  iconMenu:{
    fontSize: 20,
  },
  footer:{
    padding : "10px 10px",
    fontSize:15,
    lineHeight : "20px"
  }
});

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <Link to="/" className={classes.menuItem}>
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
      <hr />
      <Link to="/notice" className={classes.menuItem}>
        <Box className = {classes.listItem}>
          <ErrorOutlineIcon style = {{fontSize : 20, padding: 1}} />
          <Typography className={classes.iconMenu} variant="h3">
            Notice
          </Typography>
        </Box>
      </Link>
      <Link to="/Board" className={classes.menuItem}>
        <Box className = {classes.listItem}>
          <ContactSupportIcon style = {{fontSize : 20, padding: 1}} />
          <Typography className={classes.iconMenu} variant="h3">
            Q&A
          </Typography>
        </Box>
      </Link>
      <hr />
      <div className = {classes.footer}>
        <div> Made by Lee Hosu </div>
      </div>
    </div>
  );
};

export default Menu;
