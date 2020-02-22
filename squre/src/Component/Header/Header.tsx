import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import squareIcon from "./square-icon.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: 100,
    display: "flex",
    padding: "2em 0 2em"
  },
  titleBox: {
    flex: 1
  },
  title: {
    padding: 30,
    fontSize: 30,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 400
  },
  buttonBox: {
    padding: "30px 10em"
  },
  img: {
    width: 200,
    paddingLeft: 80,
    paddingTop: 10
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Box className={classes.titleBox}>
        <Link to="/">
          <img src={squareIcon} alt="squareIcon" className={classes.img} />
        </Link>
      </Box>
      <Box className={classes.buttonBox}>
        <Button variant="outlined" size="medium" disableElevation>
          Log In
        </Button>
      </Box>
    </div>
  );
};

export default Header;
