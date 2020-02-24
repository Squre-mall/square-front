import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: 100,
    display: "flex",
    padding: "6em 0 2em"
  },
  buttonBox:{
    display : "flex",
    paddingRight:"11em"
  },
  button: {
    padding: "30px 0.5em"
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
        <Box style={{flex : 1}}/>
        <Box style={{paddingRight : "11em", display:"flex"}}>
          <Box className={classes.button}>
            <Button variant="outlined" size="medium" disableElevation>
              LOG IN
            </Button>
          </Box>
          <Box className={classes.button}>
            <Button variant="outlined" size="medium" disableElevation>
              JOIN US
            </Button>
          </Box>
        </Box>
    </div>
  );
};

export default Header;
